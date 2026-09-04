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

  // Reduced motion still gets a fade — opacity alone carries no movement, so the page
  // reads as alive without the translation that causes the problem.
  return (
    <Component
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={
        reduced
          ? { duration: 0.3, delay: 0, ease: 'linear' }
          : { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </Component>
  )
}
