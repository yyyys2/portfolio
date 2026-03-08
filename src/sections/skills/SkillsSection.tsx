import { useMemo, useState } from "react"
import clsx from "clsx"
import Section from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import FadeIn from "@/components/animation/FadeIn"
import { skills } from "@/data/skills"
import { useI18n } from "@/hooks/useI18n.ts"
import type { SkillTab } from "./types"

const tabs: SkillTab[] = ["all", "frontend", "tooling", "infra"]

const companyPreferenceOrder: Record<string, number> = {
  typescript: 1,
  react: 2,
  javascript: 3,
  html: 4,
  css_scss: 5,
  tailwind: 6,
  nextjs: 7,
  tanstack_query: 8,
  zustand: 9,
  accessibility: 10,
  performance_optimization: 11,
  git: 12,
  figma: 13,
  vue: 14,
  docker: 15,
  nginx: 16,
  svelte: 17,
  chatgpt: 18,
  excel: 19,
  powerpoint: 20,
  canva: 21,
}

function getLevelKey(proficiency: number) {
  if (proficiency >= 85) return "expert"
  if (proficiency >= 70) return "advanced"
  if (proficiency >= 55) return "intermediate"
  return "basic"
}

export default function SkillsSection() {
  const { lang, t } = useI18n()
  const [tab, setTab] = useState<SkillTab>("all")

  const sortedSkills = useMemo(() => {
    const filtered =
      tab === "all" ? skills : skills.filter((skill) => skill.category === tab)

    return [...filtered].sort((a, b) => {
      const rankA = companyPreferenceOrder[a.id] ?? 999
      const rankB = companyPreferenceOrder[b.id] ?? 999
      if (rankA !== rankB) return rankA - rankB

      const diff = b.proficiency - a.proficiency
      if (diff !== 0) return diff
      return a.name.localeCompare(b.name)
    })
  }, [tab])

  return (
    <Section id="skills" title={t("skills.title")}>
      <div className="mt-5">
        <div className="flex gap-2 overflow-x-auto py-1">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={clsx(
                "whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2 sm:text-sm",
                tab === item
                  ? "border-primary/30 bg-primary/15 text-gray-900 dark:border-primary/40 dark:bg-primary/25 dark:text-neutral-100"
                  : "border-black/10 bg-white text-gray-600 hover:bg-black/[0.03] dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
              )}
            >
              {t(`skills.tabs.${item}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 xl:grid-cols-3">
        {sortedSkills.map((skill, index) => {
          const levelKey = getLevelKey(skill.proficiency)
          const iconSrc = skill.icon
            ? `${import.meta.env.BASE_URL}${skill.icon}`
            : undefined

          return (
            <FadeIn key={skill.id} delay={index * 0.015}>
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-neutral-100 ring-1 ring-black/5 dark:bg-neutral-700 dark:ring-white/10 sm:h-10 sm:w-10">
                    {iconSrc ? (
                      <img
                        src={iconSrc}
                        alt={skill.name}
                        className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-[10px] font-semibold text-gray-600 dark:text-neutral-300">
                        AI
                      </span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <h3 className="line-clamp-1 font-display text-sm font-semibold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-base">
                        {skill.name}
                      </h3>
                      <span className="rounded-full bg-secondary-soft px-2 py-0.5 text-[10px] font-medium text-gray-600 ring-1 ring-black/5 dark:bg-neutral-700 dark:text-neutral-300 dark:ring-white/10">
                        {t(`skills.categoryLabel.${skill.category}`)}
                      </span>
                    </div>

                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-neutral-300">
                      {lang === "ko"
                        ? skill.competency.ko
                        : skill.competency.en}
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold text-gray-500 dark:text-neutral-400">
                        {t(`skills.level.${levelKey}`)}
                      </p>
                      <p className="text-xs font-medium text-primary-strong">
                        {skill.proficiency}%
                      </p>
                    </div>

                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-700">
                      <div
                        className="h-full rounded-full bg-primary-strong"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          )
        })}
      </div>
    </Section>
  )
}
