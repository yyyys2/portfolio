import SiteHeader from "@/components/layout/SiteHeader"
import ProjectsView from "@/components/projects/ProjectsView"
import "@/styles/home.css"
import "@/styles/projects.css"

export default function ProjectsPage() {
  return <div className="projects-page"><SiteHeader /><ProjectsView /></div>
}
