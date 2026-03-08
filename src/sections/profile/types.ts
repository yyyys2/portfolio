export type ProfileStat = {
  label: string
  value: string
  desc: string
}

export type ProfileCard = {
  title: string
  icon: string
  body: string
}

export type ProfileSummary = {
  stats: ProfileStat[]
  cards: ProfileCard[]
}

export type ExperienceItem = {
  period: string
  company: string
  role: string
  details: string[]
}
