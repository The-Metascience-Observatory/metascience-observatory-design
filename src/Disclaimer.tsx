import { cn } from "./cn";

/** The standing statement shown wherever findings about named papers are listed. */
export function Disclaimer({ scope = "page", className }: { scope?: "page" | "site"; className?: string }) {
  return (
    <aside className={cn("mb-4 max-w-4xl rounded-md border border-foreground px-2.5 py-1.5", className)}>
      <p className="text-sm leading-snug text-foreground">
        Findings on this {scope} are presented for informational purposes only. Nothing shown or expressed is
        intended to be an accusation of misconduct against any party, nor should be used in place of an
        independent investigation by responsible authorities. We believe the material included here is
        accurate; however, this material has not been independently verified, audited, or tested. We cannot
        and do not guarantee that it is error-free. Everything here is based on publicly available
        information, which may be incomplete or in error. Additional information, such as raw data or
        clarification by the authors, could affect the information presented and any concerns expressed. So
        far as we know, none of the authors involved in the production of this material have any financial
        conflicts of interest with the research or researchers discussed.
      </p>
    </aside>
  );
}
