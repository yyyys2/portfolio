import Button from "@/components/ui/Button"
import {useI18n} from "@/hooks/useI18n.ts";

export default function Header() {
    const { lang, setLang, t } = useI18n()

    return (
        <header className="sticky top-0 z-40 border-b border-black/5 bg-white/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <a href="#top" className="text-sm font-semibold tracking-tight">
                    Portfolio
                </a>

                <nav className="hidden items-center gap-6 text-sm text-gray-600 sm:flex">
                    <a className="hover:text-gray-900" href="#projects">{t("nav.projects")}</a>
                    <a className="hover:text-gray-900" href="#reliability">{t("nav.reliability")}</a>
                    <a className="hover:text-gray-900" href="#contact">{t("nav.contact")}</a>
                </nav>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        onClick={() => setLang(lang === "ko" ? "en" : "ko")}
                        className="h-10 px-4"
                    >
                        {lang === "ko" ? "EN" : "KO"}
                    </Button>
                </div>
            </div>
        </header>
    )
}