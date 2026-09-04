import Link from 'next/link'

/**
 * Circular badge with text set around its edge and an arrow at the centre.
 *
 * Purely typographic — the ring is real text on an SVG path, so it stays crisp at any size
 * and is readable by assistive tech through the link label rather than the visual ring.
 */
export function RotatingBadge({
  href,
  label,
  ariaLabel,
}: {
  href: string
  label: string
  ariaLabel: string
}) {
  // Repeat the label so it wraps the full circle with even spacing.
  const ring = `${label} · ${label} · `

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="group relative inline-flex h-36 w-36 items-center justify-center rounded-full border border-line-strong bg-surface/40 backdrop-blur-sm transition-colors duration-500 hover:border-accent md:h-44 md:w-44"
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite] motion-reduce:animate-none"
      >
        <defs>
          <path id="badge-ring" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" fill="none" />
        </defs>
        <text className="fill-muted text-[8.5px] uppercase tracking-[0.24em]">
          <textPath href="#badge-ring" startOffset="0">
            {ring}
          </textPath>
        </text>
      </svg>

      <span
        aria-hidden="true"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-ink transition-transform duration-500 ease-editorial group-hover:rotate-45"
      >
        <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
          <path
            d="M3 11L11 3M11 3H4.5M11 3v6.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  )
}
