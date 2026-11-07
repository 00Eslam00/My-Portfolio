import { Star, Trophy, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { achievements } from '@/data/profile'
import { Section } from './Section'

const icons = [Trophy, Users, Star]

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Beyond the day job">
      <ul className="grid gap-5 md:grid-cols-3">
        {achievements.map((text, i) => {
          const Icon = icons[i % icons.length]
          return (
            <li key={text} className="reveal">
              <Card className="h-full gap-4 rounded-2xl px-6 py-6">
                <span className="grid size-10 place-items-center rounded-lg bg-highlight/12 text-highlight">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{text}</p>
              </Card>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
