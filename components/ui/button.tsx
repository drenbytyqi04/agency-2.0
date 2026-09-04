'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'ghost'
type Size = 'md' | 'sm'

const base =
  'group relative inline-flex items-center justify-center gap-3 rounded-full border font-sans font-medium tracking-[0.01em] transition-colors duration-300 ease-editorial cursor-pointer'

const sizes: Record<Size, string> = {
  md: 'min-h-[52px] py-3 pl-7 pr-3 text-[13px]',
  sm: 'min-h-[44px] py-2 pl-5 pr-2 text-[12px]',
}

const variants: Record<Variant, string> = {
  primary: 'border-accent bg-accent text-accent-ink hover:bg-transparent hover:text-accent',
  ghost: 'border-line-strong text-ink hover:border-accent hover:text-accent',
}

/**
 * Circular arrow that sits inside the pill, echoing the button's own shape.
 * Decorative: the label already names the action.
 */
function ArrowBadge({ variant, size }: { variant: Variant; size: Size }) {
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-editorial group-hover:rotate-45 ${
        size === 'sm' ? 'h-8 w-8' : 'h-9 w-9'
      } ${
        variant === 'primary'
          ? 'bg-accent-ink text-accent group-hover:bg-accent group-hover:text-accent-ink'
          : 'bg-ink/10 text-ink group-hover:bg-accent group-hover:text-accent-ink'
      }`}
    >
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H4.5M11 3v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
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
  size?: Size
  className?: string
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonLinkProps) {
  const { ref, offset, handleMove, reset } = useMagnetic()
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')

  const content = (
    <motion.span
      className="pointer-events-none flex items-center gap-3"
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.4 }}
    >
      {children}
      <ArrowBadge variant={variant} size={size} />
    </motion.span>
  )

  const props = {
    ref: ref as never,
    className: `${base} ${sizes[size]} ${variants[variant]} ${className}`,
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
  size = 'md',
  className = '',
  ...rest
}: ComponentProps<'button'> & { variant?: Variant; size?: Size }) {
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
      <ArrowBadge variant={variant} size={size} />
    </button>
  )
}
