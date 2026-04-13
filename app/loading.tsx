import { Container } from "@/components/site/container";

export default function Loading() {
  return (
    <Container className="py-24">
      <div className="space-y-4">
        <div className="h-4 w-32 animate-pulse rounded-full bg-slate-200" />
        <div className="h-10 w-full max-w-2xl animate-pulse rounded-2xl bg-slate-200" />
        <div className="h-24 w-full max-w-3xl animate-pulse rounded-3xl bg-slate-100" />
      </div>
    </Container>
  );
}
