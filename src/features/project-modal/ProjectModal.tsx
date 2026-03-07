import Modal from "@/components/ui/Modal"
import type { Project } from "@/data/projects"
import Tag from "@/components/ui/Tag"
import { useI18n } from "@/hooks/useI18n.ts"

export default function ProjectModal({
  open,
  project,
  onClose,
}: {
  open: boolean
  project: Project | null
  onClose: () => void
}) {
  const { lang, t } = useI18n()
  if (!project) return null

  const pick = <T,>(v: { ko: T; en: T }) => (lang === "ko" ? v.ko : v.en)
  const title = pick(project.title)
  const oneLiner = pick(project.oneLiner)
  const problem = pick(project.problem)
  const approach = pick(project.approach)
  const reliability = pick(project.reliability)
  const result = pick(project.result)
  const details = project.details ? pick(project.details) : null
  const categoryLabel =
    lang === "ko"
      ? {
          platform: "Platform & Device",
          enterprise: "Enterprise / B2B",
          finance_public: "Finance / Public",
        }[project.category]
      : {
          platform: "Platform & Device",
          enterprise: "Enterprise / B2B",
          finance_public: "Finance / Public",
        }[project.category]

  const fallbackNarrative =
    lang === "ko"
      ? `${oneLiner} 이 프로젝트에서는 ${problem} 핵심 구현은 ${approach.join(", ")} 중심으로 진행했고, 운영 안정성을 위해 ${reliability.join(", ")}에 집중했습니다. 그 결과 ${result.join(", ")}로 이어졌습니다.`
      : `${oneLiner} In this project, ${problem} Implementation focused on ${approach.join(", ")}. For operational reliability, I prioritized ${reliability.join(", ")}. As a result, it led to ${result.join(", ")}.`
  const detailNarrative = details ?? fallbackNarrative

  return (
    <Modal open={open} title={title} onClose={onClose}>
      <div className="space-y-5 sm:space-y-6">
        <section className="rounded-2xl bg-gradient-to-br from-primary/12 via-accent/20 to-primary/5 p-4 ring-1 ring-black/5 dark:from-primary/20 dark:via-accent/25 dark:to-transparent dark:ring-white/10 sm:p-5">
          <p className="text-sm leading-relaxed text-gray-700 dark:text-neutral-200">
            {oneLiner}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </section>

        <section className="grid gap-2 sm:grid-cols-3">
          <MetaCard
            label={lang === "ko" ? "카테고리" : "Category"}
            value={categoryLabel}
          />
          <MetaCard
            label={lang === "ko" ? "기술 스택 수" : "Stack Count"}
            value={`${project.stack.length}`}
          />
          <MetaCard
            label={lang === "ko" ? "외부 링크" : "External Link"}
            value={
              project.links?.live
                ? lang === "ko"
                  ? "사이트 있음"
                  : "Live available"
                : lang === "ko"
                  ? "비공개 또는 없음"
                  : "Private or unavailable"
            }
          />
        </section>

        <Block title={t("modal.details")}>
          <p className="text-sm leading-7 text-gray-700 dark:text-neutral-200">
            {detailNarrative}
          </p>
        </Block>

        <div className="grid gap-4 md:grid-cols-2">
          <Block title={t("modal.problem")} tone="soft">
            <p className="text-sm leading-7 text-gray-700 dark:text-neutral-200">
              {problem}
            </p>
          </Block>

          <Block title={t("modal.result")} tone="soft">
            <Ul items={result} />
          </Block>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Block title={t("modal.approach")} tone="soft">
            <Ul items={approach} />
          </Block>

          <Block title={t("modal.reliabilityOps")} tone="soft">
            <Ul items={reliability} />
          </Block>
        </div>

        <Block title={t("modal.stack")}>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <Tag key={s} tone="soft">
                {s}
              </Tag>
            ))}
          </div>
        </Block>
      </div>
    </Modal>
  )
}

function Block({
  title,
  tone = "plain",
  children,
}: {
  title: string
  tone?: "plain" | "soft"
  children: React.ReactNode
}) {
  return (
    <section
      className={
        tone === "soft"
          ? "rounded-2xl bg-black/[0.02] p-4 ring-1 ring-black/5 dark:bg-white/[0.02] dark:ring-white/10"
          : ""
      }
    >
      <h3 className="text-sm font-semibold tracking-tight text-gray-800 dark:text-neutral-100 sm:text-base">
        {title}
      </h3>
      <div className="mt-2.5 sm:mt-3">{children}</div>
    </section>
  )
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-black/[0.02] px-3 py-3 ring-1 ring-black/5 dark:bg-white/[0.02] dark:ring-white/10">
      <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500 dark:text-neutral-400">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-gray-800 dark:text-neutral-100">
        {value}
      </p>
    </div>
  )
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-gray-700 dark:text-neutral-200">
      {items.map((x) => (
        <li key={x} className="flex gap-2">
          <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300 dark:bg-neutral-500" />
          <span className="leading-relaxed">{x}</span>
        </li>
      ))}
    </ul>
  )
}
