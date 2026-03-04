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
        className={"bg-white"}
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
              <Card className="group relative h-full overflow-hidden transition-transform hover:-translate-y-1">
                {/* Hover image layer */}
                {p.image && (
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <img
                      src={p.image.src}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-white/35 backdrop-blur-[1px]" />
                    {/* note badge */}
                    {p.image.note && (
                      <div className="absolute left-4 top-4">
                        <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs text-gray-700 ring-1 ring-black/5 backdrop-blur">
                          {p.image.note}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Content layer */}
                <div className="relative">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((x) => (
                      <Tag key={x}>{x}</Tag>
                    ))}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">
                    {lang === "ko" ? p.title.ko : p.title.en}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    {lang === "ko" ? p.oneLiner.ko : p.oneLiner.en}
                  </p>

                  <p className="mt-4 text-xs text-gray-500">
                    {lang === "ko" ? p.role.ko : p.role.en}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center rounded-full bg-black/[0.04] px-4 py-2 text-sm text-gray-700 ring-1 ring-black/5">
                      {t("projects.view")}
                    </div>

                    {p.links?.live && (
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-800"
                      >
                        Visit site
                      </a>
                    )}
                  </div>
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
          ? "bg-primary/15 text-gray-900 ring-primary/25"
          : "bg-white/70 text-gray-700 ring-black/10 hover:bg-black/[0.03]",
      ].join(" ")}
    >
      {children}
    </button>
  )
}
