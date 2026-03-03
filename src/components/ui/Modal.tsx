import {type ReactNode, useEffect, useId, useRef} from "react"
import useBodyScrollLock from "@/hooks/useBodyScrollLock"
import useKeydown from "@/hooks/useKeydown"
import { trapTabKey } from "@/lib/focus"

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
                className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
                aria-label="Close modal"
                onClick={onClose}
            />

            <div className="relative mx-auto flex h-full max-w-3xl items-center px-4">
                <div
                    ref={dialogRef}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    tabIndex={-1}
                    className="w-full rounded-3xl bg-white shadow-[0_20px_80px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
                >
                    <div className="flex items-start justify-between gap-4 border-b border-black/5 px-6 py-5">
                        <div>
                            <h2 id={titleId} className="text-xl font-semibold tracking-tight">
                                {title}
                            </h2>
                            <p className="mt-1 text-sm text-gray-500">Case Study</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="rounded-xl px-3 py-2 text-sm text-gray-600 hover:bg-black/5"
                        >
                            닫기
                        </button>
                    </div>

                    <div className="max-h-[70vh] overflow-auto px-6 py-6">{children}</div>
                </div>
            </div>
        </div>
    )
}