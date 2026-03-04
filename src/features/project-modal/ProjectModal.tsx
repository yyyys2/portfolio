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
      <div className="space-y-6 sm:space-y-8">
        <div className="rounded-2xl bg-black/[0.03] p-4 ring-1 ring-black/5 dark:bg-white/[0.03] dark:ring-white/10 sm:p-5">
          <p className="text-sm leading-relaxed text-gray-600 dark:text-neutral-300">
            {pick(project.oneLiner)}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Block title={t("modal.problem")}>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-neutral-200">
              {pick(project.problem)}
            </p>
          </Block>

          <Block title={t("modal.result")}>
            <Ul items={pick(project.result)} />
          </Block>
        </div>

        <Block title={t("modal.approach")}>
          <Ul items={pick(project.approach)} />
        </Block>

        <Block title={t("modal.reliabilityOps")}>
          <Ul items={pick(project.reliability)} />
        </Block>

        <Block title={t("modal.stack")}>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
      <h3 className="text-sm font-semibold tracking-tight text-gray-800 dark:text-neutral-100 sm:text-base">
        {title}
      </h3>
      <div className="mt-2.5 sm:mt-3">{children}</div>
    </section>
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
