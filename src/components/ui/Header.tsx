import { useEffect, useState } from "react"
import clsx from "clsx"
import Button from "@/components/ui/Button"
import { useI18n } from "@/hooks/useI18n.ts"

export default function Header() {
  const { lang, setLang, t } = useI18n()
  const [currentHash, setCurrentHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash)
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const navItems = [
    { key: "profile", href: "#/profile", label: t("nav.profile") },
    { key: "projects", href: "#projects", label: t("nav.projects") },
    { key: "reliability", href: "#reliability", label: t("nav.reliability") },
    { key: "contact", href: "#contact", label: t("nav.contact") },
  ] as const

  const isActive = (href: string) => {
    if (href === "#/profile") return currentHash.startsWith("#/profile")
    return currentHash === href
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-display font-black tracking-tight">
          Portfolio
        </a>

        <nav className="hidden items-center gap-6 font-display text-sm text-gray-600 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              className={clsx(
                "transition-colors hover:text-primary",
                isActive(item.href) && "text-primary-strong"
              )}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
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
