'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Seconds. Use small values — this is a fade, not a performance. */
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article'
}

/**
 * Fades content up as it enters the viewport, once.
 * Under prefers-reduced-motion the element renders in its final state immediately.
 */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  if (reduced) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
