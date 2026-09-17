import SiteHeader from "@/components/layout/SiteHeader"
import AboutHero from "@/components/about/AboutHero"
import CoreStrengths from "@/components/about/CoreStrengths"
import ExperienceCta from "@/components/about/ExperienceCta"
import "@/styles/home.css"
import "@/styles/about.css"

export default function AboutPage() {
  return (
    <div className="about-page">
      <SiteHeader />
      <main className="about-main">
        <AboutHero />
        <CoreStrengths />
        <ExperienceCta />
      </main>
    </div>
  )
}
