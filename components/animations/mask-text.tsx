'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

interface MaskTextProps {
  /** One entry per visual line. Lines are masked and revealed in sequence. */
  lines: string[]
  className?: string
  /** Rendered element. Headings should pass the right level for the page. */
  as?: 'h1' | 'h2' | 'p'
  delay?: number
}

/**
 * Line-by-line mask-up reveal for display headings.
 *
 * Visibility is observed on the heading itself, never on the moving span: a span translated
 * fully below its overflow-hidden parent is clipped out of existence, so an observer attached
 * to it would report it as never entering the viewport and the reveal would never fire.
 *
 * Text is present in the DOM in both states, so crawlers and screen readers always get the
 * full heading. Under prefers-reduced-motion the lines render in place.
 */
export function MaskText({ lines, className, as: Tag = 'h2', delay = 0 }: MaskTextProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const reduced = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' })
  const revealed = reduced || inView

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, index) => (
        <span key={line} className="mask-line">
          <motion.span
            className="block"
            initial={false}
            animate={{ y: revealed ? '0%' : '110%' }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 0.75, delay: delay + index * 0.08, ease: [0.22, 1, 0.36, 1] }
            }
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
