export type FeaturedProject = {
  id: string
  title: string
  description: string
  previewItems: string[]
  stack: string[]
  searchKeywords: string[]
  href: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "ai-agent",
    title: "AI Agent UI",
    description: "대화형 AI 서비스 인터페이스",
    previewItems: ["문서 요약", "데이터 분석", "메일 작성"],
    stack: ["React", "TypeScript", "TanStack Query"],
    searchKeywords: ["AI Agent", "접근성", "대화형 UI"],
    href: "#/projects?project=ai-agent",
  },
  {
    id: "webos-multi",
    title: "WebOS 스마트 디스플레이 서비스 개발",
    description: "사용자/관리자 웹과 WebOS 앱을 함께 개발·운영한 디바이스 연동 서비스",
    previewItems: ["WebOS", "React", "운영"],
    stack: ["React", "SCSS", "Webpack"],
    searchKeywords: ["WebOS", "스마트 디스플레이", "React", "운영"],
    href: "#/projects?project=webos-multi",
  },
  {
    id: "v2x-sdk-platform",
    title: "V2X SDK 운영 관리자 플랫폼",
    description: "SDK 버전과 권한을 운영자가 쉽게 관리할 수 있게 만든 플랫폼",
    previewItems: ["B2B", "SDK", "관리자"],
    stack: ["React", "SCSS", "Webpack"],
    searchKeywords: ["V2X", "SDK", "관리자", "React"],
    href: "#/projects?project=v2x-sdk-platform",
  },
  {
    id: "smart-mobility-promo",
    title: "스마트 모빌리티 홍보 웹사이트",
    description: "기술 내용을 이해하기 쉽게 전달하도록 만든 반응형 홍보 사이트",
    previewItems: ["React", "홍보사이트", "반응형"],
    stack: ["React", "SCSS", "Webpack"],
    searchKeywords: ["스마트 모빌리티", "홍보사이트", "반응형", "React"],
    href: "#/projects?project=smart-mobility-promo",
  },
]
