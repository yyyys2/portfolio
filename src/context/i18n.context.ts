import { createContext } from "react"
import type { I18nContextType } from "@/i18n/types"

export const I18nContext = createContext<I18nContextType | null>(null)
