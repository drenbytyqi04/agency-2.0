import { MaskText } from '@/components/animations/mask-text'
import { Reveal } from '@/components/animations/reveal'
import { ProjectCard } from '@/components/ui/project-card'
import { AccentWord } from '@/components/ui/accent-word'
import { ButtonLink } from '@/components/ui/button'
import { PhotoCredits } from '@/components/ui/photo-credits'
import { PlaceholderNote, Section } from '@/components/ui/section'
import { featuredProjects } from '@/content/projects'
import { toProjectView } from '@/lib/project-view'

export function FeaturedWork() {
  const [first, second, third, fourth] = featuredProjects.map(toProjectView)

  return (
    <Section id="work">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <MaskText className="text-display-md text-ink" lines={[<>Work that <AccentWord>speaks</AccentWord>.</>]} />
          <ButtonLink href="/work" variant="ghost" size="sm" className="mb-2">
            All work
          </ButtonLink>
        </div>

        <div className="mt-6">
          <PlaceholderNote>Demonstration projects — not work delivered for clients</PlaceholderNote>
        </div>

        {/* Asymmetric grid: a wide lead, an offset column, then a staggered pair. */}
        <div className="mt-14 grid gap-x-8 gap-y-16 lg:grid-cols-12">
          {first && (
            <Reveal className="lg:col-span-7">
              <ProjectCard project={first} size="lg" priority />
            </Reveal>
          )}
          {second && (
            <Reveal delay={0.08} className="lg:col-span-5 lg:pt-28">
              <ProjectCard project={second} />
            </Reveal>
          )}
          {third && (
            <Reveal className="lg:col-span-5 lg:col-start-2">
              <ProjectCard project={third} />
            </Reveal>
          )}
          {fourth && (
            <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7 lg:pt-20">
              <ProjectCard project={fourth} size="lg" />
            </Reveal>
          )}
        </div>

        <PhotoCredits
          files={featuredProjects.map((project) => project.image)}
          className="mt-14 border-t border-line pt-6"
        />
      </div>
    </Section>
  )
}
