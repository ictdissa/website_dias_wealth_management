import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { Badge } from "@/components/ui/badge";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl text-center">
        <Badge>404</Badge>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          The page you requested does not exist or may have moved. Please use the main navigation to continue.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Return home <ArrowRight className="h-4 w-4" />
        </Link>
      </Container>
    </section>
  );
}
