import { ArrowUpRight, Award, Calendar, UserRound } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { profile, projects } from '@/data/profile'
import { cn } from '@/lib/utils'
import { GitHubIcon } from './BrandIcons'
import { Section } from './Section'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      intro="Distributed systems, multi-tenant products and real-time platforms."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => {
          const featured = i === 0
          return (
            <Card
              key={project.name}
              className={cn(
                'reveal group relative gap-0 rounded-2xl px-0 py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-primary/30',
                featured && 'lg:col-span-2',
              )}
            >
              {featured && (
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary to-highlight" />
              )}
              <div className={cn('flex h-full flex-col p-6 sm:p-8', featured && 'lg:grid lg:grid-cols-[1fr_auto] lg:gap-12')}>
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    {featured && <Badge className="h-6 px-2.5">Featured</Badge>}
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="size-3.5" aria-hidden="true" />
                      {project.date}
                    </span>
                  </div>

                  <h3 className={cn('mt-4 text-xl font-semibold', featured && 'sm:text-2xl')}>{project.name}</h3>
                  <p className="font-medium text-primary">{project.tagline}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <UserRound className="size-3.5" aria-hidden="true" />
                    {project.role}
                  </p>

                  <div className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-muted-foreground">
                    {project.description.map((d) => (
                      <p key={d}>{d}</p>
                    ))}
                  </div>

                  <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Tech stack">
                    {project.stack.map((s) => (
                      <li key={s}>
                        <Badge variant="outline" className="h-6 px-2.5 font-mono text-[11.5px] font-normal">
                          {s}
                        </Badge>
                      </li>
                    ))}
                  </ul>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} source code on GitHub (opens in a new tab)`}
                      className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'mt-6 self-start')}
                    >
                      <GitHubIcon size={16} />
                      View source
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>

                <div
                  className={cn(
                    'mt-6 flex items-center gap-3 rounded-xl border bg-accent/50 px-4 py-3',
                    featured && 'lg:mt-0 lg:w-56 lg:flex-col lg:items-start lg:justify-center lg:gap-1 lg:p-6',
                  )}
                >
                  {project.impact.value === 'A+' && <Award className="size-5 text-highlight" aria-hidden="true" />}
                  <p className={cn('text-2xl font-semibold tracking-tight text-accent-foreground', featured && 'lg:text-4xl')}>
                    {project.impact.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{project.impact.label}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="reveal mt-10 flex justify-center">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: 'outline', size: 'xl' })}
        >
          <GitHubIcon size={18} />
          More on GitHub
        </a>
      </div>
    </Section>
  )
}
