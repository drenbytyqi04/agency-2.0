import { creditsFor } from '@/lib/images'

/**
 * Photographer credits for a set of images.
 *
 * Unsplash asks that photographers be credited wherever their work is used, so this appears
 * on every page that shows project photography. Kept deliberately quiet — it is a colophon,
 * not a design element.
 */
export function PhotoCredits({ files, className = '' }: { files: string[]; className?: string }) {
  const credits = creditsFor(files)
  if (credits.length === 0) return null

  return (
    <p className={`font-sans text-[11px] text-muted/70 ${className}`}>
      Photography:{' '}
      {credits.map((credit, index) => (
        <span key={credit.photographer}>
          <a
            href={credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-muted"
          >
            {credit.photographer}
          </a>
          {index < credits.length - 1 ? ', ' : ''}
        </span>
      ))}{' '}
      ·{' '}
      <a
        href="https://unsplash.com"
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline hover:text-muted"
      >
        Unsplash
      </a>
    </p>
  )
}
