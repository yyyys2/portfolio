import FadeIn from "@/components/animation/FadeIn"
import Card from "@/components/ui/Card"
import Section from "@/components/ui/Section"
import Tag from "@/components/ui/Tag"
import { projects } from "@/data/projects"
import { useI18n } from "@/hooks/useI18n.ts"

const featuredImpactCopy = {
  "webos-multi": {
    ko: "성과: 사용자 웹·관리자 CMS·WebOS 앱 3개 플랫폼 통합 운영, 펌웨어/해상도 기준선 QA로 전환 안정성 개선",
    en: "Impact: Unified operations across 3 surfaces (user web, admin CMS, WebOS app) with firmware/resolution QA baselines for more stable transitions",
  },
  "ai-agent": {
    ko: "성과: LLM 실패·지연·빈 결과 3가지 복구 흐름 분리와 권한 매트릭스 검증으로 운영 대응 속도 개선",
    en: "Impact: Improved ops response speed by separating 3 recovery flows (failed, delayed, empty LLM output) and validating permission-matrix scenarios",
  },
} as const

export default function FeaturedProjectSection() {
  const { t, lang } = useI18n()
  const featuredIds = ["webos-multi", "ai-agent"]
  const featuredList = featuredIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 2)

  if (featuredList.length === 0) return null

  return (
    <Section id="featured" title={t("home.featured.title")}>
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {featuredList.map((featured, index) => {
          const title = lang === "ko" ? featured.title.ko : featured.title.en
          const oneLiner =
            lang === "ko" ? featured.oneLiner.ko : featured.oneLiner.en
          const impactText =
            featuredImpactCopy[featured.id as keyof typeof featuredImpactCopy]?.[
              lang
            ] ??
            (lang === "ko"
              ? `성과: ${featured.result.ko[0]}`
              : `Impact: ${featured.result.en[0]}`)

          return (
            <FadeIn key={featured.id} delay={index * 0.06}>
              <Card className="h-full p-4">
                <div className="flex h-full flex-col gap-4 sm:flex-row">
                  <div className="h-40 w-full shrink-0 overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/10 sm:h-24 sm:w-28">
                    {featured.image ? (
                      <img
                        src={featured.image.src}
                        alt={title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full bg-soft-pastel" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-gray-800 ring-1 ring-black/10 backdrop-blur dark:bg-neutral-900/80 dark:text-neutral-100 dark:ring-white/10">
                        {t("home.featured.badge")}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {featured.tags.slice(0, 2).map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    </div>

                    <h3 className="mt-2 line-clamp-1 font-display text-lg font-semibold tracking-tight text-gray-900 dark:text-neutral-100">
                      {title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-600 dark:text-neutral-300 sm:text-sm">
                      {oneLiner}
                    </p>
                    <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-gray-500 dark:text-neutral-400 sm:text-xs">
                      {impactText}
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          )
        })}
      </div>

      <FadeIn delay={0.12}>
        <div className="mt-6">
          <a
            href="#/projects"
            className="inline-flex items-center rounded-2xl bg-primary/85 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary dark:bg-primary-strong dark:hover:bg-primary"
          >
            {t("home.featured.cta")}
          </a>
        </div>
      </FadeIn>
    </Section>
  )
}
