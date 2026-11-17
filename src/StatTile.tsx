import type { ReactNode } from "react";
import { cn } from "./cn";

/** A headline number with a short label: sky tile, black outline, slab-serif figure. */
export function StatTile({ value, label, className }: { value: ReactNode; label: ReactNode; className?: string }) {
  return (
    <div className={cn("flex h-full items-center gap-4 rounded-lg border border-black bg-sky-50 p-5", className)}>
      <div className="font-clarendon text-3xl sm:text-4xl font-bold leading-none shrink-0 text-sky-900">{value}</div>
      <p className="min-w-0 text-sm leading-snug text-foreground">{label}</p>
    </div>
  );
}
