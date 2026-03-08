import type { Dispatch, SetStateAction } from "react"
import type { ko } from "@/i18n/ko"
import type { en } from "@/i18n/en"

export type Lang = "ko" | "en"

export type Messages = typeof ko | typeof en

export type I18nContextType = {
  lang: Lang
  setLang: Dispatch<SetStateAction<Lang>>
  t: (path: string) => string
  tm: <T>(path: string) => T
}
