import clsx from "clsx"
import type { ReactNode } from "react"

export default function Card({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={clsx(
        "rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5 dark:bg-neutral-800 dark:ring-white/10 dark:shadow-none",
        className
      )}
    >
      {children}
    </div>
  )
}
