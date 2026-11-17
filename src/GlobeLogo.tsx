/** The Observatory's globe mark (the main site's public/assets/globe.svg, inline). */
export function GlobeLogo({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      stroke="#444444"
      strokeWidth="0.9"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="8" cy="8" r="7.35" />
      <ellipse cx="8" cy="8" rx="3" ry="7.35" />
      <ellipse cx="8" cy="8" rx="7.35" ry="3" />
    </svg>
  );
}
