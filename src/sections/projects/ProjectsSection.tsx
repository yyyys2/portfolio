import { type ReactNode, useMemo, useState } from "react"
import Section from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import Tag from "@/components/ui/Tag"
import FadeIn from "@/components/animation/FadeIn"
import {
  PROJECT_CATEGORIES,
  type ProjectCategory,
  projects,
} from "@/data/projects"
import useProjectModal from "@/features/project-modal/useProjectModal"
import ProjectModal from "@/features/project-modal/ProjectModal"
import { useI18n } from "@/hooks/useI18n.ts"

export default function ProjectsSection() {
  const { lang, t } = useI18n()
  const [category, setCategory] = useState<ProjectCategory | "all">("all")
  const modal = useProjectModal()

  const list = useMemo(() => {
    if (category === "all") return projects
    return projects.filter((p) => p.category === category)
  }, [category])

  return (
    <>
      <Section
        id="projects"
        title={t("projects.title")}
        subtitle={t("projects.desc")}
        className={"bg-white dark:bg-transparent"}
      >
        <FadeIn>
          <div className="flex flex-wrap gap-2">
            <FilterButton
              active={category === "all"}
              onClick={() => setCategory("all")}
            >
              {t("projects.all")}
            </FilterButton>
            {PROJECT_CATEGORIES.map((c) => (
              <FilterButton
                key={c.id}
                active={category === c.id}
                onClick={() => setCategory(c.id)}
              >
                {lang === "ko" ? c.label.ko : c.label.en}
              </FilterButton>
            ))}
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <button
              key={p.id}
              onClick={() => modal.openProject(p)}
              className="text-left"
            >
              <Card className="group relative flex h-full flex-col overflow-hidden transition-transform hover:-translate-y-1">
                {p.image && (
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <img
                      src={p.image.src}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/35 dark:bg-black/45" />
                    {p.image.note && (
                      <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-xs text-gray-800 ring-1 ring-black/10 backdrop-blur dark:bg-neutral-900/85 dark:text-neutral-100 dark:ring-white/15">
                        {p.image.note}
                      </span>
                    )}
                  </div>
                )}

                <div className="relative flex-1 transition-opacity duration-200 group-hover:opacity-0">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((x) => (
                      <Tag key={x}>{x}</Tag>
                    ))}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900 dark:text-neutral-100">
                    {lang === "ko" ? p.title.ko : p.title.en}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 dark:text-neutral-300">
                    {lang === "ko" ? p.oneLiner.ko : p.oneLiner.en}
                  </p>

                  <p className="mt-4 text-xs text-gray-500 dark:text-neutral-400">
                    {lang === "ko" ? p.role.ko : p.role.en}
                  </p>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {p.links?.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
                    >
                      {t("projects.visitSite")}
                    </a>
                  )}
                </div>
              </Card>
            </button>
          ))}
        </div>
      </Section>

      <ProjectModal
        open={modal.open}
        project={modal.project}
        onClose={modal.close}
      />
    </>
  )
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 font-display text-sm ring-1 transition",
        active
          ? "bg-primary/15 text-gray-900 ring-primary/25 dark:bg-primary/25 dark:text-neutral-100 dark:ring-primary/40"
          : "bg-white/70 text-gray-700 ring-black/10 hover:bg-black/[0.03] dark:bg-neutral-800 dark:text-neutral-300 dark:ring-white/10 dark:hover:bg-neutral-700",
      ].join(" ")}
    >
      {children}
    </button>
  )
}
