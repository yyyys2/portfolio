import Section from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import FadeIn from "@/components/animation/FadeIn"
import { useI18n } from "@/hooks/useI18n.ts"

type ReliabilityItem = {
  title: string
  desc: string
}

export default function ReliabilitySection() {
  const { t, tm } = useI18n()
  const items = tm<ReliabilityItem[]>("reliability.items")

  return (
    <Section
      id="reliability"
      title={t("reliability.title")}
      subtitle={t("reliability.desc")}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((x, i) => (
          <FadeIn key={`${x.title}-${i}`} delay={i * 0.04}>
            <Card>
              <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-neutral-100">
                {x.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-300">
                {x.desc}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
