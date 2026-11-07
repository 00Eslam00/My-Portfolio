import { useEffect, useState } from 'react'
import { Download, Menu, Moon, Sun } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navLinks, profile } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import type { Theme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

type NavbarProps = {
  theme: Theme
  onToggleTheme: () => void
}

const sectionIds = navLinks.map((l) => l.href.slice(1))

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const themeLabel = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b border-transparent transition-colors duration-300',
        scrolled && 'border-border bg-background/80 backdrop-blur-lg supports-backdrop-filter:bg-background/70',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5" aria-label={`${profile.name}, back to top`}>
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-lg bg-foreground text-sm font-semibold text-background transition-transform group-hover:-rotate-6"
          >
            {profile.initials}
          </span>
          <span className="font-semibold">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                  isActive && 'text-foreground',
                )}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-x-3 -bottom-px h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300',
                    isActive && 'scale-x-100',
                  )}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon-lg" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}>
            {theme === 'light' ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
          </Button>
          <a href={profile.cv} download className={cn(buttonVariants({ size: 'lg' }), 'hidden px-4 sm:inline-flex')}>
            <Download aria-hidden="true" />
            Résumé
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="outline" size="icon-lg" className="md:hidden" aria-label="Open menu" />}
            >
              <Menu aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto p-4">
                <a href={profile.cv} download className={cn(buttonVariants({ size: 'xl' }), 'w-full')}>
                  <Download aria-hidden="true" />
                  Download résumé
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
