import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { coreStack, profile, snapshot, stats } from '@/data/profile'
import { cn } from '@/lib/utils'
import { CodeforcesIcon, GitHubIcon, LinkedInIcon } from './BrandIcons'

const socials = [
  { label: 'GitHub', href: profile.socials.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: LinkedInIcon },
  { label: 'Codeforces', href: profile.socials.codeforces, Icon: CodeforcesIcon },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-60 mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-12 pt-14 pb-16 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pt-24 lg:pb-20">
        <div className="reveal">
          <Badge variant="outline" className="h-7 gap-2 rounded-full bg-card px-3 text-[13px] text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            {profile.availability}
          </Badge>

          <h1 id="hero-title" className="mt-6 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
            {profile.name}
            <span className="mt-2 block bg-linear-to-r from-primary via-primary to-highlight bg-clip-text pb-1 text-transparent">
              {profile.title}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">{profile.headline}</p>

          <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            {profile.location} · {profile.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={cn(buttonVariants({ size: 'xl' }), 'shadow-lg shadow-primary/25')}>
              View my work
              <ArrowRight aria-hidden="true" />
            </a>
            <a href={profile.cv} download className={buttonVariants({ size: 'xl', variant: 'outline' })}>
              <Download aria-hidden="true" />
              Download résumé
            </a>
          </div>

          <ul className="mt-8 flex items-center gap-2" aria-label="Profiles">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={cn(buttonVariants({ variant: 'ghost', size: 'icon-lg' }), 'size-11 text-muted-foreground hover:text-foreground')}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* At-a-glance card: the facts a recruiter scans for first. */}
        <Card className="reveal mx-auto w-full max-w-md gap-0 rounded-2xl py-0 shadow-2xl shadow-foreground/10 [--reveal-delay:120ms] lg:max-w-none">
          <figure className="relative aspect-[5/4] overflow-hidden bg-muted lg:aspect-[3/2]">
            {/* Initials sit underneath as a fallback if the photo fails to load. */}
            <span
              aria-hidden="true"
              className="absolute inset-0 grid place-items-center text-4xl font-semibold text-muted-foreground"
            >
              {profile.initials}
            </span>
            <picture>
              <source srcSet={profile.photo.webp} type="image/webp" />
              <img
                src={profile.photo.jpg}
                alt={profile.photo.alt}
                width={560}
                height={700}
                fetchPriority="high"
                decoding="async"
                className="relative size-full object-cover object-[50%_22%] transition-transform duration-700 ease-out group-hover/card:scale-[1.03] motion-reduce:transition-none"
              />
            </picture>
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/85 via-slate-950/45 to-transparent px-6 pt-16 pb-5 text-white">
              <p className="text-lg font-semibold">{profile.name}</p>
              <p className="text-sm text-white/80">{profile.title}</p>
            </figcaption>
          </figure>
          <Separator />
          <dl className="grid gap-3.5 px-6 py-5">
            {snapshot.map((fact) => (
              <div key={fact.label} className="grid gap-0.5">
                <dt className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">{fact.label}</dt>
                <dd className="text-sm font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-2 border-t bg-muted/50 p-4 sm:flex-row">
            <a href={`mailto:${profile.email}`} className={cn(buttonVariants({ size: 'lg' }), 'flex-1')}>
              <Mail aria-hidden="true" />
              Get in touch
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'flex-1')}
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
          </div>
        </Card>
      </div>

      <div className="container-page pb-16">
        <dl className="reveal grid grid-cols-2 overflow-hidden rounded-2xl border bg-border [gap:1px] lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end gap-1 bg-card p-5 sm:p-6">
              <dt className="text-sm text-muted-foreground">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Core stack marquee; duplicated list makes the loop seamless. */}
      <div className="border-y bg-card/60 py-5">
        <p className="sr-only">Core stack: {coreStack.join(', ')}</p>
        <div
          aria-hidden="true"
          className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="animate-marquee flex w-max gap-10 pr-10">
            {[...coreStack, ...coreStack].map((tech, i) => (
              <span key={i} className="font-mono text-sm font-medium whitespace-nowrap text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
