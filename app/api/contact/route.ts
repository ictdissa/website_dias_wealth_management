import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import type { ContactPayload } from "@/lib/contact";
import { validateContactPayload } from "@/lib/contact";

type RateEntry = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateStore = new Map<string, RateEntry>();

function getRateKey(forwardedFor: string | null, host: string | null) {
  return `${forwardedFor ?? "unknown"}:${host ?? "unknown-host"}`;
}

async function forwardToWebhook(payload: ContactPayload) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    console.info("Validated contact submission received", {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
    });
    return;
  }

  const webhookResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      submittedAt: new Date().toISOString(),
    }),
    cache: "no-store",
  });

  if (!webhookResponse.ok) {
    throw new Error(`Webhook delivery failed with status ${webhookResponse.status}`);
  }
}

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for");
  const host = headerStore.get("host");
  const rateKey = getRateKey(forwardedFor, host);
  const now = Date.now();

  const current = rateStore.get(rateKey);
  if (current && current.resetAt > now && current.count >= RATE_LIMIT_MAX) {
    return NextResponse.json(
      {
        ok: false,
        message: "Too many requests from this client. Please wait a few minutes and try again.",
      },
      { status: 429 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid request payload.",
      },
      { status: 400 }
    );
  }
  const errors = validateContactPayload(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please correct the highlighted fields and try again.",
        errors,
      },
      { status: 400 }
    );
  }

  const nextCount = current && current.resetAt > now ? current.count + 1 : 1;
  rateStore.set(rateKey, {
    count: nextCount,
    resetAt: now + RATE_LIMIT_WINDOW_MS,
  });

  try {
    await forwardToWebhook(payload);
  } catch (error) {
    console.error("Contact forwarding failed", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Your message was validated, but delivery failed. Please try again shortly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you. Your enquiry has been received and the team will respond shortly.",
  });
}
