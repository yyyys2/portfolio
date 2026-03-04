import { type ReactNode, useMemo, useState } from "react"
import Section from "@/components/ui/Section"
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

  const categoryLabel = (categoryId: ProjectCategory) => {
    const matched = PROJECT_CATEGORIES.find((c) => c.id === categoryId)
    if (!matched) return categoryId
    return lang === "ko" ? matched.label.ko : matched.label.en
  }

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

        <div className="mt-8 grid gap-4">
          {list.map((p, idx) => (
            <FadeIn key={p.id} delay={idx * 0.03}>
              <article className="grid gap-4 rounded-2xl border border-black/5 bg-white/70 p-4 backdrop-blur transition hover:border-primary/40 dark:border-white/10 dark:bg-neutral-800/65 md:grid-cols-[84px_1fr_auto] md:items-start md:gap-6 md:p-5">
                <div className="flex items-center gap-3 md:block">
                  <p className="font-display text-xs font-semibold tracking-[0.22em] text-gray-400 dark:text-neutral-500">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-0 text-xs text-gray-500 dark:text-neutral-400 md:mt-2">
                    {categoryLabel(p.category)}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-gray-900 dark:text-neutral-100">
                    {lang === "ko" ? p.title.ko : p.title.en}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-neutral-300">
                    {lang === "ko" ? p.oneLiner.ko : p.oneLiner.en}
                  </p>

                  <p className="mt-3 text-xs text-gray-500 dark:text-neutral-400">
                    {lang === "ko" ? p.role.ko : p.role.en}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 4).map((x) => (
                      <Tag key={x}>{x}</Tag>
                    ))}
                  </div>

                  {p.image?.note && (
                    <p className="mt-3 text-xs text-gray-500 dark:text-neutral-400">
                      {p.image.note}
                    </p>
                  )}
                </div>

                <div className="flex gap-2 md:flex-col md:items-end">
                  <button
                    onClick={() => modal.openProject(p)}
                    className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm text-white transition hover:bg-gray-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
                  >
                    {t("projects.view")}
                  </button>

                  {p.links?.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm text-gray-800 ring-1 ring-black/10 transition hover:bg-black/[0.03] dark:bg-neutral-800 dark:text-neutral-100 dark:ring-white/10 dark:hover:bg-neutral-700"
                    >
                      {t("projects.visitSite")}
                    </a>
                  )}
                </div>

                {p.image && (
                  <div className="hidden md:col-span-3 md:mt-1 md:block">
                    <img
                      src={p.image.src}
                      alt={lang === "ko" ? p.title.ko : p.title.en}
                      className="h-28 w-full rounded-xl object-cover ring-1 ring-black/5 dark:ring-white/10"
                      loading="lazy"
                    />
                  </div>
                )}
              </article>
            </FadeIn>
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
