import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { MaskText } from '@/components/animations/mask-text'
import { Reveal } from '@/components/animations/reveal'
import { ButtonLink } from '@/components/ui/button'
import { Eyebrow, PlaceholderNote } from '@/components/ui/section'
import { getNextProject, getProject, projects } from '@/content/projects'
import { altFor, creditFor, resolveImage } from '@/lib/images'
import { ctas, siteConfig } from '@/lib/site'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  const title = `${project.title} — ${project.category}`

  return {
    title,
    description: project.description,
    alternates: { canonical: `/pune/${project.slug}` },
    openGraph: {
      title: `${title} — Nexa`,
      description: project.description,
      url: `${siteConfig.url}/pune/${project.slug}`,
      images: [{ url: '/images/og/default.svg', width: 1200, height: 630, alt: project.title }],
    },
    twitter: { title: `${title} — Nexa`, description: project.description },
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const next = getNextProject(project.slug)
  const heroSrc = resolveImage(project.image)
  const heroCredit = creditFor(project.image)

  const chapters = [
    { label: 'Sfida', body: project.challenge },
    { label: 'Qasja', body: project.approach },
    { label: 'Zgjidhja', body: project.solution },
    { label: 'Rezultati', body: project.result },
  ]

  return (
    <article>
      <header className="pb-12 pt-[calc(var(--header-height)+4rem)]">
        <div className="shell">
          <Link
            href="/pune"
            className="link-underline font-sans text-[12px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
          >
            ← Të gjitha punët
          </Link>

          <MaskText
            as="h1"
            className="mt-10 text-display-lg text-ink"
            lines={[project.title]}
          />

          <dl className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-3 lg:max-w-2xl">
            <div>
              <dt className="eyebrow">Kategoria</dt>
              <dd className="mt-1 font-sans text-sm text-ink">{project.category}</dd>
            </div>
            <div>
              <dt className="eyebrow">Sektori</dt>
              <dd className="mt-1 font-sans text-sm text-ink">{project.sector}</dd>
            </div>
            <div>
              <dt className="eyebrow">Viti</dt>
              <dd className="mt-1 font-sans text-sm text-ink [font-variant-numeric:tabular-nums]">
                {project.year}
              </dd>
            </div>
          </dl>

          {project.isPlaceholder && (
            <div className="mt-8">
              <PlaceholderNote>
                Rast demonstrues — projekt fiktiv i ndërtuar për të treguar mënyrën e punës
              </PlaceholderNote>
            </div>
          )}
        </div>
      </header>

      <figure className="relative aspect-[16/10] w-full overflow-hidden bg-surface md:aspect-[16/8]">
        <Image
          src={heroSrc}
          alt={altFor(project.image, project.title)}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </figure>
      {heroCredit && (
        <div className="shell pt-3">
          <figcaption className="font-sans text-[11px] text-muted">
            Foto:{' '}
            <a href={heroCredit.url} target="_blank" rel="noopener noreferrer" className="link-underline">
              {heroCredit.photographer}
            </a>{' '}
            / Unsplash
          </figcaption>
        </div>
      )}

      <section className="shell py-section">
        <p className="max-w-3xl font-sans text-xl leading-relaxed text-ink md:text-2xl">
          {project.intro}
        </p>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {chapters.map((chapter) => (
            <Reveal key={chapter.label}>
              <h2 className="font-display text-3xl uppercase leading-none text-ink">
                {chapter.label}
              </h2>
              <p className="mt-5 max-w-xl font-sans text-base text-muted">{chapter.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="shell">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <Eyebrow>Në shifra</Eyebrow>
            <PlaceholderNote>Shifra ilustruese — jo rezultate të matura klientësh</PlaceholderNote>
          </div>

          <dl className="mt-10 grid gap-px bg-line sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="bg-surface p-8">
                <dd className="font-display text-5xl leading-none text-accent [font-variant-numeric:tabular-nums] md:text-6xl">
                  {metric.value}
                </dd>
                <dt className="mt-4 font-sans text-xs uppercase tracking-[0.16em] text-muted">
                  {metric.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="shell py-section">
          <h2 className="sr-only">Galeria e projektit</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <Reveal
                key={image}
                delay={index * 0.05}
                className={index % 3 === 0 ? 'md:col-span-2' : ''}
              >
                <div
                  className={`relative overflow-hidden bg-surface ${
                    index % 3 === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={resolveImage(image)}
                    alt={altFor(image, `${project.title} — pamje ${index + 1}`)}
                    fill
                    loading="lazy"
                    sizes={index % 3 === 0 ? '(max-width: 768px) 100vw, 90vw' : '(max-width: 768px) 100vw, 45vw'}
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-line py-section">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Eyebrow>Projekti i radhës</Eyebrow>
              <Link href={`/pune/${next.slug}`} className="group mt-4 block">
                <h2 className="font-display text-display-sm uppercase text-ink transition-colors duration-300 group-hover:text-accent">
                  {next.title}
                </h2>
              </Link>
            </div>
            <ButtonLink href={siteConfig.bookingHref}>{ctas.primary}</ButtonLink>
          </div>
        </div>
      </section>
    </article>
  )
}
