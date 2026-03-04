import type { ReactNode } from "react"
import MailIcon from "@/components/icons/MailIcon"
import GithubIcon from "@/components/icons/GithubIcon"
import InstagramIcon from "@/components/icons/InstagramIcon"
import DownloadIcon from "@/components/icons/DownloadIcon"
import { useI18n } from "@/hooks/useI18n.ts"

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="mt-6 border-t border-black/5 bg-white/70 dark:border-white/10 dark:bg-neutral-900/70 sm:mt-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4 py-4 text-xs text-gray-500 dark:text-neutral-400 sm:justify-between">
        <p className="text-center sm:text-left">
          {t("app.footer.copyright")} · {t("app.footer.thanks")}
        </p>
        <div className="flex items-center gap-2">
          <FooterIconLink href="mailto:bellelaide1005@gmail.com" label="Email">
            <MailIcon />
          </FooterIconLink>
          <FooterIconLink
            href="https://github.com/yyyys2"
            label="GitHub"
            external
          >
            <GithubIcon />
          </FooterIconLink>
          <FooterIconLink
            href="https://www.instagram.com/"
            label="Instagram"
            external
          >
            <InstagramIcon />
          </FooterIconLink>
          <FooterIconLink
            href={`${import.meta.env.BASE_URL}assets/resume/kim_yun_young_resume.pdf`}
            label="Resume PDF"
            download
          >
            <DownloadIcon />
          </FooterIconLink>
        </div>
      </div>
    </footer>
  )
}

function FooterIconLink({
  href,
  label,
  children,
  external = false,
  download = false,
}: {
  href: string
  label: string
  children: ReactNode
  external?: boolean
  download?: boolean
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...(download ? { download: true } : {})}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 ring-1 ring-black/10 transition hover:bg-primary-soft hover:text-primary-strong dark:bg-neutral-800 dark:text-neutral-300 dark:ring-white/10 dark:hover:bg-neutral-700"
    >
      {children}
    </a>
  )
}
