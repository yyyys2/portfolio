import { type ReactNode, useEffect, useId, useRef } from "react"
import useBodyScrollLock from "@/hooks/useBodyScrollLock"
import useKeydown from "@/hooks/useKeydown"
import { trapTabKey } from "@/lib/focus"
import { useI18n } from "@/hooks/useI18n.ts"
import CloseIcon from "@/components/icons/CloseIcon"

export default function Modal({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
}) {
  const { t } = useI18n()
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const lastActiveRef = useRef<HTMLElement | null>(null)

  useBodyScrollLock(open)

  useEffect(() => {
    if (!open) return
    lastActiveRef.current = document.activeElement as HTMLElement | null
    setTimeout(() => dialogRef.current?.focus(), 0)
    return () => lastActiveRef.current?.focus?.()
  }, [open])

  useKeydown(open, (e) => {
    if (!dialogRef.current) return
    if (e.key === "Escape") onClose()
    trapTabKey(e, dialogRef.current)
  })

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <button
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px] dark:bg-black/55"
        aria-label={t("modal.closeAria")}
        onClick={onClose}
      />

      <div className="relative mx-auto flex h-full max-w-3xl items-end px-3 py-3 sm:items-center sm:px-4 sm:py-0">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          className="w-full rounded-3xl bg-white shadow-[0_20px_80px_rgba(0,0,0,0.18)] ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/10"
        >
          <div className="flex items-start justify-between gap-3 border-b border-black/5 px-4 py-4 dark:border-white/10 sm:px-6 sm:py-5">
            <div className="min-w-0">
              <h2
                id={titleId}
                className="break-words text-base font-semibold leading-snug tracking-tight text-gray-900 dark:text-neutral-100 sm:text-xl"
              >
                {title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="dark:border-white/12 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-black/10 text-gray-600 transition hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/10"
              aria-label={t("modal.closeAria")}
              title={t("modal.close")}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="max-h-[75vh] overflow-auto px-4 py-4 sm:max-h-[70vh] sm:px-6 sm:py-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
