import { useEffect, useState } from "react"
import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"
import Button from "@/components/ui/Button"
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
    { key: "projects", href: "#projects", label: t("nav.projects") },
    { key: "reliability", href: "#reliability", label: t("nav.reliability") },
    { key: "contact", href: "#contact", label: t("nav.contact") },
  ] as const

  const isActive = (href: string) => {
    if (href === "#/profile") return currentHash.startsWith("#/profile")
    return currentHash === href
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-neutral-900/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#top"
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
            className="h-10 w-10 px-0"
            aria-label={
              theme === "dark"
                ? lang === "ko"
                  ? "라이트 모드로 전환"
                  : "Switch to light mode"
                : lang === "ko"
                  ? "다크 모드로 전환"
                  : "Switch to dark mode"
            }
            title={
              theme === "dark"
                ? lang === "ko"
                  ? "라이트 모드"
                  : "Light mode"
                : lang === "ko"
                  ? "다크 모드"
                  : "Dark mode"
            }
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -60, scale: 0.65, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 60, scale: 0.65, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </motion.span>
            </AnimatePresence>
          </Button>
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

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.8v2.1M12 19.1v2.1M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2.8 12h2.1M19.1 12h2.1M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.2 14.2A8.5 8.5 0 1 1 9.8 3.8a7 7 0 1 0 10.4 10.4z" />
    </svg>
  )
}
