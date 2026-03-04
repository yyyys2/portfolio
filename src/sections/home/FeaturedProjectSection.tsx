import FadeIn from "@/components/animation/FadeIn"
import Card from "@/components/ui/Card"
import Section from "@/components/ui/Section"
import Tag from "@/components/ui/Tag"
import { projects } from "@/data/projects"
import { useI18n } from "@/hooks/useI18n.ts"

export default function FeaturedProjectSection() {
  const { t, lang } = useI18n()
  const featuredIds = ["webos-multi", "ai-agent"]
  const featuredList = featuredIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 2)

  if (featuredList.length === 0) return null

  return (
    <Section
      id="featured"
      title={t("home.featured.title")}
      className="pt-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {featuredList.map((featured, index) => {
          const title = lang === "ko" ? featured.title.ko : featured.title.en
          const oneLiner =
            lang === "ko" ? featured.oneLiner.ko : featured.oneLiner.en

          return (
            <FadeIn key={featured.id} delay={index * 0.06}>
              <Card className="p-4">
                <div className="flex gap-4">
                  <div className="h-24 w-28 shrink-0 overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/10">
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
                    <div className="flex items-center gap-2">
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
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-neutral-300">
                      {oneLiner}
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
