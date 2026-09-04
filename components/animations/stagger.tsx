'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Staggered entrance for grids and lists.
 * Per-item delay stays small (40ms) so long lists never feel sluggish.
 */
export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      variants={{ visible: { transition: { staggerChildren: reduced ? 0.02 : 0.04 } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={
        reduced
          ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.3, ease: 'linear' } },
            }
          : {
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }
      }
    >
      {children}
    </motion.div>
  )
}
