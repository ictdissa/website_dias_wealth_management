"use client";

import { useEffect } from "react";
import { Container } from "@/components/site/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="py-24">
      <Container className="max-w-3xl text-center">
        <Badge>Unexpected error</Badge>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Something went wrong.
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Please try again. If the issue continues, contact the team directly.
        </p>
        <div className="mt-8">
          <Button onClick={reset}>Try again</Button>
        </div>
      </Container>
    </section>
  );
}
