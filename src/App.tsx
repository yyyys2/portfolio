import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"
import HeroSection from "@/sections/hero/HeroSection"
import ProfileRegistrationSection from "@/sections/profile/ProfileRegistrationSection"
import ProjectsSection from "@/sections/projects/ProjectsSection"
import ReliabilitySection from "@/sections/reliability/ReliabilitySection"
import ContactSection from "@/sections/contact/ContactSection"
import FeaturedProjectSection from "@/sections/home/FeaturedProjectSection"
import InterestsSection from "@/sections/home/InterestsSection"
import SkillsSection from "@/sections/skills/SkillsSection"

function getViewFromHash() {
  const hash = window.location.hash || "#/"
  if (hash.startsWith("#/profile")) return "profile"
  if (hash.startsWith("#/skills")) return "skills"
  if (hash.startsWith("#/projects")) return "projects"
  if (hash.startsWith("#/reliability")) return "reliability"
  if (hash.startsWith("#/contact")) return "contact"
  return "home"
}

type Theme = "light" | "dark"

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme")
  if (stored === "light" || stored === "dark") return stored
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

export default function App() {
  const [view, setView] = useState(getViewFromHash)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [themeTransitionKey, setThemeTransitionKey] = useState(0)

  useEffect(() => {
    const handleHashChange = () => {
      setView(getViewFromHash())
    }

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    setThemeTransitionKey((prev) => prev + 1)
  }

  return (
    <main className="relative flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-neutral-900 dark:text-neutral-100">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <AnimatePresence>
        <motion.div
          key={themeTransitionKey}
          initial={{ opacity: 0.16 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="pointer-events-none fixed inset-0 z-50"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(circle at 50% 20%, rgba(250, 218, 221, 0.18), rgba(20,22,36,0.35) 60%)"
                : "radial-gradient(circle at 50% 20%, rgba(184, 192, 255, 0.22), rgba(255,255,255,0.3) 60%)",
          }}
        />
      </AnimatePresence>
      <div className="flex-1">
        {view === "home" && (
          <>
            <HeroSection />
            <FeaturedProjectSection />
            <InterestsSection />
          </>
        )}
        {view === "profile" && <ProfileRegistrationSection />}
        {view === "skills" && <SkillsSection />}
        {view === "projects" && <ProjectsSection />}
        {view === "reliability" && <ReliabilitySection />}
        {view === "contact" && <ContactSection />}
      </div>
      <Footer />
    </main>
  )
}
