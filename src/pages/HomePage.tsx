import SiteHeader from "@/components/layout/SiteHeader"
import HomeHero from "@/components/home/HomeHero"
import "@/styles/home.css"

export default function HomePage() {
  return (
    <div className="home-page">
      <SiteHeader />
      <main>
        <HomeHero />
      </main>
    </div>
  )
}
