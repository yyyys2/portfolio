import { useState } from "react"
import Section from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import MailIcon from "@/components/icons/MailIcon"
import GithubIcon from "@/components/icons/GithubIcon"
import InstagramIcon from "@/components/icons/InstagramIcon"
import DownloadIcon from "@/components/icons/DownloadIcon"
import { useI18n } from "@/hooks/useI18n.ts"
import type { ContactLinkProps, WorkItem } from "./types"

const EMAIL = "bellelaide1005@gmail.com"

export default function ContactSection() {
  const { t, tm } = useI18n()
  const [copied, setCopied] = useState(false)
  const workScope = tm<WorkItem[]>("contact.workScope")

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      // ignore
    }
  }

  return (
    <Section id="contact" title={t("contact.title")}>
      <div className="border-y border-black/[0.08] py-4 dark:border-white/[0.12]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-neutral-400">
          {t("contact.workTitle")}
        </p>
        <div className="mt-3 grid gap-4 md:grid-cols-3 md:gap-0">
          {workScope.map((item, index) => (
            <article
              key={item.title}
              className="md:px-4 md:first:pl-0 md:last:pr-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-black/[0.08] md:[&:not(:first-child)]:dark:border-white/[0.12]"
            >
              <div className="flex items-start gap-3">
                <span className="bg-primary/12 inline-flex h-5 min-w-[28px] shrink-0 items-center justify-center rounded-full px-2 text-[10px] font-semibold text-primary-strong dark:bg-primary/25 dark:text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold tracking-tight text-gray-900 dark:text-neutral-100">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-neutral-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:mt-6 sm:gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <Card className="relative overflow-hidden p-6 md:p-7 lg:self-start">
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/15 blur-3xl dark:bg-primary/20" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-strong dark:text-primary">
            {t("contact.badge")}
          </p>
          <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-2xl md:text-3xl">
            {t("contact.headline")}
          </h3>
          <p className="mt-3 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-gray-600 dark:text-neutral-300">
            {t("contact.message")}
          </p>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Button
              onClick={() => window.open(`mailto:${EMAIL}`)}
              className="w-full !bg-primary-strong sm:w-auto"
            >
              {t("contact.sendEmail")}
            </Button>
            <Button
              variant="ghost"
              onClick={copyEmail}
              className="w-full sm:w-auto"
            >
              {copied ? t("contact.copied") : t("contact.emailCopy")}
            </Button>
          </div>

          <p className="mt-4 text-xs text-gray-500 dark:text-neutral-400">
            {t("contact.response")}
          </p>
        </Card>

        <div className="grid gap-4">
          <Card className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-neutral-400">
              {t("contact.channelsTitle")}
            </p>
            <div className="mt-3 space-y-2">
              <ContactLink
                href={`mailto:${EMAIL}`}
                label={t("contact.channelEmail")}
              >
                <MailIcon />
              </ContactLink>
              <ContactLink
                href="https://github.com/yyyys2"
                label={t("contact.channelGithub")}
                external
              >
                <GithubIcon />
              </ContactLink>
              <ContactLink
                href="https://www.instagram.com/yyyys2"
                label={t("contact.channelInstagram")}
                external
              >
                <InstagramIcon />
              </ContactLink>
              <ContactLink
                href={`${import.meta.env.BASE_URL}assets/resume/kim_yun_young_resume.pdf`}
                label={t("contact.channelResume")}
                download="kim_yun_young_resume.pdf"
              >
                <DownloadIcon />
              </ContactLink>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}

function ContactLink({
  href,
  label,
  children,
  external = false,
  download,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...(download ? { download } : {})}
      className="inline-flex w-full items-center justify-between rounded-xl border border-black/5 bg-white/70 px-3 py-2.5 text-sm text-gray-700 transition hover:bg-black/[0.02] dark:border-white/10 dark:bg-neutral-800/70 dark:text-neutral-200 dark:hover:bg-neutral-700/70"
    >
      <span className="inline-flex items-center gap-2">
        <span className="text-gray-500 dark:text-neutral-400">{children}</span>
        {label}
      </span>
      <span className="text-xs text-gray-400 dark:text-neutral-500">↗</span>
    </a>
  )
}
