import { selectedProjects } from "@/data/selectedProjects"

export type ArchiveProject = {
  id: string
  title: string
  summary: string
  role: string
  stack: string[]
}

// Preserve the original portfolio entries; filter the shared selection below.
const archiveProjects: ArchiveProject[] = [
  { id: "webos-multi", title: "WebOS 스마트 디스플레이 서비스 개발", summary: "사용자·관리자 웹과 WebOS TV 앱을 함께 개발·운영한 디바이스 연동 서비스", role: "프론트엔드 개발 및 유지보수", stack: ["React", "Redux", "SCSS", "Webpack"] },
  { id: "online-education-platform", title: "온라인 교육 플랫폼(웹/관리자) 개발", summary: "학습자와 관리자 화면을 나눠 운영하기 쉽게 만든 교육 서비스", role: "프론트엔드 개발", stack: ["React", "SCSS", "Webpack"] },
  { id: "blockchain-payment-shopping", title: "블록체인 결제 쇼핑 서비스(B2C)", summary: "결제 과정에서 사용자가 헷갈리지 않도록 흐름을 정리한 서비스", role: "프론트엔드 개발", stack: ["Vue 2", "Vuetify", "Vuex"] },
  { id: "smart-mobility-promo", title: "스마트 모빌리티 홍보 웹사이트", summary: "기술 내용을 이해하기 쉽게 전달하도록 만든 반응형 홍보 사이트", role: "프론트엔드 개발", stack: ["React", "SCSS", "Webpack"] },
  { id: "v2x-sdk-platform", title: "V2X SDK 운영 관리자 플랫폼", summary: "SDK 버전과 권한을 운영자가 쉽게 관리할 수 있게 만든 플랫폼", role: "프론트엔드 개발", stack: ["React", "SCSS", "Webpack"] },
  { id: "mobility-rewards-admin", title: "모빌리티 리워드 서비스(앱/관리자)", summary: "리워드 적립과 운영 업무를 한 흐름으로 정리한 서비스", role: "프론트엔드 개발", stack: ["React", "SCSS", "Webpack"] },
  { id: "v2x-control-community", title: "V2X 관제/커뮤니티 관리 시스템", summary: "관제 기능과 커뮤니티 운영 기능을 함께 관리하는 시스템", role: "프론트엔드 개발", stack: ["React", "SCSS", "Webpack"] },
  { id: "daegu-transport-system", title: "대구 어르신 무임 교통카드 발급/관리 시스템", summary: "교통카드 발급 화면과 관리자 시스템을 개발한 공공 프로젝트", role: "프론트엔드 개발", stack: ["Vue", "Vuetify", "Vuex"] },
  { id: "finance-renewal", title: "IM유페이 금융 서비스 리뉴얼/관리자 개발", summary: "금융 서비스 홈페이지 고도화와 관리자 시스템 신규 개발", role: "프론트엔드 개발", stack: ["React", "TypeScript"] },
  { id: "cloud-hospitality-signage", title: "클라우드 호스피탈리티 사이니지 솔루션 고도화", summary: "대용량 데이터 관리자 화면의 정확성과 속도를 개선한 프로젝트", role: "프론트엔드 개발", stack: ["React", "TypeScript", "TanStack Query"] },
  { id: "mobile-shopping-webos", title: "모바일 쇼핑 플랫폼(WebOS 연계)", summary: "모바일 쇼핑 흐름을 TV와 연결한 서비스", role: "프론트엔드 개발 및 유지보수", stack: ["JSP", "CSS", "Spring Boot"] },
  { id: "digital-signage-management", title: "디지털 사이니지 통합 관리 솔루션 고도화", summary: "관리 화면의 데이터 동기화와 성능을 개선한 프로젝트", role: "프론트엔드 개발", stack: ["React", "TypeScript", "TanStack Query"] },
  { id: "energy-b2b-portal", title: "에너지 관리 B2B 파트너 포털 퍼블리싱", summary: "여러 템플릿 화면을 일관된 품질로 퍼블리싱한 프로젝트", role: "퍼블리싱", stack: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { id: "tv-overlay-shopping", title: "TV 오버레이 쇼핑/푸드 추천 앱", summary: "TV 시청 중에도 사용할 수 있는 오버레이 UX를 구현한 프로젝트", role: "프론트엔드 개발", stack: ["Svelte", "TypeScript", "WebOS"] },
  { id: "smart-display-ai", title: "WebOS AI 스타일링/추천 연동 개발", summary: "AI 추천 결과를 디바이스 UI에 연결한 프로젝트", role: "프론트엔드 개발", stack: ["HTML", "CSS", "JavaScript"] },
]

const selectedProjectIds = new Set<string>(selectedProjects.map((project) => project.id))
export const projectArchive = archiveProjects.filter((project) => !selectedProjectIds.has(project.id))
