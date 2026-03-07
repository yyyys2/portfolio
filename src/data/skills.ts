export type Skill = {
  id: string
  name: string
  proficiency: number
  category: "frontend" | "tooling" | "infra"
  competency: { ko: string; en: string }
  icon?: string
}

export const skills: Skill[] = [
  {
    id: "powerpoint",
    name: "Powerpoint",
    proficiency: 60,
    category: "tooling",
    competency: { ko: "프레젠테이션 제작", en: "Presentation design" },
    icon: "assets/images/skills/powerpoint.png",
  },
  {
    id: "html",
    name: "HTML",
    proficiency: 86,
    category: "frontend",
    competency: {
      ko: "레이아웃 · 시멘틱 · 구조 설계",
      en: "Layout, semantics, and structure design",
    },
    icon: "assets/images/skills/html.png",
  },
  {
    id: "react",
    name: "React",
    proficiency: 88,
    category: "frontend",
    competency: {
      ko: "구조화 · 컴포넌트 · 상태관리 · 실서비스",
      en: "Architecture, components, state management, production",
    },
    icon: "assets/images/skills/react.png",
  },
  {
    id: "figma",
    name: "Figma",
    proficiency: 78,
    category: "tooling",
    competency: { ko: "디자인 협업", en: "Design collaboration" },
    icon: "assets/images/skills/figma.png",
  },
  {
    id: "excel",
    name: "Excel",
    proficiency: 66,
    category: "tooling",
    competency: {
      ko: "데이터 관리, 차트 제작",
      en: "Data handling and charting",
    },
    icon: "assets/images/skills/excel.png",
  },
  {
    id: "css_scss",
    name: "CSS / SCSS",
    proficiency: 84,
    category: "frontend",
    competency: {
      ko: "반응형 · 스타일링 · 애니메이션",
      en: "Responsive styling and animation",
    },
    icon: "assets/images/skills/css-scss.svg",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    proficiency: 81,
    category: "frontend",
    competency: { ko: "스타일 시스템 · 재사용", en: "Style systems and reuse" },
    icon: "assets/images/skills/tailwind.svg",
  },
  {
    id: "nextjs",
    name: "Next.js",
    proficiency: 68,
    category: "frontend",
    competency: {
      ko: "SSR · SSG · App Router 기반 화면 설계",
      en: "SSR, SSG, and App Router based page architecture",
    },
    icon: "assets/images/skills/nextjs.svg",
  },
  {
    id: "tanstack_query",
    name: "TanStack Query",
    proficiency: 74,
    category: "frontend",
    competency: {
      ko: "서버 상태관리 · 캐싱 · 비동기 데이터 흐름 최적화",
      en: "Server-state, caching, and async data flow optimization",
    },
    icon: "assets/images/skills/tanstack-query.svg",
  },
  {
    id: "zustand",
    name: "Zustand",
    proficiency: 72,
    category: "frontend",
    competency: {
      ko: "경량 전역 상태관리 · UI 상태 구조화",
      en: "Lightweight global state and UI state architecture",
    },
    icon: "assets/images/skills/zustand.svg",
  },
  {
    id: "canva",
    name: "Canva",
    proficiency: 56,
    category: "tooling",
    competency: { ko: "발표자료", en: "Presentation assets" },
    icon: "assets/images/skills/canva.png",
  },
  {
    id: "vue",
    name: "Vue",
    proficiency: 76,
    category: "frontend",
    competency: {
      ko: "업무시스템 · Vuex · 유지보수",
      en: "Business systems, Vuex, maintenance",
    },
    icon: "assets/images/skills/vue.svg",
  },
  {
    id: "chatgpt",
    name: "Chat GPT",
    proficiency: 75,
    category: "tooling",
    competency: {
      ko: "AI활용, 가설검증",
      en: "AI utilization and hypothesis testing",
    },
  },
  {
    id: "javascript",
    name: "JavaScript",
    proficiency: 87,
    category: "frontend",
    competency: {
      ko: "ES6+ · 비동기 · 로직 구현",
      en: "ES6+, async flow, logic implementation",
    },
    icon: "assets/images/skills/javascript.svg",
  },
  {
    id: "svelte",
    name: "Svelte",
    proficiency: 58,
    category: "frontend",
    competency: {
      ko: "기본 컴포넌트 · 반응성",
      en: "Core components and reactivity",
    },
    icon: "assets/images/skills/svelte.svg",
  },
  {
    id: "typescript",
    name: "TypeScript",
    proficiency: 83,
    category: "frontend",
    competency: {
      ko: "타입 안정성 · 품질향상 · 인터페이스",
      en: "Type safety, quality improvement, interfaces",
    },
    icon: "assets/images/skills/typescript.svg",
  },
  {
    id: "git",
    name: "Git / GitLab / GitHub",
    proficiency: 85,
    category: "tooling",
    competency: {
      ko: "버전관리 · 협업 · 브랜치전략",
      en: "Version control, collaboration, branching strategy",
    },
    icon: "assets/images/skills/git.svg",
  },
  {
    id: "docker",
    name: "Docker",
    proficiency: 59,
    category: "infra",
    competency: {
      ko: "로컬환경 · 기본 빌드/런",
      en: "Local environment and base build/run",
    },
    icon: "assets/images/skills/docker.png",
  },
  {
    id: "nginx",
    name: "Nginx",
    proficiency: 58,
    category: "infra",
    competency: {
      ko: "reverse-proxy · 정적배포 · 기본설정",
      en: "Reverse proxy, static deployment, basic config",
    },
    icon: "assets/images/skills/nginx.svg",
  },
  {
    id: "accessibility",
    name: "Web Accessibility (a11y)",
    proficiency: 62,
    category: "frontend",
    competency: {
      ko: "시맨틱 마크업 · 키보드 내비게이션 · ARIA",
      en: "Semantic markup, keyboard navigation, and ARIA",
    },
    icon: "assets/images/skills/accessibility.svg",
  },
  {
    id: "performance_optimization",
    name: "Performance Optimization",
    proficiency: 71,
    category: "frontend",
    competency: {
      ko: "웹 성능 측정 · 번들 최적화 · 렌더링 개선",
      en: "Web performance audits, bundle optimization, rendering tuning",
    },
    icon: "assets/images/skills/performance.svg",
  },
]
