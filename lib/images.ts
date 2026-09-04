import { existsSync } from 'node:fs'
import { join } from 'node:path'

import { imageSourceByFile } from '@/content/image-sources'

/**
 * Resolves an image path declared in the manifest to something that actually exists on disk.
 *
 * Photographs are downloaded by `npm run images` and are intentionally not committed. Until
 * they are present — a fresh clone, or an environment without network access to the photo CDN —
 * this returns an on-brand placeholder so pages render correctly and the build never fails.
 *
 * Server-only: called during rendering of Server Components, so it resolves at build time
 * for statically generated pages.
 */
export function resolveImage(file: string): string {
  if (existsSync(join(process.cwd(), 'public', file))) return file
  return placeholderFor(file)
}

/** Deterministic placeholder path for a manifest entry, e.g. /images/placeholders/nova-stays-01.svg */
function placeholderFor(file: string): string {
  const name = file.split('/').pop()?.replace(/\.[a-z]+$/i, '') ?? 'fallback'
  return `/images/placeholders/${name}.svg`
}

/** Alt text from the manifest, with a safe fallback. */
export function altFor(file: string, fallback: string): string {
  return imageSourceByFile.get(file)?.alt ?? fallback
}

/** Photo credit, or null when the file is currently a placeholder. */
export function creditFor(file: string): { photographer: string; url: string } | null {
  const source = imageSourceByFile.get(file)
  if (!source) return null
  if (!existsSync(join(process.cwd(), 'public', file))) return null
  return { photographer: source.photographer, url: source.photographerUrl }
}
