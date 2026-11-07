import type { CSSProperties } from 'react'
import { Code, GraduationCap, Radio, Server } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { profile } from '@/data/profile'
import { Section } from './Section'

const focus = [
  {
    Icon: Server,
    title: 'Backend architecture',
    text: 'Clean Architecture, CQRS and layered ASP.NET Core APIs that stay testable as they grow.',
  },
  {
    Icon: Radio,
    title: 'Real-time & event-driven',
    text: 'SignalR live features and RabbitMQ / Kafka pipelines between independent services.',
  },
  {
    Icon: Code,
    title: 'React front ends',
    text: 'Typed React UIs, from booking flows to live tracking dashboards, wired end to end.',
  },
]

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer across the whole stack">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>{profile.summary}</p>
          <p>
            I care about security (JWT, OAuth2, ASP.NET Identity), automated testing and CI/CD with GitHub Actions, and I
            work comfortably in Agile teams. Outside product work I'm a competitive programmer and coach.
          </p>

          <Card className="mt-8 flex-row items-center gap-4 rounded-xl px-5 py-5 text-base">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-foreground">Bachelor of Computer Science</p>
              <p className="text-sm text-muted-foreground">Cairo University · Oct 2021 – Jul 2025</p>
              <p className="mt-0.5 text-sm font-medium text-primary">GPA 3.71 / 4.0 · Excellent with Honor</p>
            </div>
          </Card>
        </div>

        <ul className="grid gap-4">
          {focus.map(({ Icon, title, text }, i) => (
            <li key={title} className="reveal" style={{ '--reveal-delay': `${i * 80}ms` } as CSSProperties}>
              <Card className="flex-row gap-4 rounded-xl px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-primary/40">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
