import { useState } from 'react'
import { Check, Copy, Download, Mail } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { CodeforcesIcon, GitHubIcon, LinkedInIcon } from './BrandIcons'

const links = [
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: LinkedInIcon },
  { label: 'GitHub', href: profile.socials.github, Icon: GitHubIcon },
  { label: 'Codeforces', href: profile.socials.codeforces, Icon: CodeforcesIcon },
]

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-20 lg:pb-28">
      <div className="container-page">
        <div className="reveal relative isolate overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 text-center text-slate-200 sm:px-12 lg:py-20">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-24 size-96 rounded-full bg-blue-600/40 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 size-96 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="bg-grid absolute inset-0 opacity-[0.07] [--border:white]" />
          </div>

          <p className="font-mono text-xs font-medium tracking-[0.18em] text-blue-300 uppercase">Contact</p>
          <h2 id="contact-title" className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Let's build something reliable together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            I'm open to full-stack and backend roles. Email is the fastest way to reach me, and my résumé has the full
            details.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className={cn(buttonVariants({ size: 'xl' }), 'bg-white text-slate-950 hover:bg-slate-200')}
            >
              <Mail aria-hidden="true" />
              Email me
            </a>
            <Button
              size="xl"
              variant="outline"
              onClick={copyEmail}
              className="max-w-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white dark:border-white/20 dark:bg-white/5"
            >
              {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
              <span aria-live="polite" className="truncate">
                {copied ? 'Copied to clipboard' : profile.email}
              </span>
            </Button>
            <a
              href={profile.cv}
              download
              className={cn(
                buttonVariants({ size: 'xl', variant: 'outline' }),
                'border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white dark:border-white/20 dark:bg-white/5',
              )}
            >
              <Download aria-hidden="true" />
              Résumé (PDF)
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 border-t border-white/10 pt-8">
            {links.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 font-medium text-slate-300 transition-colors hover:text-white"
                >
                  <Icon size={18} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
