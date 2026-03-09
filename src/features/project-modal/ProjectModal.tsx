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

  const problemHighlights = buildProblemHighlights(project, problem, lang)
  const approachHighlights = approach.slice(0, 3)
  const resultHighlights = result.slice(0, 3)
  const reliabilityHighlights = reliability.slice(0, 3)

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

        <section className="grid gap-3 md:grid-cols-2">
          <InsightCard title={t("modal.problem")} items={problemHighlights} />
          <InsightCard title={t("modal.approach")} items={approachHighlights} />
          <InsightCard title={t("modal.result")} items={resultHighlights} />
          <InsightCard
            title={t("modal.reliabilityOps")}
            items={reliabilityHighlights}
          />
        </section>

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

function InsightCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl bg-white/75 p-3 ring-1 ring-black/5 dark:bg-neutral-900/40 dark:ring-white/10">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-neutral-300">
        {title}
      </p>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-gray-700 dark:text-neutral-200">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70 dark:bg-primary/80" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function splitToHighlights(text: string, limit: number) {
  const parts = text
    .split(/[.,]/)
    .map((part) => part.trim())
    .filter(Boolean)

  if (parts.length === 0) return [text]
  return parts.slice(0, limit)
}

function buildProblemHighlights(
  project: Project,
  problem: string,
  lang: "ko" | "en"
) {
  const highlights = splitToHighlights(problem, 2)
  if (highlights.length >= 2) return highlights

  const fallback = inferSecondaryChallenge(project, lang)

  if (!highlights.includes(fallback)) highlights.push(fallback)
  return highlights.slice(0, 2)
}

function inferSecondaryChallenge(project: Project, lang: "ko" | "en") {
  const tags = project.tags.join(" ").toLowerCase()
  const stack = project.stack.join(" ").toLowerCase()

  if (
    project.category === "platform" ||
    tags.includes("webos") ||
    tags.includes("tv")
  ) {
    return lang === "ko"
      ? "기기 성능 차이와 조작 방식 차이를 함께 맞춰야 했습니다"
      : "I had to handle both device performance gaps and different control patterns"
  }

  if (
    tags.includes("admin") ||
    tags.includes("운영") ||
    stack.includes("tanstack table") ||
    stack.includes("router")
  ) {
    return lang === "ko"
      ? "관리자 화면에서 권한별 화면 분기와 데이터 맞춤 처리가 복잡했습니다"
      : "In admin screens, role-based flows and data consistency quickly became complex"
  }

  if (
    project.category === "finance_public" ||
    tags.includes("결제") ||
    tags.includes("finance") ||
    tags.includes("b2c")
  ) {
    return lang === "ko"
      ? "실패나 지연이 생겨도 사용자가 불안하지 않게 흐름을 지켜야 했습니다"
      : "Even on failures or delays, the flow had to stay clear so users would not feel uncertain"
  }

  if (tags.includes("ai")) {
    return lang === "ko"
      ? "AI 답변이 들쭉날쭉해도 화면 흐름이 흔들리지 않게 만들어야 했습니다"
      : "Even when AI responses varied, the UI flow needed to stay stable"
  }

  if (tags.includes("반응형") || tags.includes("promo")) {
    return lang === "ko"
      ? "화면 크기가 달라도 내용 전달과 배치가 자연스럽게 보이게 해야 했습니다"
      : "Across screen sizes, both content clarity and layout had to remain consistent"
  }

  return lang === "ko"
    ? "기능이 늘어나는 동안에도 수정하기 쉽고 운영하기 편한 구조가 필요했습니다"
    : "As the product grew, the structure had to stay easy to maintain and operate"
}
