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
  const { lang } = useI18n()
  if (!project) return null

  const pick = <T,>(v: { ko: T; en: T }) => (lang === "ko" ? v.ko : v.en)
  const title = pick(project.title)

  return (
    <Modal open={open} title={title} onClose={onClose}>
      <div className="space-y-8">
        <div className="rounded-2xl bg-black/[0.03] p-5 ring-1 ring-black/5">
          <p className="text-sm text-gray-600">{pick(project.oneLiner)}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-500">{pick(project.role)}</p>
        </div>

        <Block title={lang === "ko" ? "문제" : "Problem"}>
          <p className="text-gray-700">{pick(project.problem)}</p>
        </Block>

        <Block title={lang === "ko" ? "접근" : "Approach"}>
          <Ul items={pick(project.approach)} />
        </Block>

        <Block title={lang === "ko" ? "신뢰성/운영" : "Reliability / Ops"}>
          <Ul items={pick(project.reliability)} />
        </Block>

        <Block title={lang === "ko" ? "결과" : "Result"}>
          <Ul items={pick(project.result)} />
        </Block>

        <Block title={lang === "ko" ? "기술 스택" : "Stack"}>
          <div className="flex flex-wrap gap-2">
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
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  )
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-gray-700">
      {items.map((x) => (
        <li key={x} className="flex gap-2">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  )
}
