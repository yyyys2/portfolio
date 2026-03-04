import FadeIn from "@/components/animation/FadeIn"
import Button from "@/components/ui/Button"
import {useI18n} from "@/hooks/useI18n.ts";

export default function HeroSection() {
    const {t} = useI18n()

    return (
        <section id="top" className="relative bg-drift-wrapper">
            <div className="mx-auto flex min-h-[78vh] max-w-6xl items-center px-4 py-16 z-10 relative">
                <div className="w-full">
                    <FadeIn>
                        <div
                            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs text-gray-700 ring-1 ring-black/5">
                            <span className="h-2 w-2 rounded-full bg-primary"></span>
                            <span className={'font-display'}>Keyword keyword</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.05}>
                        <h1 className="mt-6 max-w-4xl text-4xl font-display font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                            {t("hero.title")}
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-relaxed text-gray-600 font-sans">
                            {t("hero.desc")}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <div className="mt-10 flex flex-wrap gap-3">
                            <a href="#projects">
                                <Button>{t("hero.ctaProjects")}</Button>
                            </a>
                            <a href="#contact">
                                <Button variant="ghost">{t("hero.ctaResume")}</Button>
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}