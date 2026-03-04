import { useMemo, useState } from "react"
import clsx from "clsx"
import Section from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import FadeIn from "@/components/animation/FadeIn"
import { skills, type Skill } from "@/data/skills"
import { useI18n } from "@/hooks/useI18n.ts"

type SkillTab = "all" | Skill["category"]

const tabs: SkillTab[] = ["all", "frontend", "tooling", "infra"]

const companyPreferenceOrder: Record<string, number> = {
  typescript: 1,
  react: 2,
  javascript: 3,
  html: 4,
  css_scss: 5,
  tailwind: 6,
  git: 7,
  figma: 8,
  vue: 9,
  docker: 10,
  nginx: 11,
  svelte: 12,
  chatgpt: 13,
  excel: 14,
  powerpoint: 15,
  canva: 16,
}

function getScore(rating: string) {
  return rating.split("★").length - 1
}

function getLevelKey(score: number) {
  if (score >= 5) return "expert"
  if (score >= 4) return "advanced"
  if (score >= 3) return "intermediate"
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

      const diff = getScore(b.rating) - getScore(a.rating)
      if (diff !== 0) return diff
      return a.name.localeCompare(b.name)
    })
  }, [tab])

  return (
    <Section id="skills" title={t("skills.title")}>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-medium ring-1 transition",
                tab === item
                  ? "bg-primary/15 text-gray-900 ring-primary/30 dark:bg-primary/25 dark:text-neutral-100 dark:ring-primary/40"
                  : "bg-white text-gray-600 ring-black/10 hover:bg-black/[0.03] dark:bg-neutral-800 dark:text-neutral-300 dark:ring-white/10 dark:hover:bg-neutral-700"
              )}
            >
              {t(`skills.tabs.${item}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {sortedSkills.map((skill, index) => {
          const score = getScore(skill.rating)
          const levelKey = getLevelKey(score)
          const iconSrc = skill.icon
            ? `${import.meta.env.BASE_URL}${skill.icon}`
            : undefined

          return (
            <FadeIn key={skill.id} delay={index * 0.015}>
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-neutral-100 ring-1 ring-black/5 dark:bg-neutral-700 dark:ring-white/10">
                    {iconSrc ? (
                      <img
                        src={iconSrc}
                        alt={skill.name}
                        className="h-6 w-6 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-[10px] font-semibold text-gray-600 dark:text-neutral-300">
                        AI
                      </span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="line-clamp-1 font-display text-base font-semibold tracking-tight text-gray-900 dark:text-neutral-100">
                        {skill.name}
                      </h3>
                      <span className="rounded-full bg-secondary-soft px-2 py-0.5 text-[10px] font-medium text-gray-600 ring-1 ring-black/5 dark:bg-neutral-700 dark:text-neutral-300 dark:ring-white/10">
                        {t(`skills.categoryLabel.${skill.category}`)}
                      </span>
                    </div>

                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-neutral-300">
                      {lang === "ko" ? skill.competency.ko : skill.competency.en}
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold text-gray-500 dark:text-neutral-400">
                        {t(`skills.level.${levelKey}`)}
                      </p>
                      <p className="text-xs font-medium text-primary-strong">
                        {score * 20}%
                      </p>
                    </div>

                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-700">
                      <div
                        className="h-full rounded-full bg-primary-strong"
                        style={{ width: `${score * 20}%` }}
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

