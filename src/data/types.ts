export type LocalizedText = {
  ko: string
  en: string
}

export type SkillCategory = "frontend" | "tooling" | "infra"

export type Skill = {
  id: string
  name: string
  proficiency: number
  category: SkillCategory
  competency: LocalizedText
  icon?: string
}

export type ProjectCategory = "platform" | "enterprise" | "finance_public"

export type Project = {
  id: string
  category: ProjectCategory
  title: LocalizedText
  oneLiner: LocalizedText
  details?: LocalizedText
  tags: string[]
  role: LocalizedText
  stack: string[]
  problem: LocalizedText
  approach: { ko: string[]; en: string[] }
  reliability: { ko: string[]; en: string[] }
  result: { ko: string[]; en: string[] }
  image?: { src: string; note?: string }
  links?: { live?: string; github?: string }
}

export type ProjectCategoryMeta = {
  id: ProjectCategory
  label: LocalizedText
}
