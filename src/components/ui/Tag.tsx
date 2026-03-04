import clsx from "clsx"
import type { ReactNode } from "react"

export default function Tag({
  children,
  tone = "default",
}: {
  children: ReactNode
  tone?: "default" | "soft"
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1",
        tone === "default" &&
          "bg-primary/10 text-gray-800 ring-primary/20 dark:bg-primary/20 dark:text-neutral-100 dark:ring-primary/35",
        tone === "soft" &&
          "bg-accent/25 text-gray-800 ring-black/5 dark:bg-accent/20 dark:text-neutral-100 dark:ring-white/10"
      )}
    >
      {children}
    </span>
  )
}
