import Header from "@/components/ui/Header"
import HeroSection from "@/sections/hero/HeroSection"
import ProjectsSection from "@/sections/projects/ProjectsSection"
import ReliabilitySection from "@/sections/reliability/ReliabilitySection"
import ContactSection from "@/sections/contact/ContactSection"

export default function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <ReliabilitySection />
      <ContactSection />
      <footer className="mx-auto max-w-6xl px-4 pb-10 font-display text-sm text-gray-500">
        Thanks for visiting.
        <br />© 2026 yyyys2
      </footer>
    </main>
  )
}
