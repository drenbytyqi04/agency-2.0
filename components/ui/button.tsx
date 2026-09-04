'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'ghost'

const base =
  'group relative inline-flex items-center justify-center gap-3 border px-7 py-4 font-sans text-[13px] uppercase tracking-[0.16em] transition-colors duration-300 ease-editorial cursor-pointer min-h-[48px]'

const variants: Record<Variant, string> = {
  primary: 'border-accent bg-accent text-accent-ink hover:bg-transparent hover:text-accent',
  ghost: 'border-line-strong text-ink hover:border-accent hover:text-accent',
}

/**
 * Magnetic pull toward the cursor. Pointer-only, disabled under reduced motion,
 * and purely visual — keyboard users get identical behaviour without it.
 */
function useMagnetic(strength = 0.28) {
  const ref = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const reduced = useReducedMotion()

  const handleMove = (event: React.PointerEvent) => {
    if (reduced || event.pointerType !== 'mouse' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setOffset({
      x: (event.clientX - (rect.left + rect.width / 2)) * strength,
      y: (event.clientY - (rect.top + rect.height / 2)) * strength,
    })
  }

  const reset = () => setOffset({ x: 0, y: 0 })

  return { ref, offset, handleMove, reset }
}

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
}

export function ButtonLink({ href, children, variant = 'primary', className = '' }: ButtonLinkProps) {
  const { ref, offset, handleMove, reset } = useMagnetic()
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')

  const content = (
    <motion.span
      className="pointer-events-none flex items-center gap-3"
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.4 }}
    >
      {children}
    </motion.span>
  )

  const props = {
    ref: ref as never,
    className: `${base} ${variants[variant]} ${className}`,
    onPointerMove: handleMove,
    onPointerLeave: reset,
    onBlur: reset,
  }

  if (isExternal) {
    return (
      <a href={href} {...props}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} {...props}>
      {content}
    </Link>
  )
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...rest
}: ComponentProps<'button'> & { variant?: Variant }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}
