import { useEffect, useState } from "react"
import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"
import Button from "@/components/ui/Button"
import ThemeSunIcon from "@/components/icons/ThemeSunIcon"
import ThemeMoonIcon from "@/components/icons/ThemeMoonIcon"
import MenuIcon from "@/components/icons/MenuIcon"
import CloseIcon from "@/components/icons/CloseIcon"
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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onHashChange = () => {
      setCurrentHash(window.location.hash)
      setMenuOpen(false)
    }
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
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/75 backdrop-blur dark:border-white/10 dark:bg-neutral-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#/"
          className="font-display text-sm font-black tracking-tight dark:text-neutral-100 sm:text-base"
        >
          Portfolio
        </a>

        <nav className="hidden items-center gap-6 font-display text-sm text-gray-600 dark:text-neutral-300 lg:flex">
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

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} t={t} />
          <LangToggle
            lang={lang}
            onToggle={() => setLang(lang === "ko" ? "en" : "ko")}
            t={t}
          />
        </div>

        <div className="flex items-center gap-1.5 lg:hidden">
          <ThemeToggle
            theme={theme}
            onToggleTheme={onToggleTheme}
            t={t}
            mobile
          />
          <LangToggle
            lang={lang}
            onToggle={() => setLang(lang === "ko" ? "en" : "ko")}
            t={t}
            mobile
          />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="dark:border-white/12 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white/60 text-gray-700 transition hover:bg-black/[0.03] dark:bg-neutral-800/70 dark:text-neutral-200 dark:hover:bg-neutral-700"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-black/8 dark:border-white/12 mx-4 mb-3 rounded-2xl border bg-white/90 p-2 shadow-sm backdrop-blur dark:bg-neutral-900/90 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={clsx(
                  "block rounded-xl px-3 py-2 text-sm transition",
                  isActive(item.href)
                    ? "bg-primary/15 text-primary-strong dark:bg-primary/20 dark:text-primary"
                    : "text-gray-700 hover:bg-black/[0.03] dark:text-neutral-200 dark:hover:bg-neutral-800"
                )}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function ThemeToggle({
  theme,
  onToggleTheme,
  t,
  mobile = false,
}: {
  theme: "light" | "dark"
  onToggleTheme: () => void
  t: (key: string) => string
  mobile?: boolean
}) {
  return (
    <Button
      variant="ghost"
      onClick={onToggleTheme}
      className={clsx(
        "bg-white/60 px-0 ring-black/10 backdrop-blur hover:bg-white/80 dark:bg-neutral-800/70 dark:ring-white/15 dark:hover:bg-neutral-700/80",
        mobile ? "h-9 w-9" : "h-10 w-10"
      )}
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
  )
}

function LangToggle({
  lang,
  onToggle,
  t,
  mobile = false,
}: {
  lang: "ko" | "en"
  onToggle: () => void
  t: (key: string) => string
  mobile?: boolean
}) {
  return (
    <Button
      variant="ghost"
      onClick={onToggle}
      className={clsx(mobile ? "h-9 px-2.5 text-[11px]" : "h-10 px-4 text-sm")}
    >
      {lang === "ko"
        ? t("header.language.toEnglish")
        : t("header.language.toKorean")}
    </Button>
  )
}
