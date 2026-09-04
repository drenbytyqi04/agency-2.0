import type { ReactNode } from 'react'

/**
 * Italic serif emphasis inside a display heading.
 *
 * The contrast between the geometric sans and a single italic serif word is what gives a
 * heading its voice — so it marks the one word that carries the meaning, never more.
 */
export function AccentWord({ children }: { children: ReactNode }) {
  return <em className="font-accent font-normal italic tracking-[-0.01em]">{children}</em>
}
