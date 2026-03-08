import type { ReactNode } from "react"
import { useState } from "react"
import { ko } from "@/i18n/ko"
import { en } from "@/i18n/en"
import type { Lang, Messages } from "@/i18n/types"
import { I18nContext } from "../../context/i18n.context.ts"

interface I18nProviderProps {
  children: ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [lang, setLang] = useState<Lang>("ko")
  const messages: Messages = lang === "ko" ? ko : en

  const resolvePath = (path: string): unknown => {
    return path.split(".").reduce<unknown>((obj, key) => {
      if (typeof obj === "object" && obj !== null && key in obj) {
        return (obj as Record<string, unknown>)[key]
      }
      return undefined
    }, messages)
  }

  const t = (path: string): string => {
    const value = resolvePath(path)
    return typeof value === "string" ? value : ""
  }

  const tm = <T,>(path: string): T => {
    return resolvePath(path) as T
  }

  return (
    <I18nContext.Provider value={{ t, tm, lang, setLang }}>
      {children}
    </I18nContext.Provider>
  )
}
