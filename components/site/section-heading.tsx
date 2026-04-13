import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  badge,
  title,
  description,
  center = false,
}: {
  badge: string;
  title: string;
  description: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl space-y-4", center && "mx-auto text-center")}>
      <Badge>{badge}</Badge>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}
