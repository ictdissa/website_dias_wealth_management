"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ContactPayload, ContactResponse } from "@/lib/contact";

const initialState: ContactPayload = {
  name: "",
  email: "",
  phone: "",
  message: "",
  company: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(initialState);
  const [response, setResponse] = useState<ContactResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setResponse(null);

    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await result.json()) as ContactResponse;
      setResponse(data);

      if (data.ok) {
        setForm(initialState);
      }
    } catch {
      setResponse({
        ok: false,
        message: "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function setField<K extends keyof ContactPayload>(field: K, value: ContactPayload[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-800">
            Full name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => setField("name", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
            placeholder="Your name"
            aria-invalid={Boolean(response?.errors?.name)}
          />
          {response?.errors?.name ? <p className="mt-2 text-sm text-red-700">{response.errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => setField("email", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
            placeholder="you@example.com"
            aria-invalid={Boolean(response?.errors?.email)}
          />
          {response?.errors?.email ? <p className="mt-2 text-sm text-red-700">{response.errors.email}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-800">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          autoComplete="tel"
          value={form.phone}
          onChange={(event) => setField("phone", event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
          placeholder="Optional"
          aria-invalid={Boolean(response?.errors?.phone)}
        />
        {response?.errors?.phone ? <p className="mt-2 text-sm text-red-700">{response.errors.phone}</p> : null}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(event) => setField("company", event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) => setField("message", event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
          placeholder="Tell us a little about your situation or what you would like to discuss"
          aria-invalid={Boolean(response?.errors?.message)}
        />
        {response?.errors?.message ? <p className="mt-2 text-sm text-red-700">{response.errors.message}</p> : null}
      </div>

      <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
        We use the information you provide only to respond to your enquiry and arrange the next appropriate step.
      </div>

      {response ? (
        <div
          className={`rounded-2xl border p-4 text-sm leading-7 ${
            response.ok ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-red-200 bg-red-50 text-red-900"
          }`}
          aria-live="polite"
        >
          {response.message}
        </div>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit enquiry"}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
