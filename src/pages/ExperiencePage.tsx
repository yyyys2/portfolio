import SiteHeader from "@/components/layout/SiteHeader"
import ExperienceView from "@/components/experience/ExperienceView"
import "@/styles/home.css"
import "@/styles/experience.css"

export default function ExperiencePage() {
  return <div className="experience-page"><SiteHeader /><ExperienceView /></div>
}
