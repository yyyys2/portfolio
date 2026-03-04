import { createContext, type Dispatch, type SetStateAction } from "react"

export type Lang = "ko" | "en"

export interface I18nContextType {
  lang: Lang
  setLang: Dispatch<SetStateAction<Lang>>
  t: (path: string) => string
}

export const I18nContext = createContext<I18nContextType | null>(null)
