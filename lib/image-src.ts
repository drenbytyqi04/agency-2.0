/**
 * Pure helpers for image paths. Deliberately free of Node imports so this can be used from
 * Client Components (the filtered work grid renders cards on the client).
 */

export const PLACEHOLDER_PREFIX = '/images/placeholders/'

/**
 * True for the generated SVG fallbacks.
 *
 * next/image refuses to optimise SVG ("image type is not allowed") unless the global
 * dangerouslyAllowSVG flag is set. Rather than loosen that for every image on the site,
 * placeholders are passed through with `unoptimized` — they are tiny vector files that gain
 * nothing from the optimiser anyway.
 */
export function isPlaceholderSrc(src: string): boolean {
  return src.startsWith(PLACEHOLDER_PREFIX)
}
