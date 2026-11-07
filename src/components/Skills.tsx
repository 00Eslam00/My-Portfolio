import { Cloud, Code, Database, Server, ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import type { SkillGroup } from '@/data/profile'
import { skillGroups } from '@/data/profile'
import { cn } from '@/lib/utils'
import { Section } from './Section'

const icons: Record<SkillGroup['icon'], typeof Code> = {
  code: Code,
  server: Server,
  database: Database,
  shield: ShieldCheck,
  cloud: Cloud,
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I build with"
      intro="A .NET backend core, a React + TypeScript front end, and the infrastructure that connects them."
      muted
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon]
          return (
            <Card
              key={group.title}
              className={cn(
                'reveal gap-5 rounded-2xl px-6 py-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-primary/30 lg:col-span-2',
                i >= 3 && 'lg:col-span-3',
              )}
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge variant="secondary" className="h-7 px-3 text-[13px] font-normal">
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
