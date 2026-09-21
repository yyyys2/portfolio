export type ProjectId = "ai-agent" | "tv-overlay-shopping" | "digital-signage-management" | "memomi"

export type ProjectDetailSection = {
  label: string
  title: string
  body: string
}

export type SelectedProject = {
  id: ProjectId
  index: string
  title: string
  fullTitle: string
  summary: string
  description: string
  tags: string[]
  previewItems: string[]
  searchKeywords: string[]
  details: ProjectDetailSection[]
}

// Home and Projects share this selection and order.
// Selection rationale and content sources: renewal/projects/PROJECT_SELECTION.md.
export const selectedProjects: SelectedProject[] = [
  {
    id: "ai-agent",
    index: "01",
    title: "AI Agent UI",
    fullTitle: "기업용 채팅형 AI Agent 플랫폼",
    summary: "분석 조건 기반 채팅부터 Canvas 편집·메일 발송까지 구현했습니다.",
    description: "분석 조건 기반 질의와 Canvas 편집을 연결한 AI 업무 UI",
    tags: ["React", "TypeScript", "TanStack Query", "Zustand"],
    previewItems: ["데이터 분석", "테이블 편집", "메일 발송"],
    searchKeywords: ["AI Agent", "대화형 UI", "NL2SQL", "Canvas", "수불", "장기재고", "수급"],
    details: [],
  },
  {
    id: "tv-overlay-shopping",
    index: "02",
    title: "webOS 오버레이 앱",
    fullTitle: "TV 오버레이 쇼핑/푸드 추천 앱",
    summary: "TV 시청 흐름을 유지하는 오버레이와 리모컨 포커스 이동을 구현했습니다.",
    description: "TV 시청 중 이용하는 오버레이 쇼핑·푸드 추천 앱",
    tags: ["Svelte", "TypeScript", "webOS"],
    previewItems: ["오버레이 UX", "리모컨 포커스", "추천 데이터"],
    searchKeywords: ["WebOS", "TV", "오버레이", "Overlay", "쇼핑", "푸드", "추천", "리모컨", "포커스", "SCSS"],
    details: [
      { label: "PROBLEM", title: "TV 시청 흐름을 해치지 않는 상호작용이 필요했습니다.", body: "입력 방식이 제한적인 TV 환경에서 쇼핑·푸드 추천 기능을 오버레이로 제공해야 했습니다. 리모컨 포커스 이동과 오버레이 진입·종료가 시청 흐름을 방해하지 않도록 구성하는 것이 중요했습니다." },
      { label: "IMPLEMENTATION", title: "오버레이 상태와 포커스 복귀 규칙을 분리했습니다.", body: "Svelte와 TypeScript로 오버레이 UI를 구현하고, 진입·종료 시 포커스 고정과 복귀 규칙을 정리했습니다. 추천 데이터를 비동기로 처리하고 API 지연 시 스켈레톤·대체 카드로 빈 화면을 방지했습니다. 자동 닫힘과 포커스 복귀 타이밍의 충돌도 제어했습니다." },
      { label: "RESULT", title: "오버레이 전환과 리모컨 조작의 안정성을 높였습니다.", body: "오버레이 진입·종료와 포커스 이동 오류를 줄여 TV 환경의 사용성을 개선했습니다. 네트워크 지연 상황에서도 사용자가 현재 상태를 이해할 수 있도록 화면 피드백을 제공했습니다." },
    ],
  },
  {
    id: "digital-signage-management",
    index: "03",
    title: "디지털 사이니지",
    fullTitle: "디지털 사이니지 통합 관리 솔루션 고도화",
    summary: "대시보드·리스트의 데이터 동기화와 조회·수정 흐름을 개선했습니다.",
    description: "관리 화면의 데이터 동기화와 성능을 개선한 운영 프로젝트",
    tags: ["React", "TypeScript", "TanStack Query"],
    previewItems: ["데이터 동기화", "테이블 성능", "운영 개선"],
    searchKeywords: ["디지털 사이니지", "Signage", "SuperSign", "관리자", "대시보드", "상태 관리", "TanStack Table", "Zustand", "Zod"],
    details: [
      { label: "PROBLEM", title: "대시보드와 리스트 사이에서 데이터가 어긋났습니다.", body: "운영자가 반복해서 사용하는 관리 화면에서 대시보드와 리스트의 데이터 동기화, 조회·수정 상태와 예외 처리가 복잡했습니다. 데이터 정확성과 화면 응답성을 함께 개선해야 했습니다." },
      { label: "IMPLEMENTATION", title: "조회·수정 흐름과 상태의 경계를 다시 정리했습니다.", body: "대시보드와 리스트의 상태 경계를 재설계하고 조회와 수정 흐름을 분리했습니다. 테이블 성능과 데이터 정확성을 개선하고, 수정 실패 시 낙관적 업데이트를 되돌리는 규칙과 모듈 구조를 정리했습니다." },
      { label: "RESULT", title: "운영 화면의 데이터 일관성과 유지보수성을 높였습니다.", body: "조회·수정 오류의 재발을 줄이고 운영 관리 품질을 개선했습니다. 화면 간 상태 책임과 모듈 경계를 명확히 해 이후 기능 추가와 운영 이슈 대응이 쉬워지도록 구성했습니다." },
    ],
  },
  {
    id: "memomi",
    index: "04",
    title: "Memomi",
    fullTitle: "Memomi · Windows 메모 앱",
    summary: "빠른 기록과 재진입에 집중한 Windows 메모 앱을 개발했습니다.",
    description: "빠르게 기록하고 다시 열어 보는 Windows 메모 앱",
    tags: ["Tauri", "React", "TypeScript"],
    previewItems: ["Windows 앱", "빠른 기록", "재진입 UX"],
    searchKeywords: ["Memomi", "메모미", "메모", "Windows", "데스크톱", "Tauri"],
    details: [
      { label: "PRODUCT", title: "빠른 기록과 재진입에 집중한 메모 앱입니다.", body: "Windows에서 메모를 빠르게 남기고 다시 확인하는 사용 흐름에 집중했습니다. 업무용 관리자 화면과는 다른, 일상적으로 사용하는 데스크톱 앱의 인터페이스를 구현한 프로젝트입니다." },
      { label: "IMPLEMENTATION", title: "Tauri와 React로 Windows 앱을 구현했습니다.", body: "React와 TypeScript로 메모 앱의 UI를 구성하고 Tauri를 사용해 Windows 데스크톱 앱으로 개발했습니다." },
    ],
  },
]
