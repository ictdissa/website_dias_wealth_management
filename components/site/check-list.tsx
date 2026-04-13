import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className={cn("flex items-start gap-3 text-sm leading-7", dark ? "text-slate-200" : "text-slate-700")}>
          <CheckCircle2 className={cn("mt-1 h-4 w-4 shrink-0", dark ? "text-white" : "text-slate-900")} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
