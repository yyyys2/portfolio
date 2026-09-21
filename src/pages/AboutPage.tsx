import SiteHeader from "@/components/layout/SiteHeader"
import AboutHero from "@/components/about/AboutHero"
import AboutProfile from "@/components/about/AboutProfile"
import CoreStrengths from "@/components/about/CoreStrengths"
import ExperienceCta from "@/components/about/ExperienceCta"
import "@/styles/home.css"
import "@/styles/about.css"
import "@/styles/playground.css"

export default function AboutPage() {
  return (
    <div className="about-page">
      <SiteHeader />
      <main className="about-main">
        <AboutHero />
        <CoreStrengths />
        <AboutProfile />
        <ExperienceCta />
        <footer className="about-footer"><a href="#/contact">CONTACT ↗</a><span>bellelaide1005@gmail.com</span><p>© 2026 KIM YOON YOUNG. ALL RIGHTS RESERVED.</p></footer>
      </main>
    </div>
  )
}
