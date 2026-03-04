import Section from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import FadeIn from "@/components/animation/FadeIn"
import { useI18n } from "@/hooks/useI18n.ts"

type ReliabilityItem = {
  title: string
  desc: string
}

type ReliabilitySummary = {
  label: string
  value: string
  desc: string
}

export default function ReliabilitySection() {
  const { t, tm } = useI18n()
  const items = tm<ReliabilityItem[]>("reliability.items")
  const summary = tm<ReliabilitySummary[]>("reliability.summary")
  const checklist = tm<string[]>("reliability.checklist")

  return (
    <Section id="reliability" title={t("reliability.title")}>
      <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
        {summary.map((stat, i) => (
          <FadeIn key={`${stat.label}-${i}`} delay={i * 0.04}>
            <Card className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-neutral-400">
                {stat.label}
              </p>
              <p className="mt-2 font-display text-xl font-semibold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-300">
                {stat.desc}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-[1.35fr_0.85fr]">
        <FadeIn>
          <Card className="p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-neutral-400">
              {t("reliability.principles")}
            </p>
            <ol className="mt-4 space-y-4">
              {items.map((x, i) => (
                <li
                  key={`${x.title}-${i}`}
                  className="flex gap-3 border-b border-black/5 pb-4 last:border-b-0 last:pb-0 dark:border-white/10"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary-strong dark:bg-primary/25">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-gray-900 dark:text-neutral-100">
                      {x.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-neutral-300">
                      {x.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </FadeIn>

        <FadeIn delay={0.06}>
          <Card className="p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-neutral-400">
              {t("reliability.firstChecks")}
            </p>
            <ul className="mt-4 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  <span className="text-sm leading-relaxed text-gray-600 dark:text-neutral-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      </div>
    </Section>
  )
}
