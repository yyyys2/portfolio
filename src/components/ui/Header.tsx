import { useEffect, useState } from "react"
import clsx from "clsx"
import { motion } from "framer-motion"
import Button from "@/components/ui/Button"
import ThemeSunIcon from "@/components/icons/ThemeSunIcon"
import ThemeMoonIcon from "@/components/icons/ThemeMoonIcon"
import { useI18n } from "@/hooks/useI18n.ts"

export default function Header({
  theme,
  onToggleTheme,
}: {
  theme: "light" | "dark"
  onToggleTheme: () => void
}) {
  const { lang, setLang, t } = useI18n()
  const [currentHash, setCurrentHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash)
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const navItems = [
    { key: "profile", href: "#/profile", label: t("nav.profile") },
    { key: "skills", href: "#/skills", label: t("nav.skills") },
    { key: "projects", href: "#/projects", label: t("nav.projects") },
    { key: "reliability", href: "#/reliability", label: t("nav.reliability") },
    { key: "contact", href: "#/contact", label: t("nav.contact") },
  ] as const

  const isActive = (href: string) => {
    return currentHash.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-neutral-900/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#/"
          className="font-display font-black tracking-tight dark:text-neutral-100"
        >
          Portfolio
        </a>

        <nav className="hidden items-center gap-6 font-display text-sm text-gray-600 dark:text-neutral-300 sm:flex">
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
            onClick={onToggleTheme}
            className="h-10 w-10 bg-white/60 px-0 ring-black/10 backdrop-blur hover:bg-white/80 dark:bg-neutral-800/70 dark:ring-white/15 dark:hover:bg-neutral-700/80"
            aria-label={
              theme === "dark"
                ? t("header.theme.switchToLight")
                : t("header.theme.switchToDark")
            }
            title={
              theme === "dark"
                ? t("header.theme.lightMode")
                : t("header.theme.darkMode")
            }
          >
            <motion.span
              key={theme}
              initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.22 }}
              className="inline-flex text-gray-800 dark:text-neutral-100"
            >
              {theme === "dark" ? <ThemeSunIcon /> : <ThemeMoonIcon />}
            </motion.span>
          </Button>
          <Button
            variant="ghost"
            onClick={() => setLang(lang === "ko" ? "en" : "ko")}
            className="h-10 px-4"
          >
            {lang === "ko"
              ? t("header.language.toEnglish")
              : t("header.language.toKorean")}
          </Button>
        </div>
      </div>
    </header>
  )
}
