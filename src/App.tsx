import { useEffect, useState } from "react"
import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import ProjectsPage from "@/pages/ProjectsPage"
import ExperiencePage from "@/pages/ExperiencePage"
import ContactPage from "@/pages/ContactPage"
import type { View } from "@/app/types"

function getViewFromHash(): View {
  const hash = window.location.hash || "#/"
  if (hash.startsWith("#/about")) return "about"
  if (hash.startsWith("#/experience")) return "experience"
  if (hash.startsWith("#/projects")) return "projects"
  if (hash.startsWith("#/contact")) return "contact"
  return "home"
}

export default function App() {
  const [view, setView] = useState(getViewFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      setView(getViewFromHash())
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    }

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <main>
      {view === "home" && <HomePage />}
      {view === "about" && <AboutPage />}
      {view === "projects" && <ProjectsPage />}
      {view === "experience" && <ExperiencePage />}
      {view === "contact" && <ContactPage />}
    </main>
  )
}
