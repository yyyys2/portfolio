import type { ReactNode } from "react"
import { useState } from "react"
import { ko } from "@/i18n/ko"
import { en } from "@/i18n/en"
import { I18nContext, type Lang } from "../../context/i18n.context.ts"

type Messages = typeof ko

interface I18nProviderProps {
    children: ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
    const [lang, setLang] = useState<Lang>("ko")
    const messages: Messages = lang === "ko" ? ko : en

    const t = (path: string): string => {
        return path
            .split(".")
            .reduce<unknown>((obj, key) => {
                if (typeof obj === "object" && obj !== null && key in obj) {
                    return (obj as Record<string, unknown>)[key]
                }
                return ""
            }, messages) as string
    }

    return (
        <I18nContext.Provider value={{ t, lang, setLang }}>
            {children}
        </I18nContext.Provider>
    )
}