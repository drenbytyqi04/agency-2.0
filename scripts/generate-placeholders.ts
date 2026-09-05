/**
 * Generates on-brand SVG placeholders for every entry in the image manifest.
 *
 * These are committed so the site always renders — a fresh clone, or an environment with no
 * access to the photo CDN, still looks intentional. `npm run images` downloads the real
 * photographs, which then take precedence automatically (see lib/images.ts).
 *
 * Design constraints:
 *  - Full-bleed composition. Cards crop these to 4:3, 3:2, 16:9 and 16:10, so the artwork has
 *    to survive an aggressive centre crop with no dead space.
 *  - No text. Anything written into the image gets cropped unpredictably and reads as a broken
 *    asset; demo content is labelled in the UI instead, where it stays legible.
 *  - Deterministic per filename, so each project keeps a distinct composition between runs.
 *
 * Run with: npm run placeholders
 */

import { mkdir, readdir, unlink, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

import { imageSources } from '../content/image-sources'

const OUT_DIR = join(process.cwd(), 'public', 'images', 'placeholders')
const W = 1600
const H = 1200

/** Stable 32-bit hash so a filename always yields the same composition. */
function hash(value: string): number {
  let h = 2166136261
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

/** Small deterministic generator seeded from the filename. */
function rng(seed: number) {
  let state = seed || 1
  return () => {
    state ^= state << 13
    state ^= state >>> 17
    state ^= state << 5
    return Math.abs(state % 10000) / 10000
  }
}

function svgFor(name: string): string {
  const random = rng(hash(name))
  const accentIndex = Math.floor(random() * 5)

  // Vertical bands across the full width — the structural base of the composition.
  const bandCount = 5
  const bandWidth = W / bandCount
  const bands = Array.from({ length: bandCount }, (_, i) => {
    const inset = random() * 90
    const top = inset
    const height = H - inset * (0.6 + random() * 0.8)
    const isAccent = i === accentIndex
    const fill = isAccent ? 'rgba(198,255,63,0.10)' : `rgba(242,240,235,${(0.018 + random() * 0.05).toFixed(3)})`
    return `<rect x="${(i * bandWidth).toFixed(0)}" y="${top.toFixed(0)}" width="${bandWidth.toFixed(0)}" height="${height.toFixed(0)}" fill="${fill}"/>`
  }).join('')

  // Two concentric arcs, off-centre, cropped by the frame on at least one edge.
  const cx = W * (0.3 + random() * 0.45)
  const cy = H * (0.28 + random() * 0.4)
  const r = 260 + random() * 300
  const arcs = `
  <circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${r.toFixed(0)}" fill="none" stroke="rgba(198,255,63,0.22)" stroke-width="1.5"/>
  <circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${(r * 0.62).toFixed(0)}" fill="none" stroke="rgba(242,240,235,0.10)" stroke-width="1"/>`

  // A heavy horizon block anchoring the lower third.
  const horizonY = H * (0.6 + random() * 0.16)
  const horizon = `<rect x="0" y="${horizonY.toFixed(0)}" width="${W}" height="${(H - horizonY).toFixed(0)}" fill="rgba(11,11,13,0.55)"/>
  <rect x="0" y="${horizonY.toFixed(0)}" width="${W}" height="1" fill="rgba(255,255,255,0.14)"/>`

  // Diagonal hairlines for depth.
  const diagonals = Array.from({ length: 3 }, () => {
    const x = random() * W
    return `<path d="M${x.toFixed(0)} 0 L${(x + 420).toFixed(0)} ${H}" stroke="rgba(255,255,255,0.05)" stroke-width="1" fill="none"/>`
  }).join('')

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img">
  <defs>
    <linearGradient id="wash" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#17171B"/>
      <stop offset="100%" stop-color="#0B0B0D"/>
    </linearGradient>
    <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
      <path d="M80 0H0V80" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#wash)"/>
  ${bands}
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  ${diagonals}
  ${arcs}
  ${horizon}
</svg>
`
}

async function main(): Promise<void> {
  await mkdir(OUT_DIR, { recursive: true })

  const written = new Set<string>(['fallback.svg'])
  for (const source of imageSources) {
    const name = source.file.split('/').pop()!.replace(/\.[a-z]+$/i, '')
    await writeFile(join(OUT_DIR, `${name}.svg`), svgFor(name), 'utf8')
    written.add(`${name}.svg`)
  }

  // Drop placeholders for images that are no longer in the manifest, so removing a photo
  // does not leave an orphan behind.
  for (const existing of await readdir(OUT_DIR)) {
    if (existing.endsWith('.svg') && !written.has(existing)) {
      await unlink(join(OUT_DIR, existing))
      console.log(`  removed stale ${existing}`)
    }
  }
  // Generic fallback for any image path that has no manifest entry, so the last tier of
  // lib/images.ts always resolves to a file that exists.
  await writeFile(join(OUT_DIR, 'fallback.svg'), svgFor('fallback'), 'utf8')

  console.log(`Generated ${imageSources.length + 1} placeholders in public/images/placeholders/`)
}

void main()
