import { useState } from "react"
import type { Project } from "@/data/projects"

export default function useProjectModal() {
    const [open, setOpen] = useState(false)
    const [project, setProject] = useState<Project | null>(null)

    const openProject = (p: Project) => {
        setProject(p)
        setOpen(true)
    }

    const close = () => {
        setOpen(false)
        setProject(null)
    }

    return { open, project, openProject, close }
}