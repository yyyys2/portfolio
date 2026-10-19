import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const navigation = [
  { label: "PROJECTS", href: "#/projects" },
  { label: "EXPERIENCE", href: "#/experience" },
  { label: "ABOUT", href: "#/about" },
  { label: "CONTACT", href: "#/contact" },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || "#/")

  useEffect(() => {
    const handleHashChange = () => {
      setMenuOpen(false)
      setCurrentHash(window.location.hash || "#/")
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <header className="renewal-header">
      <div className="renewal-header__inner">
        <a className="renewal-header__logo" href="#/" aria-label="홈으로 이동">
          KIM YUN YOUNG
        </a>

        <nav className="renewal-header__nav" aria-label="주요 메뉴">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={currentHash.startsWith(item.href) ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="renewal-header__menu-button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          aria-controls="renewal-mobile-menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="renewal-mobile-menu"
            className="renewal-header__mobile-nav"
            aria-label="모바일 메뉴"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={currentHash.startsWith(item.href) ? "page" : undefined}
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
