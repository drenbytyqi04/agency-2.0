# Nexa

Website for Nexa, a digital studio based in Prishtina, Kosovo.

The site is in English throughout — interface copy, routes (`/services`, `/work`, `/about`,
`/contact`), metadata and `lang="en"`.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS 3 with design tokens in `tailwind.config.ts`
- Type: Jost for display and body, Instrument Serif italic for emphasis words only
- Framer Motion for micro-interactions
- Server Components by default; Client Components only where interaction requires them

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm run images` | Download project photography (see below) |
| `npm run placeholders` | Regenerate the local SVG placeholders |

## Imagery

`content/image-sources.ts` is the single source of truth: one entry per photo, each with a
real Unsplash id, photographer, source URL and written alt text. Nothing is invented.

**Photos work out of the box — there is nothing to download.** `lib/images.ts` resolves each
manifest path through three tiers:

1. **A local copy** under `public/images/projects/`, if one exists. Self-hosted and fastest,
   so it always wins.
2. **The Unsplash CDN**, using the URL from the manifest. This is the default, and why a
   fresh clone shows real photography with nothing committed. `next/image` still resizes and
   optimises it; `images.unsplash.com` is allowed in `next.config.ts`.
3. **A generated SVG placeholder**, for any path with no manifest entry.

Photographers are credited wherever their work appears, via `components/ui/photo-credits.tsx`.

### Self-hosting the photos (optional)

To stop depending on a third-party CDN, download them once and commit the result:

```bash
npm run images            # into public/images/projects/
npm run images -- --force # re-download everything
```

```bash
npm run images            # download into public/images/projects/
npm run images -- --force # re-download everything
```

`UNSPLASH_ACCESS_KEY` is **optional**. Copy `.env.example` to `.env.local` and set it to have
the script also ping Unsplash's download-tracking endpoint, as their API guidelines ask of API
consumers. The key is read only inside the Node script — it never reaches the browser.

Downloaded photos are not committed. Until they exist, `lib/images.ts` resolves each path to an
on-brand SVG placeholder in `public/images/placeholders/`, so a fresh clone builds and renders
correctly with no network access. Drop the real photos in and they take precedence automatically.

## Design language

Dark ground, lime accent used sparingly, and a rounded card language (`rounded-card`,
`rounded-panel`, pill buttons with a circular arrow). Headings are title case with tight
tracking; a single italic serif word carries the emphasis — see
`components/ui/accent-word.tsx`. Section labels are uppercase micro-type preceded by an
accent dot (`.eyebrow`), and key sections sit on a soft ambient colour bloom
(`.ambient-glow`).

## Content

All copy and data live in `content/`, strongly typed, so components stay free of hardcoded
values — prices included.

| File | Contents |
| --- | --- |
| `projects.ts` | Portfolio and case studies |
| `services.ts` | Service catalogue with deliverables and FAQs |
| `pricing.ts` | Packages, prices and the orientation note |
| `testimonials.ts` | Quotes |
| `team.ts` | Team and values |
| `clients.ts` | Marquee names and process steps |
| `image-sources.ts` | Photo manifest |

### Demonstration content

The site currently ships with **placeholder portfolio content**. Projects, clients,
testimonials and team members are fictional, and every metric is illustrative rather than
measured. Each file marks this in its header and via an `isPlaceholder` flag, and the UI
labels it visibly wherever it appears. Replace these files with real material before launch —
and keep the flags accurate, so nothing fictional is ever presented as a real result.

The team section deliberately uses typographic initials instead of portraits, so no real
person is depicted as a member of the studio.

## Configuration

`lib/site.ts` holds the domain, contact details, social links and CTA target. The placeholder
values there (`hello@nexa.studio`, `+383 44 000 000`, `https://nexa.studio`) are the ones to
change first.

The public origin can also be set with `NEXT_PUBLIC_SITE_URL`. It is normalised before use:
blank or whitespace counts as unset, a missing protocol is assumed to be `https`, a trailing
slash is stripped, and an unparseable value falls back to `FALLBACK_SITE_URL` rather than
failing the build. That matters because `metadataBase` parses this value at build time, and
a hosting provider with the variable defined but empty would otherwise break every page.

## Contact form

`components/forms/contact-form.tsx` validates on blur and posts to `app/api/contact/route.ts`,
which re-validates server-side and returns JSON. **No email is sent yet** — the route carries a
TODO for wiring up Resend or SendGrid, plus rate limiting and a spam check.

## Accessibility

Semantic HTML, one `h1` per page with no heading-level skips, visible focus rings, a skip link,
labelled fields with errors tied to their inputs and a focusable error summary, a focus-trapped
mobile menu that locks body scroll and closes on Escape, alt text on every image, and full
`prefers-reduced-motion` support (animations are skipped and content renders in its final
state; the custom cursor is disabled entirely). Verified at 375, 390, 768, 1024, 1440 and
1920px with no horizontal overflow.

## Deployment

Deploys to Vercel with no extra configuration. Set `NEXT_PUBLIC_SITE_URL` to the production
origin so canonical URLs, `sitemap.xml`, `robots.txt` and Open Graph tags resolve correctly.
