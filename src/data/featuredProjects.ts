import { projects } from "@/data/projects"

export type FeaturedProject = {
  id: string
  title: string
  description: string
  previewItems: string[]
  stack: string[]
  searchKeywords: string[]
  href: string
}

const featuredProjectIds = [
  "ai-agent",
  "webos-multi",
  "v2x-sdk-platform",
  "smart-mobility-promo",
] as const

const homeOverrides: Partial<Record<(typeof featuredProjectIds)[number], Partial<FeaturedProject>>> = {
  "ai-agent": {
    title: "AI Agent UI",
    description: "대화형 AI 서비스 인터페이스",
    previewItems: ["문서 요약", "데이터 분석", "메일 작성"],
    stack: ["React", "TypeScript", "TanStack Query"],
    searchKeywords: ["AI Agent", "접근성", "대화형 UI"],
  },
}

export const featuredProjects: FeaturedProject[] = featuredProjectIds.flatMap(
  (id) => {
    const project = projects.find((item) => item.id === id)
    if (!project) return []

    const override = homeOverrides[id]

    return [
      {
        id: project.id,
        title: override?.title ?? project.title.ko,
        description: override?.description ?? project.oneLiner.ko,
        previewItems: override?.previewItems ?? project.tags.slice(0, 3),
        stack: override?.stack ?? project.stack.slice(0, 3),
        searchKeywords: [
          project.title.ko,
          project.title.en,
          project.oneLiner.ko,
          ...project.tags,
          ...project.stack,
          ...(override?.searchKeywords ?? []),
        ],
        href: `#/projects?project=${project.id}`,
      },
    ]
  }
)
