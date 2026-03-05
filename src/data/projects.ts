export type ProjectCategory = "platform" | "enterprise" | "finance_public"

export type Project = {
  id: string
  category: ProjectCategory
  title: { ko: string; en: string }
  oneLiner: { ko: string; en: string }
  tags: string[]
  role: { ko: string; en: string }
  stack: string[]
  problem: { ko: string; en: string }
  approach: { ko: string[]; en: string[] }
  reliability: { ko: string[]; en: string[] }
  result: { ko: string[]; en: string[] }
  image?: { src: string; note?: string }
  links?: { live?: string; github?: string }
}

export const PROJECT_CATEGORIES: {
  id: ProjectCategory
  label: { ko: string; en: string }
}[] = [
  {
    id: "platform",
    label: { ko: "Platform & Device", en: "Platform & Device" },
  },
  {
    id: "enterprise",
    label: { ko: "Enterprise / B2B", en: "Enterprise / B2B" },
  },
  {
    id: "finance_public",
    label: { ko: "Finance / Public", en: "Finance / Public" },
  },
]

export const projects: Project[] = [
  {
    id: "webos-multi",
    category: "platform",
    title: {
      ko: "스마트 디스플레이(WebOS) 기반 멀티 플랫폼 서비스 개발",
      en: "Smart Display (WebOS) Multi-platform Service",
    },
    oneLiner: {
      ko: "WebOS 환경에서 상태 흐름과 운영 안정성을 강화한 멀티 플랫폼 서비스",
      en: "A multi-platform service focused on stable state flow and operations in WebOS",
    },
    tags: ["WebOS", "React", "운영"],
    role: {
      ko: "기여도 FE 50% · 완료 후 유지보수 진행",
      en: "Contribution FE 50% · completed and under maintenance",
    },
    stack: ["React", "SCSS", "Webpack", "Redux", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "디바이스 제약과 운영 이슈로 인해 화면 전환 및 상태 관리의 일관성이 필요함",
      en: "Device constraints and ops issues required consistent navigation and state handling",
    },
    approach: {
      ko: ["상태 흐름 정리", "운영 이슈 재현/수정", "릴리즈 단위 안정화"],
      en: [
        "Refined state flow",
        "Reproduced/fixed ops issues",
        "Stabilized release units",
      ],
    },
    reliability: {
      ko: [
        "예외 케이스 점검",
        "오류 대응 루틴 표준화",
        "유지보수 대응 프로세스화",
      ],
      en: [
        "Reviewed edge cases",
        "Standardized error handling",
        "Systemized maintenance response",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "유지보수 체계 운영", "서비스 안정성 개선"],
      en: [
        "Delivered project",
        "Established maintenance workflow",
        "Improved service stability",
      ],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/live/webos-multi.png`,
      note: "실제 UI 일부 비공개",
    },
    links: { live: "https://betaprogram.lge.com/" },
  },
  {
    id: "online-education-platform",
    category: "enterprise",
    title: {
      ko: "온라인 교육 플랫폼(Web·관리자) 개발",
      en: "Online Education Platform (Web/Admin)",
    },
    oneLiner: {
      ko: "학습자/관리자 흐름을 분리해 운영 가능한 교육 플랫폼 구축",
      en: "Built an operable education platform with separated learner/admin flows",
    },
    tags: ["React", "Admin", "교육"],
    role: {
      ko: "기여도 FE 100%",
      en: "Contribution FE 100%",
    },
    stack: ["React", "SCSS", "Webpack", "Redux", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "사용자 화면과 관리자 화면의 기능 복잡도가 높아 구조화가 필요함",
      en: "High complexity across user and admin features required structured implementation",
    },
    approach: {
      ko: ["공통 컴포넌트화", "관리자 기능 분리", "상태 흐름 단순화"],
      en: [
        "Component reuse",
        "Separated admin features",
        "Simplified state flows",
      ],
    },
    reliability: {
      ko: ["입력/조회 예외 처리", "운영 시나리오 기반 테스트", "배포 안정화"],
      en: [
        "Handled input/query edge cases",
        "Ops scenario tests",
        "Stabilized deployment",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "운영 효율 향상"],
      en: ["Delivered project", "Improved operational efficiency"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/online_education_platform_admin.jpeg`,
    },
  },
  {
    id: "blockchain-payment-shopping",
    category: "finance_public",
    title: {
      ko: "블록체인 결제 기반 쇼핑 서비스(상용 B2C)",
      en: "Blockchain Payment Shopping Service (Commercial B2C)",
    },
    oneLiner: {
      ko: "결제 신뢰성이 중요한 상용 B2C 플랫폼의 결제 UX 개선",
      en: "Improved payment UX for a trust-critical commercial B2C platform",
    },
    tags: ["Vue", "결제", "B2C"],
    role: {
      ko: "기여도 FE 70%",
      en: "Contribution FE 70%",
    },
    stack: ["Vue2", "Vuetify", "Webpack", "Vuex", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "결제 실패/지연 상황에서 사용자 신뢰가 저하될 수 있음",
      en: "Payment failure/delay scenarios could reduce user trust",
    },
    approach: {
      ko: ["결제 상태별 화면 분리", "재시도 흐름 정리", "에러 메시지 일관화"],
      en: [
        "Separated UI by payment state",
        "Structured retry flow",
        "Unified error messaging",
      ],
    },
    reliability: {
      ko: ["결제 상태 추적 강화", "중복 결제 방지", "장애 대응 분기 처리"],
      en: [
        "Enhanced payment state tracking",
        "Prevented duplicate payments",
        "Handled failure branches",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "결제 흐름 안정성 향상"],
      en: ["Delivered project", "Improved payment flow stability"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/blockchain_payment_b2c.png`,
    },
  },
  {
    id: "smart-mobility-promo",
    category: "enterprise",
    title: {
      ko: "스마트 모빌리티 솔루션 홍보 웹사이트",
      en: "Smart Mobility Solution Promo Website",
    },
    oneLiner: {
      ko: "기업 기술 메시지를 전달하는 반응형 홍보 사이트 구축",
      en: "Built a responsive promo site for enterprise mobility technology",
    },
    tags: ["React", "홍보사이트", "반응형"],
    role: {
      ko: "기여도 FE 100%",
      en: "Contribution FE 100%",
    },
    stack: ["React", "SCSS", "Webpack", "Redux", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "브랜드 메시지 전달력과 페이지 성능을 동시에 확보해야 함",
      en: "Needed both strong brand storytelling and solid page performance",
    },
    approach: {
      ko: [
        "콘텐츠 중심 정보구조 설계",
        "반응형 레이아웃 최적화",
        "핵심 섹션 재사용",
      ],
      en: [
        "Designed content-first IA",
        "Optimized responsive layouts",
        "Reused key sections",
      ],
    },
    reliability: {
      ko: ["브라우저 호환성 점검", "배포 전 QA 점검", "운영 이슈 대응"],
      en: [
        "Checked browser compatibility",
        "Pre-release QA",
        "Handled ops issues",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "대외 홍보 채널 운영"],
      en: ["Delivered project", "Enabled external promotion channel"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/smart_mobility_promo_website.jpeg`,
    },
    links: { live: "http://www.soft-v2x.com/" },
  },
  {
    id: "v2x-sdk-platform",
    category: "enterprise",
    title: {
      ko: "V2X 기반 SDK 제공 플랫폼",
      en: "V2X SDK Distribution Platform",
    },
    oneLiner: {
      ko: "SDK 배포/문서/권한 관리가 가능한 관리자 플랫폼",
      en: "Admin platform for SDK distribution, docs, and permissions",
    },
    tags: ["B2B", "SDK", "관리자"],
    role: {
      ko: "기여도 FE 70%",
      en: "Contribution FE 70%",
    },
    stack: ["React", "SCSS", "Webpack", "Redux", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "버전 관리와 권한 제어 로직이 복잡해 운영 실수 가능성이 존재",
      en: "Complex version and permission logic could cause operational mistakes",
    },
    approach: {
      ko: ["권한 단계 분리", "버전 UI 표준화", "배포 프로세스 단순화"],
      en: [
        "Separated permission levels",
        "Standardized version UI",
        "Simplified release process",
      ],
    },
    reliability: {
      ko: ["검증 규칙 추가", "오류 분기 처리", "운영 체크리스트 반영"],
      en: [
        "Added validation rules",
        "Handled error branches",
        "Applied ops checklists",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "배포 안정성 향상"],
      en: ["Delivered project", "Improved release stability"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/v2x_sdk_platform.jpeg`,
    },
    links: { live: "http://sdk.soft-v2x.com" },
  },
  {
    id: "mobility-rewards-admin",
    category: "enterprise",
    title: {
      ko: "모빌리티 리워드 서비스(모바일 앱·관리자)",
      en: "Mobility Rewards Service (Mobile/Admin)",
    },
    oneLiner: {
      ko: "리워드 적립/운영 흐름을 관리 가능한 서비스 구조로 구현",
      en: "Implemented manageable reward accumulation and operation flows",
    },
    tags: ["React", "Admin", "리워드"],
    role: {
      ko: "기여도 FE 100%",
      en: "Contribution FE 100%",
    },
    stack: ["React", "SCSS", "Webpack", "Redux", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "이벤트/적립/관리자 처리 로직이 분산되어 운영 복잡도가 높음",
      en: "Event/reward/admin logic was fragmented and operationally complex",
    },
    approach: {
      ko: [
        "기능 흐름 단순화",
        "관리자 액션 중심 UI 구성",
        "상태 동기화 구조화",
      ],
      en: [
        "Simplified functional flows",
        "Admin action-centered UI",
        "Structured state synchronization",
      ],
    },
    reliability: {
      ko: ["누락/중복 처리 방지", "운영 로그 포인트 정리", "배포 후 모니터링"],
      en: [
        "Prevented missing/duplicate handling",
        "Defined ops logs",
        "Post-release monitoring",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "운영 처리 효율 개선"],
      en: ["Delivered project", "Improved operational efficiency"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/mobility_rewards_service_admin.jpeg`,
    },
  },
  {
    id: "v2x-control-community",
    category: "enterprise",
    title: {
      ko: "V2X 관제/커뮤니티 관리 시스템",
      en: "V2X Control & Community Management System",
    },
    oneLiner: {
      ko: "관제와 커뮤니티 운영 기능을 통합한 관리 시스템 구현",
      en: "Implemented an integrated control and community admin system",
    },
    tags: ["React", "관제", "B2B"],
    role: {
      ko: "기여도 FE 100%",
      en: "Contribution FE 100%",
    },
    stack: ["React", "SCSS", "Webpack", "Redux", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "실시간 관제 화면과 커뮤니티 관리 기능을 한 화면에서 다뤄야 함",
      en: "Needed to handle real-time control and community admin in one system",
    },
    approach: {
      ko: [
        "도메인별 화면 분리",
        "관리 기능 우선 UI 설계",
        "운영 중심 상태 관리",
      ],
      en: [
        "Separated domain screens",
        "Admin-first UI design",
        "Ops-oriented state management",
      ],
    },
    reliability: {
      ko: ["예외 흐름 분기", "운영 시나리오 점검", "변경 영향 최소화 배포"],
      en: [
        "Handled exception branches",
        "Reviewed ops scenarios",
        "Minimized release impact",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "운영 안정성 확보"],
      en: ["Delivered project", "Secured operational stability"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/v2x_control_community_system.jpeg`,
    },
  },
  {
    id: "daegu-transport-system",
    category: "finance_public",
    title: {
      ko: "대구광역시 어르신 통합 무임 교통카드 발급/관리 시스템",
      en: "Daegu Senior Transit Card Issuance/Management System",
    },
    oneLiner: {
      ko: "공공 업무 특성에 맞춰 검증/발급 안정성을 강화한 시스템",
      en: "A public-service system focused on strong validation and issuance stability",
    },
    tags: ["공공", "Vue", "검증"],
    role: {
      ko: "기여도 FE 100%",
      en: "Contribution FE 100%",
    },
    stack: [
      "Vue",
      "Vite",
      "SCSS",
      "Vuetify",
      "Vuex",
      "ESLint",
      "Prettier",
      "Yarn",
    ],
    problem: {
      ko: "공공 발급 프로세스에서 입력 오류와 중복 처리 리스크가 큼",
      en: "Public issuance process had high risk of input errors and duplicates",
    },
    approach: {
      ko: ["입력 검증 강화", "상태 전이 명확화", "관리자 업무 흐름 최적화"],
      en: [
        "Strengthened input validation",
        "Clarified state transitions",
        "Optimized admin workflows",
      ],
    },
    reliability: {
      ko: [
        "오류 메시지 체계화",
        "재처리 시나리오 정리",
        "운영 체크 포인트 정의",
      ],
      en: [
        "Systemized error messages",
        "Defined reprocess scenarios",
        "Set operations checkpoints",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "발급 업무 안정성 향상"],
      en: ["Delivered project", "Improved issuance stability"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/daegu_senior_transit_card_system.png`,
    },
  },
  {
    id: "finance-renewal",
    category: "finance_public",
    title: {
      ko: "IM유페이 금융 서비스 홈페이지 리뉴얼 및 관리자 개발",
      en: "IMUPAY Finance Homepage Renewal and Admin Development",
    },
    oneLiner: {
      ko: "금융 도메인 UX 신뢰성과 관리자 운영성을 강화한 리뉴얼",
      en: "Renewal focused on trustful UX and operational admin in finance",
    },
    tags: ["React", "TypeScript", "금융"],
    role: {
      ko: "기여도 FE 100%",
      en: "Contribution FE 100%",
    },
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Styled Components",
      "Zustand",
      "ESLint",
      "Prettier",
      "Git",
    ],
    problem: {
      ko: "금융 서비스에서 입력/조회 오류 발생 시 사용자 신뢰가 크게 저하됨",
      en: "Input/query errors in finance could significantly hurt user trust",
    },
    approach: {
      ko: ["검증 규칙 체계화", "상태/에러 UI 정리", "관리자 화면 동선 개선"],
      en: [
        "Systemized validation rules",
        "Refined state/error UI",
        "Improved admin flow",
      ],
    },
    reliability: {
      ko: ["오류 분기 세분화", "중복 요청 방지", "운영 로그 포인트 정리"],
      en: [
        "Detailed error branches",
        "Prevented duplicate requests",
        "Organized operations logs",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "금융 UX 안정성 향상"],
      en: ["Delivered project", "Improved finance UX stability"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/live/imupay.png`,
    },
    links: { live: "https://www.imupay.co.kr" },
  },
  {
    id: "cloud-hospitality-signage",
    category: "enterprise",
    title: {
      ko: "클라우드 기반 호스피탈리티 사이니지 관리 솔루션 고도화",
      en: "Cloud-based Hospitality Signage Management Enhancement",
    },
    oneLiner: {
      ko: "대규모 관리 화면의 데이터 정확성과 운영 효율을 높인 고도화",
      en: "Enhancement focused on data accuracy and operational efficiency at scale",
    },
    tags: ["React", "TanStack", "Zustand"],
    role: {
      ko: "기여도 FE 40%",
      en: "Contribution FE 40%",
    },
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "module CSS",
      "Zustand",
      "Zod",
      "TanStack Query",
      "TanStack Table",
      "TanStack Router",
      "ESLint",
      "Prettier",
      "Git",
    ],
    problem: {
      ko: "데이터량이 큰 관리 화면에서 테이블/필터/상태 흐름 복잡도가 높음",
      en: "Large data admin screens had complex table/filter/state flows",
    },
    approach: {
      ko: ["쿼리/테이블 구조 분리", "타입 검증 강화", "라우팅 기반 화면 분할"],
      en: [
        "Separated query/table concerns",
        "Strengthened type validation",
        "Split screens by routing",
      ],
    },
    reliability: {
      ko: ["데이터 유효성 검증", "필터/정렬 안정화", "운영 이슈 추적성 강화"],
      en: [
        "Validated data integrity",
        "Stabilized filter/sort",
        "Improved issue traceability",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "관리자 생산성 향상"],
      en: ["Delivered project", "Improved admin productivity"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/cloud_hospitality_signage_solution.jpeg`,
    },
    links: { live: "https://lgbusinesscloud.com/solutions/procentric/" },
  },
  {
    id: "mobile-shopping-webos",
    category: "platform",
    title: {
      ko: "모바일 쇼핑 플랫폼(WebOS 연계)",
      en: "Mobile Shopping Platform Integrated with WebOS",
    },
    oneLiner: {
      ko: "모바일 쇼핑 경험을 WebOS 서비스와 연계한 크로스 채널 구현",
      en: "Cross-channel implementation connecting mobile shopping with WebOS services",
    },
    tags: ["JSP", "Spring Boot", "WebOS"],
    role: {
      ko: "기여도 FE 20% · 완료 후 유지보수 진행",
      en: "Contribution FE 20% · completed and under maintenance",
    },
    stack: ["JSP", "CSS", "Spring Boot", "Git"],
    problem: {
      ko: "모바일과 TV 채널 간 흐름 연결 시 상태 전달의 일관성이 필요함",
      en: "Consistent state handoff was needed between mobile and TV channels",
    },
    approach: {
      ko: ["핵심 사용자 흐름 연결", "페이지 구조 단순화", "연동 포인트 정리"],
      en: [
        "Connected key user journeys",
        "Simplified page structure",
        "Organized integration points",
      ],
    },
    reliability: {
      ko: ["연동 시나리오 점검", "유지보수 대응", "운영 오류 최소화"],
      en: [
        "Reviewed integration scenarios",
        "Maintained service",
        "Minimized operational errors",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "유지보수 진행"],
      en: ["Delivered project", "Ongoing maintenance"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/live/shoptime.png`,
    },
    links: { live: "https://m.shoptime.lgappstv.com/home.jsp?cntryCd=US" },
  },
  {
    id: "digital-signage-management",
    category: "enterprise",
    title: {
      ko: "디지털 사이니지 통합 관리 솔루션 고도화",
      en: "Digital Signage Integrated Management Enhancement",
    },
    oneLiner: {
      ko: "사이니지 운영 관리의 데이터 정확성과 유지보수성을 높인 개선",
      en: "Improvement focused on data accuracy and maintainability in signage operations",
    },
    tags: ["React", "TypeScript", "Admin"],
    role: {
      ko: "기여도 FE 40%",
      en: "Contribution FE 40%",
    },
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "module CSS",
      "Zustand",
      "Zod",
      "TanStack Query",
      "TanStack Table",
      "TanStack Router",
      "ESLint",
      "Prettier",
      "Git",
    ],
    problem: {
      ko: "대시보드와 리스트 화면에서 데이터 동기화와 예외 처리가 복잡함",
      en: "Dashboard/list screens had complex synchronization and edge handling",
    },
    approach: {
      ko: ["상태 경계 재정의", "테이블 성능/정확성 개선", "모듈화 강화"],
      en: [
        "Redefined state boundaries",
        "Improved table performance/accuracy",
        "Strengthened modularization",
      ],
    },
    reliability: {
      ko: ["조회/수정 흐름 분리", "검증 로직 강화", "운영 대응 시간 단축"],
      en: [
        "Separated read/update flows",
        "Strengthened validation",
        "Reduced response time",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "운영 관리 품질 향상"],
      en: ["Delivered project", "Improved operations quality"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/digital_signage_management_solution.jpeg`,
    },
    links: { live: "https://lgbusinesscloud.com/solutions/supersign/" },
  },
  {
    id: "energy-b2b-portal",
    category: "enterprise",
    title: {
      ko: "에너지 관리 기업용 B2B 파트너 포털 퍼블리싱",
      en: "Energy Management B2B Partner Portal Publishing",
    },
    oneLiner: {
      ko: "기업용 파트너 포털의 반응형 퍼블리싱과 화면 품질 확보",
      en: "Responsive publishing and UI quality for an enterprise partner portal",
    },
    tags: ["Next.js", "Tailwind", "Publishing"],
    role: {
      ko: "기여도 퍼블리싱 100%",
      en: "Contribution Publishing 100%",
    },
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
    ],
    problem: {
      ko: "복수 화면 템플릿을 일관된 기준으로 퍼블리싱해야 함",
      en: "Multiple page templates required consistent publishing standards",
    },
    approach: {
      ko: ["컴포넌트 단위 퍼블리싱", "반응형 우선 구현", "디자인 시스템 반영"],
      en: [
        "Component-based publishing",
        "Responsive-first implementation",
        "Applied design system",
      ],
    },
    reliability: {
      ko: ["크로스브라우저 점검", "접근성 기본 준수", "QA 피드백 반영"],
      en: [
        "Cross-browser checks",
        "Basic accessibility compliance",
        "Integrated QA feedback",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "퍼블리싱 품질 확보"],
      en: ["Delivered project", "Secured publishing quality"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/energy_b2b_partner_portal.png`,
    },
  },
  {
    id: "tv-overlay-shopping",
    category: "platform",
    title: {
      ko: "TV Overlay 쇼핑·푸드 추천 애플리케이션",
      en: "TV Overlay Shopping & Food Recommendation App",
    },
    oneLiner: {
      ko: "TV 시청 중 오버레이 기반 상호작용 UX를 구현한 서비스",
      en: "An overlay-based interactive UX for TV viewing scenarios",
    },
    tags: ["Svelte", "WebOS", "Overlay"],
    role: {
      ko: "기여도 FE 20%",
      en: "Contribution FE 20%",
    },
    stack: ["Svelte", "SCSS", "TypeScript", "WebOS"],
    problem: {
      ko: "TV 시청 맥락을 해치지 않으면서 추천/쇼핑 인터랙션을 제공해야 함",
      en: "Needed shopping/recommendation interactions without disrupting TV viewing",
    },
    approach: {
      ko: ["오버레이 상태 분리", "포커스 이동 설계", "추천 데이터 비동기 처리"],
      en: [
        "Separated overlay states",
        "Designed focus navigation",
        "Handled async recommendation data",
      ],
    },
    reliability: {
      ko: ["포커스 유실 방지", "네트워크 실패 대비", "전환 안정성 확보"],
      en: [
        "Prevented focus loss",
        "Handled network failure",
        "Secured transition stability",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "TV 환경 UX 완성도 개선"],
      en: ["Delivered project", "Improved UX quality on TV environment"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/tv_overlay_shopping_food_app.jpeg`,
    },
  },
  {
    id: "ai-agent",
    category: "enterprise",
    title: {
      ko: "기업용 채팅형 AI Agent 플랫폼",
      en: "Enterprise Chat-based AI Agent Platform",
    },
    oneLiner: {
      ko: "복잡한 권한/상태 흐름을 예측 가능하게 구조화한 AI 운영 플랫폼",
      en: "AI operations platform with predictable permission/state architecture",
    },
    tags: ["AI", "React", "B2B"],
    role: {
      ko: "기여도 FE 80%",
      en: "Contribution FE 80%",
    },
    stack: [
      "React",
      "TypeScript",
      "module CSS",
      "Vite",
      "React Router",
      "React Query",
      "Git",
      "Git CICD",
    ],
    problem: {
      ko: "비동기 응답/권한 분기/운영 요구가 많아 상태 일관성이 깨지기 쉬움",
      en: "Async responses, permission branches, and ops demands made state consistency difficult",
    },
    approach: {
      ko: [
        "권한/상태 경계 명확화",
        "예외 흐름 가시화",
        "운영 시나리오 우선 설계",
      ],
      en: [
        "Clarified permission/state boundaries",
        "Visualized exception flows",
        "Designed for ops scenarios first",
      ],
    },
    reliability: {
      ko: ["액션 로그 포인트 설계", "재시도/복구 UX 정리", "배포 검증 강화"],
      en: [
        "Designed action log points",
        "Refined retry/recovery UX",
        "Strengthened release validation",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "운영 대응 효율 및 UI 신뢰도 향상"],
      en: ["Delivered project", "Improved ops efficiency and UI trust"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/enterprise_ai_agent_platform.jpeg`,
    },
  },
  {
    id: "smart-display-ai",
    category: "platform",
    title: {
      ko: "스마트 디스플레이(WebOS) 기반 AI 스타일링·추천 시스템 연동",
      en: "WebOS Smart Display AI Styling/Recommendation Integration",
    },
    oneLiner: {
      ko: "AI 추천 결과를 디바이스 UI와 안정적으로 연결한 연동 개발",
      en: "Integrated AI recommendations into device UI with stable behavior",
    },
    tags: ["WebOS", "AI", "연동"],
    role: {
      ko: "기여도 FE 50%",
      en: "Contribution FE 50%",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    problem: {
      ko: "AI 결과 변화가 잦아 UI 동기화와 사용자 인지 일관성이 필요함",
      en: "Frequent AI updates required synchronized UI and consistent user perception",
    },
    approach: {
      ko: [
        "데이터 매핑 규칙 정리",
        "UI 반영 타이밍 제어",
        "실패 시 fallback 제공",
      ],
      en: [
        "Defined data mapping rules",
        "Controlled update timing",
        "Provided fallback on failure",
      ],
    },
    reliability: {
      ko: ["데이터 유효성 검증", "로딩/빈 상태 분리", "연동 에러 대응 분기"],
      en: [
        "Validated data integrity",
        "Separated loading/empty states",
        "Handled integration errors",
      ],
    },
    result: {
      ko: ["프로젝트 완료", "AI 추천 연동 안정성 향상"],
      en: ["Delivered project", "Improved AI integration stability"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/webos_ai_styling_recommendation.jpeg`,
    },
  },
]
