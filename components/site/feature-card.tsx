import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <Card className="h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <CardContent>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
          <Icon className="h-6 w-6 text-slate-900" />
        </div>
        <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
}
