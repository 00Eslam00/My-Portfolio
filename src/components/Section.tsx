import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
  muted?: boolean
}

export function Section({ id, eyebrow, title, intro, children, muted }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('py-20 lg:py-28', muted && 'border-y bg-muted/50')}
    >
      <div className="container-page">
        <header className="reveal mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs font-medium tracking-[0.18em] text-primary uppercase">{eyebrow}</p>
          <h2 id={`${id}-title`} className="text-3xl font-semibold sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
