import FadeIn from "@/components/animation/FadeIn"
import Button from "@/components/ui/Button"
import { useI18n } from "@/hooks/useI18n.ts"
import { useState } from "react"

export default function HeroSection() {
  const { t } = useI18n()
  const heroPhotos = [
    `${import.meta.env.BASE_URL}assets/images/hero/home-hero-photo-01.jpeg`,
    `${import.meta.env.BASE_URL}assets/images/hero/home-hero-photo-02.jpeg`,
    `${import.meta.env.BASE_URL}assets/images/hero/home-hero-photo-03.jpeg`,
  ]
  const [mainPhotoIndex] = useState(() =>
    Math.floor(Math.random() * heroPhotos.length)
  )
  const mainPhoto = heroPhotos[mainPhotoIndex]
  const sidePhotos = heroPhotos.filter((_, index) => index !== mainPhotoIndex)

  return (
    <section id="top" className="bg-drift-wrapper relative">
      <div className="relative z-10 mx-auto flex min-h-[62vh] max-w-6xl items-center px-4 py-12 sm:min-h-[70vh] sm:py-16 md:min-h-[78vh]">
        <div className={"grid items-center gap-12 md:grid-cols-2 md:gap-12"}>
          <div className="w-full text-center md:text-left">
            <div className="mx-auto mb-6 flex w-full max-w-sm items-end justify-center gap-3 md:hidden">
              <div className="photo-float aspect-[4/5] w-24 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5 dark:ring-white/10">
                <img
                  src={mainPhoto}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="photo-float2 aspect-[4/5] w-24 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5 dark:ring-white/10">
                <img
                  src={sidePhotos[0] ?? heroPhotos[0]}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="photo-float3 aspect-[4/5] w-24 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5 dark:ring-white/10">
                <img
                  src={sidePhotos[1] ?? heroPhotos[1]}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <FadeIn>
              <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs text-gray-700 ring-1 ring-black/5 md:mx-0 dark:bg-neutral-800/80 dark:text-neutral-200 dark:ring-white/10">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                <span className={"font-display"}>{t("hero.keyword")}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="mx-auto mt-5 max-w-full whitespace-nowrap font-display text-[1.7rem] font-semibold leading-[1.2] tracking-tight text-gray-900 sm:text-[2rem] md:mx-0 md:text-[2.3rem] lg:text-[2.7rem] dark:text-neutral-100">
                {t("hero.title")}
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl whitespace-pre-line font-sans text-base leading-relaxed text-gray-600 md:mx-0 dark:text-neutral-300">
                {t("hero.desc")}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-2 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-3 md:mx-0">
                <a href="#/projects" className="block sm:inline-block">
                  <Button className="w-full sm:w-auto">
                    {t("hero.ctaProjects")}
                  </Button>
                </a>
                <a href="#/contact" className="block sm:inline-block">
                  <Button variant="ghost" className="w-full sm:w-auto">
                    {t("hero.ctaResume")}
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>
          {/* Right: photos */}
          <div className="relative block">
            <div className="relative mx-auto hidden w-full max-w-[300px] sm:max-w-sm md:block md:max-w-md">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-white/45 ring-1 ring-black/5 backdrop-blur dark:bg-neutral-800/50 dark:ring-white/10" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white/40 ring-1 ring-black/5 backdrop-blur dark:bg-neutral-800/60 dark:ring-white/10">
                {/* main photo */}
                <img
                  src={mainPhoto}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                {/* soft gradient for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent dark:from-black/35" />
              </div>

              {/* stacked cards */}
              <div className="photo-float absolute -right-4 -top-4 aspect-[4/5] w-24 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5 sm:-right-5 sm:-top-5 sm:w-32 md:-right-6 md:-top-6 md:w-40 dark:ring-white/10">
                <img
                  src={sidePhotos[0] ?? heroPhotos[0]}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="photo-float2 absolute -bottom-4 -left-4 aspect-[4/5] w-28 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5 sm:-bottom-5 sm:-left-5 sm:w-36 md:-bottom-6 md:-left-6 md:w-44 dark:ring-white/10">
                <img
                  src={sidePhotos[1] ?? heroPhotos[1]}
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
