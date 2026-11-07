import { About } from '@/components/About'
import { Achievements } from '@/components/Achievements'
import { Contact } from '@/components/Contact'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { profile } from '@/data/profile'
import { useReveal } from '@/hooks/useReveal'
import { useTheme } from '@/hooks/useTheme'

function App() {
  const { theme, toggle } = useTheme()
  useReveal()

  return (
    <>
      <a
        href="#main"
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <About />
        <ExperienceTimeline />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t py-8 text-sm text-muted-foreground">
        <div className="container-page flex flex-wrap items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind CSS.
          </p>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
