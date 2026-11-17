"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "./cn";
import { GlobeLogo } from "./GlobeLogo";

export interface NavLink {
  label: string;
  /** A path on this site ("/about") or a full URL. */
  href: string;
  /** The one highlighted button (Donate). */
  accent?: boolean;
}

const button =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-all h-9 px-3 border bg-transparent hover:scale-105 hover:shadow-md";
const gray = "border-gray-400 text-gray-600 dark:text-gray-400";
const blue = "border-blue-500 text-blue-700 dark:text-blue-400";

function NavItem({ link, className, onClick }: { link: NavLink; className?: string; onClick?: () => void }) {
  const cls = cn(button, link.accent ? blue : gray, className);
  return link.href.startsWith("/") ? (
    <Link href={link.href} className={cls} onClick={onClick}>{link.label}</Link>
  ) : (
    <a href={link.href} className={cls} onClick={onClick}>{link.label}</a>
  );
}

/**
 * The top bar: globe, site title and pill buttons, with a menu button on narrow screens.
 * It is sticky, so pages need no top padding. An `accent` link is pushed to the right.
 */
export function Navbar({ title, links, homeHref = "/" }: { title: string; links: NavLink[]; homeHref?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href={homeHref} aria-label={`${title} home`} className="flex items-center gap-3 min-w-0">
            <GlobeLogo className="shrink-0" />
            <span className="font-clarendon font-bold text-lg sm:text-xl text-foreground">{title}</span>
          </Link>
          <div className="hidden md:flex items-center gap-3 text-xs">
            {links.map((link) => (
              <NavItem key={link.href + link.label} link={link} className={link.accent ? "ml-auto" : undefined} />
            ))}
          </div>
          <button
            type="button"
            className="md:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
              {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border mt-3 pt-3 pb-3">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <NavItem key={link.href + link.label} link={link} className="w-full" onClick={() => setOpen(false)} />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
