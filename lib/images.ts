import { existsSync } from 'node:fs'
import { join } from 'node:path'

import { imageSourceByFile, remoteImageUrl } from '@/content/image-sources'
import { PLACEHOLDER_PREFIX } from '@/lib/image-src'

/**
 * Resolves a manifest image path to something that will actually render.
 *
 * Three tiers, in order:
 *  1. A local copy under public/ — downloaded by `npm run images`. Self-hosted and fastest,
 *     so it always wins when present.
 *  2. The photo's Unsplash CDN URL from the manifest. This is why the site shows real
 *     photography on a fresh clone with nothing downloaded and nothing committed.
 *  3. An on-brand placeholder, for any path with no manifest entry.
 *
 * Server-only: `existsSync` means this resolves at build time for static pages.
 */
export function resolveImage(file: string): string {
  // Escape hatch for environments with no route to the photo CDN (offline work, restricted
  // networks, screenshot runs): IMAGE_MODE=placeholder renders the local artwork instead of
  // leaving broken images behind.
  if (process.env.IMAGE_MODE === 'placeholder') return placeholderFor(file)

  if (existsSync(join(process.cwd(), 'public', file))) return file

  const source = imageSourceByFile.get(file)
  if (source) return remoteImageUrl(source)

  return placeholderFor(file)
}

/**
 * Deterministic placeholder path, e.g. /images/placeholders/nova-stays-01.svg, falling back
 * to the generic file for any path the generator never produced one for.
 */
function placeholderFor(file: string): string {
  const name = file.split('/').pop()?.replace(/\.[a-z]+$/i, '') ?? 'fallback'
  const named = `${PLACEHOLDER_PREFIX}${name}.svg`
  if (existsSync(join(process.cwd(), 'public', named))) return named
  return `${PLACEHOLDER_PREFIX}fallback.svg`
}

/** Alt text from the manifest, with a safe fallback. */
export function altFor(file: string, fallback: string): string {
  return imageSourceByFile.get(file)?.alt ?? fallback
}

/**
 * Photo credit for an image. Returned whenever the photo is a real photograph — served
 * locally or from the CDN — since Unsplash asks for attribution either way.
 */
export function creditFor(file: string): { photographer: string; url: string } | null {
  const source = imageSourceByFile.get(file)
  if (!source) return null
  return { photographer: source.photographer, url: source.photographerUrl }
}

/** Credits for a set of images, de-duplicated by photographer. */
export function creditsFor(files: string[]): Array<{ photographer: string; url: string }> {
  const seen = new Map<string, { photographer: string; url: string }>()
  for (const file of files) {
    const credit = creditFor(file)
    if (credit) seen.set(credit.photographer, credit)
  }
  return [...seen.values()]
}
