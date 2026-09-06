import type { ReactNode } from 'react'

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>
}

/**
 * A labelled section. `label` is the section number shown in the margin, which gives the
 * page its editorial rhythm without adding decoration.
 */
export function Section({
  children,
  className = '',
  id,
  bordered = true,
}: {
  children: ReactNode
  className?: string
  id?: string
  bordered?: boolean
}) {
  return (
    <section id={id} className={`${bordered ? 'border-t border-line' : ''} py-section ${className}`}>
      {children}
    </section>
  )
}

/** Small caption used to mark demonstration content honestly wherever it appears. */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="font-sans text-[12px] uppercase tracking-[0.18em] text-muted/70 md:text-[11px]">
      <span aria-hidden="true" className="mr-2 inline-block h-1.5 w-1.5 bg-muted/50 align-middle" />
      {children}
    </p>
  )
}
