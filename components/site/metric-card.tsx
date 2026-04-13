import { Card, CardContent } from "@/components/ui/card";

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <Card>
      <CardContent>
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <p className="mt-2 text-sm text-slate-600">{label}</p>
      </CardContent>
    </Card>
  );
}
