import { Calendar, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { experience } from '@/data/profile'
import { Section } from './Section'

export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've made an impact"
      intro="Production APIs, real-time features and the tooling around them, with measurable results."
      muted
    >
      <ol className="relative grid gap-6 before:absolute before:top-3 before:bottom-3 before:left-[7px] before:w-px before:bg-linear-to-b before:from-primary before:via-border before:to-transparent sm:pl-0">
        {experience.map((job) => (
          <li key={job.company + job.role} className="reveal relative pl-8">
            <span
              aria-hidden="true"
              className="absolute top-7 left-0 size-[15px] rounded-full border-[3px] border-background bg-primary ring-1 ring-primary/40"
            />
            <Card className="gap-0 rounded-2xl px-0 py-0 transition-shadow duration-300 hover:shadow-lg">
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:gap-10">
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="size-3.5" aria-hidden="true" />
                      {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5" aria-hidden="true" />
                      {job.location}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{job.role}</h3>
                  <p className="font-medium text-primary">{job.company}</p>
                  <p className="mt-3 text-muted-foreground">{job.summary}</p>

                  <ul className="mt-5 grid gap-2.5">
                    {job.points.map((p) => (
                      <li key={p} className="relative pl-5 text-[15px] leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="absolute top-[0.6em] left-0 size-1.5 rounded-full bg-primary/70" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                    {job.tags.map((t) => (
                      <li key={t}>
                        <Badge variant="secondary" className="h-6 px-2.5 font-normal">
                          {t}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>

                <dl className="grid content-start gap-3 sm:grid-cols-3 lg:w-48 lg:grid-cols-1">
                  {job.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border bg-accent/50 px-4 py-3">
                      <dd className="text-2xl font-semibold tracking-tight text-accent-foreground tabular-nums">{m.value}</dd>
                      <dt className="text-xs text-muted-foreground">{m.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  )
}
