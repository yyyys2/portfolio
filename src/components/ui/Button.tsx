import clsx from "clsx"
import type { ButtonHTMLAttributes } from "react"

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost"
}) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-xs font-medium transition sm:rounded-2xl sm:px-5 sm:py-3 sm:text-sm",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        variant === "primary" &&
          "bg-primary/80 text-white shadow-sm hover:bg-primary dark:bg-primary-strong dark:hover:bg-primary",
        variant === "ghost" &&
          "bg-white text-gray-800 ring-1 ring-black/10 hover:bg-black/[0.03] dark:bg-neutral-800 dark:text-neutral-100 dark:ring-white/10 dark:hover:bg-neutral-700",
        className
      )}
      {...props}
    />
  )
}
