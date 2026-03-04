import FadeIn from "@/components/animation/FadeIn"
import Button from "@/components/ui/Button"
import { useI18n } from "@/hooks/useI18n.ts"

export default function HeroSection() {
  const { t } = useI18n()

  return (
    <section id="top" className="bg-drift-wrapper relative">
      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl items-center px-4 py-16">
        <div className={"grid items-center gap-12 md:grid-cols-2"}>
          <div className="w-full">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs text-gray-700 ring-1 ring-black/5 dark:bg-neutral-800/80 dark:text-neutral-200 dark:ring-white/10">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                <span className={"font-display"}>{t("hero.keyword")}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-neutral-100 sm:text-5xl">
                {t("hero.title")}
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-2xl whitespace-pre-line font-sans text-base leading-relaxed text-gray-600 dark:text-neutral-300">
                {t("hero.desc")}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#/projects">
                  <Button>{t("hero.ctaProjects")}</Button>
                </a>
                <a href="#/contact">
                  <Button variant="ghost">{t("hero.ctaResume")}</Button>
                </a>
              </div>
            </FadeIn>
          </div>
          {/* Right: photos */}
          <div className="relative hidden md:block">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white/40 ring-1 ring-black/5 backdrop-blur dark:bg-neutral-800/60 dark:ring-white/10">
                {/* main photo */}
                <img
                  src="public/assets/images/projects/test.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                {/* soft gradient for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent dark:from-black/35" />
              </div>

              {/* stacked cards */}
              <div className="photo-float absolute -right-6 -top-6 aspect-[4/5] w-40 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5 dark:ring-white/10">
                <img
                  src="public/assets/images/projects/test2.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="photo-float2 absolute -bottom-6 -left-6 aspect-[4/5] w-44 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5 dark:ring-white/10">
                <img
                  src="public/assets/images/projects/test.png"
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
