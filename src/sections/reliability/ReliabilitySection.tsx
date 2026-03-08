import Section from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import FadeIn from "@/components/animation/FadeIn"
import { useI18n } from "@/hooks/useI18n.ts"
import type {
  ChecklistItemProps,
  PrincipleCardProps,
  ReliabilityItem,
  ReliabilitySummary,
  SummaryCardProps,
} from "./types"

const summaryTone = [
  "from-primary/12 to-primary/5 dark:from-primary/20 dark:to-primary/10",
  "from-accent/30 to-accent/10 dark:from-accent/20 dark:to-accent/10",
  "from-secondary-soft to-primary/10 dark:from-neutral-800 dark:to-neutral-700",
]

export default function ReliabilitySection() {
  const { t, tm } = useI18n()
  const items = tm<ReliabilityItem[]>("reliability.items")
  const summary = tm<ReliabilitySummary[]>("reliability.summary")
  const checklist = tm<string[]>("reliability.checklist")

  return (
    <Section
      id="reliability"
      title={t("reliability.title")}
    >
      <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
        {summary.map((stat, i) => (
          <FadeIn key={`${stat.label}-${i}`} delay={i * 0.04}>
            <SummaryCard
              label={stat.label}
              value={stat.value}
              desc={stat.desc}
              tone={summaryTone[i % summaryTone.length]}
            />
          </FadeIn>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <FadeIn>
            <Card className="p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-neutral-400">
                {t("reliability.principles")}
              </p>

              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {items.map((x, i) => (
                  <li key={`${x.title}-${i}`}>
                    <PrincipleCard index={i + 1} title={x.title} desc={x.desc} />
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        </div>

        <div className="lg:col-span-4">
          <FadeIn delay={0.06}>
            <Card className="p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-neutral-400">
                {t("reliability.firstChecks")}
              </p>

              <ol className="mt-4 space-y-3">
                {checklist.map((item, i) => (
                  <li key={item}>
                    <ChecklistItem index={i + 1} text={item} />
                  </li>
                ))}
              </ol>
            </Card>
          </FadeIn>
        </div>
      </div>
    </Section>
  )
}

function SummaryCard({
  label,
  value,
  desc,
  tone,
}: SummaryCardProps) {
  return (
    <Card className={`bg-gradient-to-br p-5 ${tone}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-neutral-400">
        {label}
      </p>
      <p className="mt-2 font-display text-xl font-semibold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-2xl">
        {value}
      </p>
      <p className="mt-1 text-sm text-gray-700 dark:text-neutral-200">{desc}</p>
    </Card>
  )
}

function PrincipleCard({
  index,
  title,
  desc,
}: PrincipleCardProps) {
  return (
    <article className="h-full rounded-xl border border-black/5 bg-black/[0.02] p-4 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary-strong dark:bg-primary/25">
          {index}
        </span>
        <div>
          <h3 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-base">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-neutral-300">
            {desc}
          </p>
        </div>
      </div>
    </article>
  )
}

function ChecklistItem({ index, text }: ChecklistItemProps) {
  return (
    <article className="rounded-xl border border-black/5 bg-black/[0.02] p-3 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary-soft text-[11px] font-semibold text-gray-700 dark:bg-neutral-700 dark:text-neutral-200">
          {index}
        </span>
        <p className="text-sm leading-relaxed text-gray-700 dark:text-neutral-200">
          {text}
        </p>
      </div>
    </article>
  )
}
