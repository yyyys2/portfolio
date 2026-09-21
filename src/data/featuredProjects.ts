import { selectedProjects } from "@/data/selectedProjects"

export type FeaturedProject = {
  id: string
  title: string
  description: string
  previewItems: string[]
  stack: string[]
  searchKeywords: string[]
  href: string
}

export const featuredProjects: FeaturedProject[] = selectedProjects.map((project) => ({
  id: project.id,
  title: project.title,
  description: project.description,
  previewItems: project.previewItems,
  stack: project.tags.slice(0, 3),
  searchKeywords: [project.fullTitle, ...project.searchKeywords],
  href: `#/projects?project=${project.id}`,
}))
