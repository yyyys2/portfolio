import FadeIn from "@/components/animation/FadeIn"
import Card from "@/components/ui/Card"
import Section from "@/components/ui/Section"
import { useI18n } from "@/hooks/useI18n.ts"

type InterestKeyword = {
  label: string
  href?: string
}

export default function InterestsSection() {
  const { t, tm } = useI18n()
  const techKeywords = tm<InterestKeyword[]>("home.interests.techKeywords")
  const personalKeywords = tm<InterestKeyword[]>(
    "home.interests.personalKeywords"
  )

  return (
    <Section
      id="interests"
      title={t("home.interests.title")}
      className="pt-4"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-strong">
              {t("home.interests.techTag")}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-gray-900 dark:text-neutral-100">
              {t("home.interests.techTitle")}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {techKeywords.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-primary-soft px-3 py-2 text-xs font-medium text-gray-800 ring-1 ring-primary/25 transition hover:bg-primary/15 dark:bg-primary/20 dark:text-neutral-100 dark:ring-primary/35 dark:hover:bg-primary/30"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    key={item.label}
                    className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-2 text-xs font-medium text-gray-700 ring-1 ring-black/5 dark:bg-neutral-700 dark:text-neutral-200 dark:ring-white/10"
                  >
                    {item.label}
                  </span>
                )
              )}
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary dark:text-secondary">
              {t("home.interests.personalTag")}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-gray-900 dark:text-neutral-100">
              {t("home.interests.personalTitle")}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {personalKeywords.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-accent-soft px-3 py-2 text-xs font-medium text-gray-800 ring-1 ring-accent/35 transition hover:bg-accent/30 dark:bg-accent/20 dark:text-neutral-100 dark:ring-accent/35 dark:hover:bg-accent/35"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    key={item.label}
                    className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-2 text-xs font-medium text-gray-700 ring-1 ring-black/5 dark:bg-neutral-700 dark:text-neutral-200 dark:ring-white/10"
                  >
                    {item.label}
                  </span>
                )
              )}
            </div>
          </Card>
        </FadeIn>
      </div>
    </Section>
  )
}
