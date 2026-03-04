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

  return (
    <Modal open={open} title={title} onClose={onClose}>
      <div className="space-y-8">
        <div className="rounded-2xl bg-black/[0.03] p-5 ring-1 ring-black/5 dark:bg-white/[0.03] dark:ring-white/10">
          <p className="text-sm text-gray-600 dark:text-neutral-300">
            {pick(project.oneLiner)}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-500 dark:text-neutral-400">
            {pick(project.role)}
          </p>
        </div>

        <Block title={t("modal.problem")}>
          <p className="text-gray-700 dark:text-neutral-200">
            {pick(project.problem)}
          </p>
        </Block>

        <Block title={t("modal.approach")}>
          <Ul items={pick(project.approach)} />
        </Block>

        <Block title={t("modal.reliabilityOps")}>
          <Ul items={pick(project.reliability)} />
        </Block>

        <Block title={t("modal.result")}>
          <Ul items={pick(project.result)} />
        </Block>

        <Block title={t("modal.stack")}>
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
      <h3 className="text-base font-semibold tracking-tight dark:text-neutral-100">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </section>
  )
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-gray-700 dark:text-neutral-200">
      {items.map((x) => (
        <li key={x} className="flex gap-2">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300 dark:bg-neutral-500" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  )
}
