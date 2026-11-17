import Link from "next/link";

/** The small "← return to ..." link above a page heading. */
export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-sm text-foreground/60 hover:text-foreground transition-colors mb-4 inline-block">
      &larr; {label}
    </Link>
  );
}
