import type { ReactNode } from "react"

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl px-4 pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12 ${className ?? ""}`}
    >
      <header className="mb-6 sm:mb-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight dark:text-neutral-100">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-gray-500 dark:text-neutral-400">{subtitle}</p>
        )}
      </header>
      {children}
    </section>
  )
}
