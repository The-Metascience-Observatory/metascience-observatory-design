import type { ReactNode } from "react";
import { cn } from "./cn";

/** A section heading with the rule under it; `count` is the grey note after the title. */
export function SectionHeading({ children, count, className }: { children: ReactNode; count?: ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-2xl font-semibold mb-4 mt-10 text-foreground border-b border-border pb-2", className)}>
      {children}
      {count != null && <span className="ml-3 text-base font-normal text-muted-foreground">{count}</span>}
    </h2>
  );
}
