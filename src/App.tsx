import { useEffect, useState } from "react"
import Header from "@/components/ui/Header"
import HeroSection from "@/sections/hero/HeroSection"
import ProfileRegistrationSection from "@/sections/profile/ProfileRegistrationSection"
import ProjectsSection from "@/sections/projects/ProjectsSection"
import ReliabilitySection from "@/sections/reliability/ReliabilitySection"
import ContactSection from "@/sections/contact/ContactSection"

function getViewFromHash() {
  return window.location.hash.startsWith("#/profile") ? "profile" : "home"
}

export default function App() {
  const [view, setView] = useState(getViewFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      setView(getViewFromHash())
    }

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      {view === "profile" ? (
        <ProfileRegistrationSection />
      ) : (
        <>
          <HeroSection />
          <ProjectsSection />
          <ReliabilitySection />
          <ContactSection />
        </>
      )}
      <footer className="mx-auto max-w-6xl px-4 pb-10 font-display text-sm text-gray-500">
        Thanks for visiting.
        <br />© 2026 yyyys2
      </footer>
    </main>
  )
}
