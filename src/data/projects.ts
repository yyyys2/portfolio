import type { Project, ProjectCategoryMeta } from "./types"
export type { Project, ProjectCategory } from "./types"

export const PROJECT_CATEGORIES: ProjectCategoryMeta[] = [
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
      ko: "WebOS 스마트 디스플레이 서비스 개발",
      en: "Smart Display (WebOS) Multi-platform Service",
    },
    oneLiner: {
      ko: "WebOS 환경에서 여러 화면이 안정적으로 동작하도록 만든 서비스",
      en: "A multi-platform service focused on stable state flow and operations in WebOS",
    },
    details: {
      ko: "리모컨으로 조작하는 환경이라 포커스가 조금만 틀어져도 사용이 어려웠습니다. 화면 전환 규칙과 상태 흐름을 단순하게 다시 정리해 사용 중 끊김을 줄였습니다. 배포도 작은 단위로 나눠 운영 중 문제를 빠르게 확인하고 수정했습니다.",
      en: "In remote-control UX, even minor focus issues are critical, so I redesigned navigation rules and state boundaries first. I prioritized operability over feature speed, making incidents reproducible and easier to trace. With small release slices, risk stayed controlled and the service became maintainable while still evolving.",
    },
    tags: ["WebOS", "React", "운영"],
    role: {
      ko: "기여도 FE 50% · 완료 후 유지보수 진행",
      en: "Contribution FE 50% · completed and under maintenance",
    },
    stack: ["React", "SCSS", "Webpack", "Redux", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "WebOS 환경 제약 때문에 화면 전환과 상태 흐름이 자주 꼬이는 문제가 있었음",
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
      ko: ["유지보수 체계 운영", "서비스 안정성 개선", "운영 이슈 대응 시간 단축"],
      en: ["Established maintenance workflow", "Improved service stability", "Reduced issue response time in operations"],
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
      ko: "온라인 교육 플랫폼(웹/관리자) 개발",
      en: "Online Education Platform (Web/Admin)",
    },
    oneLiner: {
      ko: "학습자와 관리자 화면을 나눠 운영하기 쉽게 만든 교육 서비스",
      en: "Built an operable education platform with separated learner/admin flows",
    },
    details: {
      ko: "학습자 화면과 관리자 화면 요구사항이 섞이면서 기능이 복잡해졌습니다. 역할별 화면 책임을 나누고 공통 컴포넌트를 정리해 유지보수가 쉬워지도록 만들었습니다. 실제 운영에서 자주 생기는 입력/조회 오류도 먼저 점검해 안정성을 높였습니다.",
      en: "Learner and admin flows evolved at different speeds, and a shared code path became a bottleneck. I split ownership by role and rebuilt common UI as reusable units to reduce change collisions. Operationally, I focused on preventing real support-triggering cases such as missing data, permission mistakes, and search edge cases.",
    },
    tags: ["React", "Admin", "교육"],
    role: {
      ko: "기여도 FE 100%",
      en: "Contribution FE 100%",
    },
    stack: ["React", "SCSS", "Webpack", "Redux", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "학습자/관리자 기능이 한 구조에 섞여 화면 복잡도가 높았음",
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
      ko: ["운영 효율 향상", "관리자 작업 시간 단축"],
      en: ["Improved operational efficiency", "Reduced admin task time"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/online_education_platform_admin.jpeg`,
    },
  },
  {
    id: "blockchain-payment-shopping",
    category: "finance_public",
    title: {
      ko: "블록체인 결제 쇼핑 서비스(B2C)",
      en: "Blockchain Payment Shopping Service (Commercial B2C)",
    },
    oneLiner: {
      ko: "결제 과정에서 사용자가 헷갈리지 않도록 흐름을 정리한 서비스",
      en: "Improved payment UX for a trust-critical commercial B2C platform",
    },
    details: {
      ko: "결제 성공, 실패, 지연 상태가 비슷하게 보여 사용자가 불안해하는 문제가 있었습니다. 상태별 화면과 안내 문구를 분리해 현재 상황을 쉽게 이해할 수 있게 바꿨습니다. 특히 중복 결제 가능성이 있는 구간은 별도 처리해 실사용 오류를 줄였습니다.",
      en: "The key here was reducing payment anxiety, not just processing transactions. I separated pending, failed, and retry states with distinct UX tone and tightened guidance copy to prevent misinterpretation. High-risk duplicate-payment paths were explicitly gated, lowering real-world failure risk.",
    },
    tags: ["Vue", "결제", "B2C"],
    role: {
      ko: "기여도 FE 70%",
      en: "Contribution FE 70%",
    },
    stack: ["Vue2", "Vuetify", "Webpack", "Vuex", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "결제 실패/지연 시 사용자 입장에서 현재 상태를 파악하기 어려웠음",
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
      ko: ["결제 흐름 안정성 향상", "중복 결제 관련 문의 감소"],
      en: ["Improved payment flow stability", "Reduced support cases related to duplicate payments"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/blockchain_payment_b2c.png`,
    },
  },
  {
    id: "smart-mobility-promo",
    category: "enterprise",
    title: {
      ko: "스마트 모빌리티 홍보 웹사이트",
      en: "Smart Mobility Solution Promo Website",
    },
    oneLiner: {
      ko: "기술 내용을 이해하기 쉽게 전달하도록 만든 반응형 홍보 사이트",
      en: "Built a responsive promo site for enterprise mobility technology",
    },
    details: {
      ko: "기술 설명이 많은 페이지라 사용자 시선 흐름에 맞춰 콘텐츠 순서를 다시 잡았습니다. 반복되는 섹션은 공통 블록으로 만들어 페이지 일관성을 맞췄습니다. 브라우저별 표시 차이도 배포 전에 점검해 공개 품질을 높였습니다.",
      en: "For a promo site, message rhythm mattered more than feature density, so I rebuilt layouts around reading flow and visual attention. Core sections were turned into reusable blocks so content swaps would not break structure. On responsive screens, I balanced readability and visual impact, then tuned browser-level rendering differences for public quality.",
    },
    tags: ["React", "홍보사이트", "반응형"],
    role: {
      ko: "기여도 FE 100%",
      en: "Contribution FE 100%",
    },
    stack: ["React", "SCSS", "Webpack", "Redux", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "브랜드 메시지 전달력과 반응형 화면 품질을 동시에 챙겨야 했음",
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
      ko: ["대외 홍보 채널 운영", "반응형 화면 완성도 향상"],
      en: ["Enabled external promotion channel", "Improved responsive UI quality"],
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
      ko: "V2X SDK 운영 관리자 플랫폼",
      en: "V2X SDK Distribution Platform",
    },
    oneLiner: {
      ko: "SDK 버전과 권한을 운영자가 쉽게 관리할 수 있게 만든 플랫폼",
      en: "Admin platform for SDK distribution, docs, and permissions",
    },
    details: {
      ko: "버전 관리와 권한 관리가 함께 들어가 실수 가능성이 큰 화면이었습니다. 단계별 작업 흐름으로 바꾸고 검증 실패 안내를 명확히 해 운영자가 바로 이해할 수 있게 했습니다. 반복 업무에 필요한 체크 기준도 화면에 반영했습니다.",
      en: "In an SDK platform, one release mistake can have broad impact, so I redesigned admin actions as staged flows. UI exposure was segmented by permission level to block unnecessary entry points, and validation failures were made immediately understandable. I aligned docs, versioning, and release paths into one coherent operational route.",
    },
    tags: ["B2B", "SDK", "관리자"],
    role: {
      ko: "기여도 FE 70%",
      en: "Contribution FE 70%",
    },
    stack: ["React", "SCSS", "Webpack", "Redux", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "버전/권한 로직이 복잡해 운영 중 실수 위험이 높았음",
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
      ko: ["배포 안정성 향상", "운영 실수 가능성 감소"],
      en: ["Improved release stability", "Reduced operational mistakes"],
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
      ko: "모빌리티 리워드 서비스(앱/관리자)",
      en: "Mobility Rewards Service (Mobile/Admin)",
    },
    oneLiner: {
      ko: "리워드 적립과 운영 업무를 한 흐름으로 정리한 서비스",
      en: "Implemented manageable reward accumulation and operation flows",
    },
    details: {
      ko: "이벤트, 적립, 운영 처리 흐름이 분리돼 있어 관리자 업무가 번거로웠습니다. 자주 쓰는 액션을 기준으로 화면 동선을 다시 구성하고 상태 동기화 규칙을 정리했습니다. 배포 후에는 모니터링 포인트를 잡아 문제 확인 시간을 줄였습니다.",
      en: "Reward products change policy frequently, so admin readability was critical. I surfaced high-frequency actions and reconnected event, accrual, and settlement flows into one continuous experience. Synchronization rules were made explicit at risk boundaries where omissions and duplicates typically occur.",
    },
    tags: ["React", "Admin", "리워드"],
    role: {
      ko: "기여도 FE 100%",
      en: "Contribution FE 100%",
    },
    stack: ["React", "SCSS", "Webpack", "Redux", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "이벤트/적립/관리자 처리 흐름이 분리돼 운영 효율이 낮았음",
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
      ko: ["운영 처리 효율 개선", "이벤트/적립 처리 누락 감소"],
      en: ["Improved operational efficiency", "Reduced missing cases in event/reward processing"],
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
      ko: "관제 기능과 커뮤니티 운영 기능을 함께 관리하는 시스템",
      en: "Implemented an integrated control and community admin system",
    },
    details: {
      ko: "실시간 관제와 커뮤니티 운영 화면이 한 곳에 섞여 관리가 어려웠습니다. 도메인별 화면을 분리하고 주요 관리자 액션을 짧은 경로에 배치했습니다. 영향이 큰 변경은 나눠 배포해 운영 중 리스크를 줄였습니다.",
      en: "Control and community workflows had very different contexts, and mixing them created cognitive load. I separated real-time monitoring from operations handling, then shortened paths to admin-priority actions. Features requiring immediate operational response were released in smaller units for safer adoption.",
    },
    tags: ["React", "관제", "B2B"],
    role: {
      ko: "기여도 FE 100%",
      en: "Contribution FE 100%",
    },
    stack: ["React", "SCSS", "Webpack", "Redux", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "실시간 관제와 운영 기능이 한 화면에서 충돌하며 복잡도가 높았음",
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
      ko: ["운영 안정성 확보", "관리자 핵심 액션 접근성 향상"],
      en: ["Secured operational stability", "Improved accessibility to key admin actions"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/v2x_control_community_system.jpeg`,
    },
  },
  {
    id: "daegu-transport-system",
    category: "finance_public",
    title: {
      ko: "대구 어르신 무임 교통카드 발급/관리 시스템",
      en: "Daegu Senior Transit Card Issuance/Management System",
    },
    oneLiner: {
      ko: "공공 발급 업무에서 오류를 줄이도록 만든 관리자 시스템",
      en: "A public-service system focused on strong validation and issuance stability",
    },
    details: {
      ko: "공공 업무 특성상 빠른 처리보다 정확한 발급 절차가 중요했습니다. 상태 단계를 분명하게 표시해 담당자가 현재 진행 상황을 쉽게 확인할 수 있게 했습니다. 재처리/반려 같은 실제 업무 상황도 초기에 함께 설계했습니다.",
      en: "In public systems, procedural accuracy matters more than speed, so validation and stage signaling were designed strictly. State transitions were made explicit so operators could identify current stage and next action immediately, including reject/reprocess paths from the start. Operations checkpoints were aligned with field workflows for long-term stability.",
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
      ko: "입력 오류나 중복 처리가 발생하면 발급 업무에 큰 영향이 생겼음",
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
      ko: ["발급 업무 안정성 향상", "재처리 업무 부담 감소"],
      en: ["Improved issuance stability", "Reduced workload in reprocessing tasks"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/daegu_senior_transit_card_system.png`,
    },
  },
  {
    id: "finance-renewal",
    category: "finance_public",
    title: {
      ko: "IM유페이 금융 서비스 리뉴얼/관리자 개발",
      en: "IMUPAY Finance Homepage Renewal and Admin Development",
    },
    oneLiner: {
      ko: "금융 서비스에서 신뢰감을 높이기 위해 UX를 개선한 프로젝트",
      en: "Renewal focused on trustful UX and operational admin in finance",
    },
    details: {
      ko: "금융 화면은 작은 오류도 사용자 신뢰에 영향을 주기 때문에 상태/오류 안내를 먼저 정리했습니다. 사용자 화면과 관리자 화면 모두 실제 사용 순서에 맞게 흐름을 재구성했습니다. 운영 로그 기준도 정리해 장애 대응 속도를 높였습니다.",
      en: "The renewal goal was not cosmetic refresh but rebuilding a trust-oriented finance experience. On user screens, error and guidance messaging was standardized to reduce interpretation burden. On admin screens, actions were reorganized to match real operational order, and logging points were refined for faster incident response.",
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
      ko: "입력/조회 오류가 발생할 때 사용자 신뢰가 크게 떨어지는 문제가 있었음",
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
      ko: ["금융 UX 안정성 향상", "오류 상황에서 사용자 이탈 감소"],
      en: ["Improved finance UX stability", "Reduced user drop-off in error scenarios"],
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
      ko: "클라우드 호스피탈리티 사이니지 솔루션 고도화",
      en: "Cloud-based Hospitality Signage Management Enhancement",
    },
    oneLiner: {
      ko: "대용량 데이터 관리자 화면의 정확성과 속도를 개선한 프로젝트",
      en: "Enhancement focused on data accuracy and operational efficiency at scale",
    },
    details: {
      ko: "테이블 데이터가 많고 필터가 복잡해 조회 속도와 정확도 문제가 있었습니다. 쿼리와 테이블 책임을 분리해 변경 영향을 줄이고 타입 검증으로 데이터 불일치를 줄였습니다. 운영 이슈가 생겼을 때 추적하기 쉽도록 구조도 함께 정리했습니다.",
      en: "This enhancement focused less on new features and more on making complex data screens manageable. I separated query and table responsibilities to make change impact predictable, and stronger type validation prevented runtime mismatches early. Responsiveness was tuned for real usage patterns where filtering, sorting, and pagination are combined.",
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
      ko: "대용량 테이블/필터 화면에서 데이터 처리 복잡도가 높았음",
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
      ko: ["관리자 생산성 향상", "대용량 조회 화면 응답성 개선"],
      en: ["Improved admin productivity", "Improved responsiveness in large-data views"],
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
      ko: "모바일 쇼핑 흐름을 TV(WebOS)와 연결한 서비스",
      en: "Cross-channel implementation connecting mobile shopping with WebOS services",
    },
    details: {
      ko: "모바일에서 시작한 흐름이 TV로 넘어갈 때 상태가 끊기는 문제가 자주 있었습니다. 채널 간 상태 전달 규칙을 단순하게 정리해 사용자가 맥락을 잃지 않도록 했습니다. 유지보수 단계에서는 반복 오류를 먼저 줄이는 데 집중했습니다.",
      en: "Cross-channel transitions between mobile purchase flow and TV experience often broke context, so I first formalized state handoff rules. Transition steps were simplified so users could feel a consistent journey regardless of where they started. During maintenance, I prioritized recurring issues to reduce operational overhead.",
    },
    tags: ["JSP", "Spring Boot", "WebOS"],
    role: {
      ko: "기여도 FE 20% · 완료 후 유지보수 진행",
      en: "Contribution FE 20% · completed and under maintenance",
    },
    stack: ["JSP", "CSS", "Spring Boot", "Git"],
    problem: {
      ko: "모바일과 TV 채널 전환 시 상태 전달이 일관되지 않았음",
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
      ko: ["유지보수 진행", "모바일-TV 전환 안정성 개선"],
      en: ["Ongoing maintenance", "Improved mobile-to-TV transition stability"],
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
      ko: "운영자가 자주 쓰는 관리 화면의 동기화와 성능을 개선한 프로젝트",
      en: "Improvement focused on data accuracy and maintainability in signage operations",
    },
    details: {
      ko: "대시보드와 리스트 화면 사이에서 데이터가 어긋나는 문제가 있었습니다. 조회와 수정 흐름을 분리하고 상태 경계를 다시 설계해 오류를 줄였습니다. 모듈 구조도 정리해 이후 기능 추가와 유지보수가 쉬워졌습니다.",
      en: "Because operators use these screens repeatedly each day, perceived speed and accuracy were equally important. I redefined dashboard/list state boundaries to reduce sync issues and separated read/update paths to prevent unintended side effects. Module boundaries were strengthened for easier future extension and maintenance.",
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
      ko: "대시보드/리스트 간 데이터 동기화와 예외 처리 복잡도가 높았음",
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
      ko: ["운영 관리 품질 향상", "조회/수정 오류 재발 감소"],
      en: ["Improved operations quality", "Reduced recurrence of read/update errors"],
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
      ko: "에너지 관리 B2B 파트너 포털 퍼블리싱",
      en: "Energy Management B2B Partner Portal Publishing",
    },
    oneLiner: {
      ko: "여러 템플릿 화면을 일관된 품질로 퍼블리싱한 프로젝트",
      en: "Responsive publishing and UI quality for an enterprise partner portal",
    },
    details: {
      ko: "여러 페이지를 같은 기준으로 만들기 위해 컴포넌트 단위 퍼블리싱 구조를 먼저 잡았습니다. 반응형에서 텍스트와 여백 균형을 맞춰 가독성을 높였습니다. QA 피드백을 빠르게 반영해 납기 안에 안정적으로 마무리했습니다.",
      en: "As a publishing-only project, consistency across deliverables was the primary challenge. Repeated layout patterns were componentized to avoid quality drift as templates expanded, and responsive typography/spacing rhythm was tuned carefully. Fast QA loops helped close the project reliably within delivery timelines.",
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
      ko: "복수 템플릿 페이지를 같은 품질 기준으로 퍼블리싱해야 했음",
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
      ko: ["퍼블리싱 품질 확보", "템플릿 확장 시 화면 일관성 유지"],
      en: ["Secured publishing quality", "Maintained UI consistency during template expansion"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/energy_b2b_partner_portal.png`,
    },
  },
  {
    id: "tv-overlay-shopping",
    category: "platform",
    title: {
      ko: "TV 오버레이 쇼핑/푸드 추천 앱",
      en: "TV Overlay Shopping & Food Recommendation App",
    },
    oneLiner: {
      ko: "TV 시청 중에도 자연스럽게 사용할 수 있는 오버레이 UX 구현",
      en: "An overlay-based interactive UX for TV viewing scenarios",
    },
    details: {
      ko: "TV 환경은 입력 방식이 제한적이라 포커스 이동이 매우 중요했습니다. 오버레이 진입/종료와 포커스 복귀 규칙을 먼저 정리한 뒤 기능을 연결했습니다. 네트워크 지연 시에도 사용자가 현재 상태를 이해할 수 있도록 화면 피드백을 단순하게 구성했습니다.",
      en: "TV overlay UX has short exposure windows and limited input, so a single focus move can shape the whole experience. I fixed entry/exit timing and focus-recovery rules before wiring recommendation data, securing interaction stability. Even under network delay, state feedback stayed concise so users did not lose orientation.",
    },
    tags: ["Svelte", "WebOS", "Overlay"],
    role: {
      ko: "기여도 FE 20%",
      en: "Contribution FE 20%",
    },
    stack: ["Svelte", "SCSS", "TypeScript", "WebOS"],
    problem: {
      ko: "TV 시청 흐름을 해치지 않으면서 상호작용을 제공해야 했음",
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
      ko: ["TV 환경 UX 완성도 개선", "포커스 이동 오류 감소"],
      en: ["Improved UX quality on TV environment", "Reduced focus-navigation errors"],
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
      ko: "권한과 상태 흐름이 복잡한 AI 운영 화면을 정리한 플랫폼",
      en: "AI operations platform with predictable permission/state architecture",
    },
    details: {
      ko: "권한별로 보이는 화면과 가능한 액션이 달라 상태 혼선이 자주 발생했습니다. 사용자별 화면 노출 규칙을 명확히 하고, 오류 상황에서는 다음 행동을 먼저 안내하도록 바꿨습니다. 운영팀이 빠르게 재현할 수 있게 로그 단위도 함께 정리했습니다.",
      en: "In this AI Agent platform, complexity came from permission-state combinations more than from raw features, so I focused on defining exactly who sees what and when. In failure cases, UX was tuned to guide the next action first, reducing operational inquiries. Action-level logs were designed for immediate reproducibility by operations teams.",
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
      ko: "권한 분기와 비동기 응답이 많아 화면 상태가 자주 꼬였음",
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
      ko: ["운영 대응 효율 및 UI 신뢰도 향상", "권한 분기 관련 화면 혼선 감소"],
      en: ["Improved ops efficiency and UI trust", "Reduced UI confusion in permission branches"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/enterprise_ai_agent_platform.jpeg`,
    },
  },
  {
    id: "smart-display-ai",
    category: "platform",
    title: {
      ko: "WebOS AI 스타일링/추천 연동 개발",
      en: "WebOS Smart Display AI Styling/Recommendation Integration",
    },
    oneLiner: {
      ko: "AI 추천 결과를 디바이스 UI에 안정적으로 연결한 프로젝트",
      en: "Integrated AI recommendations into device UI with stable behavior",
    },
    details: {
      ko: "AI 응답 값이 자주 바뀌어 화면 반영 타이밍을 잘 맞추는 것이 중요했습니다. 데이터 매핑 규칙을 정리해 UI가 갑자기 흔들리지 않게 했고, 실패/지연/빈 상태를 분리해 사용자 혼란을 줄였습니다. 연동 오류가 나도 서비스가 멈추지 않도록 대체 흐름을 준비했습니다.",
      en: "Because recommendation outputs changed frequently, update timing mattered as much as data quality. Instead of rendering raw AI responses, I mapped them into device UI rules to keep visual consistency. Empty, failed, and delayed states were designed separately, with explicit fallback paths to keep the service running under integration errors.",
    },
    tags: ["WebOS", "AI", "연동"],
    role: {
      ko: "기여도 FE 50%",
      en: "Contribution FE 50%",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    problem: {
      ko: "AI 결과 변화가 잦아 UI 동기화와 일관성 유지가 어려웠음",
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
      ko: ["AI 추천 연동 안정성 향상", "추천 결과 변동 시 화면 흔들림 감소"],
      en: ["Improved AI integration stability", "Reduced UI instability during recommendation changes"],
    },
    image: {
      src: `${import.meta.env.BASE_URL}assets/images/projects/webos_ai_styling_recommendation.jpeg`,
    },
  },
]
