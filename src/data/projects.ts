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
      ko: "사용자/관리자 웹과 WebOS 앱을 함께 개발·운영한 디바이스 연동 서비스",
      en: "A device-linked service where user/admin web and WebOS apps were built and operated together",
    },
    details: {
      ko: "사용자 웹, 관리자 CMS, WebOS TV 앱이 함께 동작하는 멀티 플랫폼 구조를 개발·운영한 프로젝트입니다. TV 환경의 리모컨 인터랙션과 디바이스 성능 제약을 고려한 UI 설계가 핵심이었고, 운영을 위해 사용자 TV 디바이스 정보 수집과 관리 시스템 연동 구조도 함께 구축했습니다.",
      en: "This project delivered and operated a multi-platform structure across user web, admin CMS, and WebOS TV app. The core challenge was designing UI for remote-control interaction under device constraints, while also building TV-device data collection and management-system integration for operations.",
    },
    tags: ["WebOS", "React", "운영"],
    role: {
      ko: "기여도 FE 50% · 완료 후 유지보수 진행",
      en: "Contribution FE 50% · completed and under maintenance",
    },
    stack: ["React", "SCSS", "Webpack", "Redux", "ESLint", "Prettier", "Git"],
    problem: {
      ko: "TV 디바이스, 사용자 웹, 관리자 웹이 함께 동작하는 멀티 플랫폼 구조에서 WebOS 리모컨 인터랙션과 디바이스 성능 제약을 동시에 고려한 UI 설계가 필요했고, 운영을 위한 TV 정보 수집/연동 구조도 요구되었습니다.",
      en: "In a multi-platform setup spanning TV device, user web, and admin web, UI had to account for both WebOS remote interaction and device constraints, while also requiring TV-data collection and operational integration.",
    },
    approach: {
      ko: [
        "사용자 웹·관리자 시스템·WebOS TV 앱 연동 멀티 플랫폼 구조 통합",
        "WebOS 환경에 맞는 렌더링 구조와 리모컨 인터랙션 설계",
        "관리자 Role 기반 운영 시스템으로 베타테스터/디바이스 관리 프로세스 구축",
        "TV 디바이스 정보 수집 및 관리 시스템 연동 구조 구현",
      ],
      en: [
        "Integrated a linked multi-platform flow across user web, admin system, and WebOS TV app",
        "Designed rendering and remote-control interaction optimized for WebOS constraints",
        "Built a role-based admin operation model for beta tester and device management",
        "Implemented TV-device data collection and management-system integration",
      ],
    },
    reliability: {
      ko: [
        "리모컨 포커스 유실 시 마지막 유효 포커스 복구 규칙 적용",
        "Luna API 지연/실패 시 디바이스 정보 조회 fallback 분기 운영",
        "펌웨어/해상도 차이별 QA 체크리스트로 배포 안정성 관리",
      ],
      en: [
        "Applied last-valid-focus recovery rules for remote-navigation failures",
        "Operated fallback branches for delayed/failed Luna API device lookups",
        "Managed release stability with firmware/resolution-specific QA checklists",
      ],
    },
    result: {
      ko: [
        "멀티 플랫폼 운영 환경 통합으로 서비스 운영 안정성 향상",
        "TV 환경 사용성 및 화면 전환 안정성 개선",
        "Role 기반 운영 관리 체계와 디바이스 데이터 관리 기반 확보",
      ],
      en: [
        "Improved operational stability by unifying the multi-platform environment",
        "Improved TV usability and transition stability",
        "Established role-based ops governance and a device data management foundation",
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
      ko: [
        "학습자/관리자 권한 경계에서 라우트 접근 가드 적용",
        "과제/등록 폼 중복 제출 방지와 입력 유지 처리",
        "조회 조건 조합별 테스트 케이스로 운영 오류 재현성 확보",
      ],
      en: [
        "Applied route-access guards across learner/admin permission boundaries",
        "Prevented duplicate submissions and preserved form state in long flows",
        "Secured reproducibility with query-combination test scenarios",
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
      ko: [
        "거래 단계별 상태 추적과 타임아웃 재조회 정책 분리",
        "결제 요청 단건 토큰 처리로 중복 결제 경로 차단",
        "실패/지연/취소 케이스별 고객 문의 대응 로그 키 운영",
      ],
      en: [
        "Separated per-stage transaction tracking and timeout recheck policies",
        "Blocked duplicate-payment paths with single-use payment tokens",
        "Operated support-ready log keys for failed/delayed/canceled cases",
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
      ko: [
        "브라우저별 레이아웃 깨짐 기준선을 정의해 사전 점검",
        "SEO 메타/오픈그래프 누락 검증으로 공개 품질 관리",
        "콘텐츠 교체 시 섹션별 회귀 체크로 운영 변경 안정화",
      ],
      en: [
        "Pre-checked browser-specific layout breakpoints against a baseline",
        "Managed publication quality with SEO meta/Open Graph validation",
        "Stabilized content updates via section-level regression checks",
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
      ko: [
        "SDK 버전 업로드 시 메타데이터/파일 정합성 검증 강화",
        "권한 승인/배포 이력 감사 로그로 운영 추적성 확보",
        "버전 롤백 시나리오를 포함한 단계 배포 체크리스트 운영",
      ],
      en: [
        "Strengthened metadata/artifact consistency checks on SDK uploads",
        "Secured operational traceability with permission/release audit logs",
        "Operated staged release checklists including rollback scenarios",
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
      ko: [
        "적립/차감/정산 이벤트 상호 정합성 검증 규칙 적용",
        "이벤트 기간/대상 조건 충돌 방지 가드 로직 운영",
        "수동 보정 이력과 사유 기록으로 운영 책임 추적 강화",
      ],
      en: [
        "Applied reconciliation rules across accrual, deduction, and settlement events",
        "Operated guard logic against event-period and eligibility conflicts",
        "Strengthened accountability with manual-adjustment reason logs",
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
      ko: [
        "실시간 관제 연결 끊김 시 자동 재연결 및 축소 모드 제공",
        "알람 확인/조치 이력 타임라인으로 운영 이슈 추적",
        "커뮤니티 관리 액션(차단/복구) 감사 로그 분리 저장",
      ],
      en: [
        "Provided auto-reconnect and degraded mode for control-channel drops",
        "Tracked incidents through acknowledge/action alarm timelines",
        "Stored separate audit trails for moderation actions (block/restore)",
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
      ko: "무임 교통카드 발급 시스템과 관리자 프론트엔드를 함께 개발한 공공 프로젝트",
      en: "A public project delivering both transit-card issuance flows and admin frontend",
    },
    details: {
      ko: "행정복지센터 발급 업무와 지자체/시 관리자 운영을 동시에 지원하는 카드 발급/관리 시스템입니다. 민감 개인정보 처리와 행정안전부 API 연동이 필요한 환경에서 발급 UI, 본인 확인, 서명/출력, 권한 기반 운영 대시보드까지 연결해 행정 업무를 디지털 프로세스로 전환했습니다.",
      en: "This card issuance/management system supports both welfare-center issuance work and municipality-level admin operations. In a sensitive-data environment requiring MOIS API integration, the project connected issuance UI, identity flow, signature/print process, and role-based dashboards into a digital administrative workflow.",
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
      ko: "행정복지센터에서 카드 발급을 처리하고 지자체/시 관리자가 발급 현황과 운영 데이터를 관리할 수 있는 통합 시스템이 필요했습니다. 주민등록번호 등 민감정보 처리와 행정안전부 시스템 연동을 고려한 안정적인 데이터 처리 구조도 필수였습니다.",
      en: "A unified system was required for welfare-center issuance and municipality/city-level operational management, with stable data handling for sensitive personal information and MOIS-system integration.",
    },
    approach: {
      ko: [
        "행정복지센터 카드 발급 웹 UI와 발급 프로세스 화면 구현",
        "이름/주민등록번호 입력 시 행정안전부 API 기반 대상자 조회 UI 연동",
        "서명 패드 연동, 동의서/영수증 출력, 본인인증 로그인 및 계정 관리 구현",
        "관리자 Level 권한 기반 메뉴 제어와 대시보드, 발급·재고·정산 조회 UI 개발",
      ],
      en: [
        "Built issuance web UI and end-to-end issuance process screens for welfare centers",
        "Integrated MOIS API-based eligibility lookup from identity inputs",
        "Implemented signature-pad flow, consent/receipt printing, and phone-auth account flows",
        "Developed level-based admin controls and dashboards for issuance/inventory/settlement views",
      ],
    },
    reliability: {
      ko: [
        "주민번호 등 민감정보 마스킹/입력 검증 정책 적용",
        "행안부 API 실패 시 재조회·수동확인 분기 운영",
        "발급 동의/서명/출력 증적을 단계별로 누락 없이 기록",
      ],
      en: [
        "Applied masking and validation policies for sensitive identity data",
        "Operated requery/manual-verification branches on MOIS API failures",
        "Recorded consent/signature/print evidence per issuance stage",
      ],
    },
    result: {
      ko: [
        "오프라인 카드 발급 업무의 전산화 및 행정 처리 효율 개선",
        "대상자 조회 자동화와 디지털 서명/출력 연동으로 발급 절차 디지털 전환",
        "권한 기반 운영 구조와 발급·재고·정산 UI로 관리자 업무 편의성 향상",
      ],
      en: [
        "Digitized offline issuance work and improved administrative efficiency",
        "Automated eligibility checks and digitized issuance with signature/print integration",
        "Improved operator convenience via role-based operations and issuance/inventory/settlement UI",
      ],
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
      ko: "IM유페이 홈페이지 고도화와 관리자 신규 개발을 함께 수행한 금융 프로젝트",
      en: "A finance project covering IMUPAY homepage renewal and new admin development",
    },
    details: {
      ko: "레거시 금융 웹사이트를 React + TypeScript 기반으로 재구축하고, IM유페이 관리자 CMS를 신규 개발한 프로젝트입니다. 메뉴 구조와 UI/UX를 전면 개편하고 공통 컴포넌트 아키텍처를 구축했으며, NICE 본인인증·휴대폰 인증·nProtect 보안을 적용해 금융 서비스 요구사항을 충족했습니다.",
      en: "This project rebuilt a legacy finance website on React + TypeScript and introduced a new IMUPAY admin CMS. It overhauled menu structure and UI/UX with a shared component architecture, while integrating NICE verification, phone authentication, and nProtect security to meet finance-grade requirements.",
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
      ko: "기존 금융 웹사이트가 레거시 구조로 일부 기능이 불안정했고, UI 구조가 체계화되지 않아 유지보수/확장이 어려웠습니다. 또한 사용자 인증·보안 기능이 충분하지 않았고, 별도 관리자 시스템이 없는 상태였습니다.",
      en: "The existing finance website was legacy and unstable in parts, with unstructured UI that made maintenance and expansion difficult. User authentication/security was insufficient, and there was no dedicated admin system.",
    },
    approach: {
      ko: [
        "레거시 금융 사이트를 React + TypeScript 기반으로 전면 재구축",
        "서비스 메뉴 구조와 UI/UX 개편, 공통 UI 컴포넌트 아키텍처 구축",
        "NICE/휴대폰 본인인증 연동 및 nProtect 키보드/키패드 보안 적용",
        "유페이 카드 등록 프로세스 UI와 PC·모바일 반응형 인터페이스 구현",
        "메인/게시판 운영을 위한 관리자(Admin) CMS 신규 구축",
      ],
      en: [
        "Rebuilt the legacy finance site end-to-end on React + TypeScript",
        "Overhauled IA/UIUX and established a shared UI component architecture",
        "Integrated NICE/phone verification and nProtect keyboard/keypad security",
        "Implemented card-registration UI flow with responsive PC/mobile interfaces",
        "Built a new admin CMS for main/board content operations",
      ],
    },
    reliability: {
      ko: [
        "본인인증/보안모듈 연동 실패 코드별 대응 화면 표준화",
        "카드 등록/인증 요청에 단건 처리 토큰으로 중복 실행 방지",
        "Admin 콘텐츠 변경 이력 버전 관리로 운영 롤백 가능성 확보",
      ],
      en: [
        "Standardized UI handling by verification/security-module failure codes",
        "Prevented duplicate auth/card-registration execution via single-run tokens",
        "Ensured rollback readiness with versioned admin content change history",
      ],
    },
    result: {
      ko: [
        "컴포넌트 단위 재설계로 유지보수성과 기능 확장성 개선",
        "공통 UI 기반으로 화면 개발 생산성과 신규 기능 대응 속도 향상",
        "인증·보안 체계 및 신규 Admin CMS 구축으로 운영 관리 기반 확보",
        "반응형 UI 구현과 협업 프로세스 정비로 사용자 경험/개발 안정성 개선",
      ],
      en: [
        "Improved maintainability and extensibility through component-level redesign",
        "Increased delivery speed with shared UI foundations",
        "Established operational foundations via security/auth setup and a new admin CMS",
        "Improved UX and development stability through responsive UI and collaboration process refinement",
      ],
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
      ko: [
        "API 응답 스키마 검증으로 런타임 데이터 불일치 차단",
        "필터/정렬/페이지네이션 동시 동작 시 상태 경쟁 조건 제어",
        "장시간 조회 화면의 요청 취소/재요청 정책으로 과부하 완화",
      ],
      en: [
        "Blocked runtime data mismatch with strict response-schema validation",
        "Controlled race conditions in combined filter/sort/pagination flows",
        "Reduced load via request-cancel/retry policies on long-lived screens",
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
      ko: [
        "모바일→TV 전환 시 세션/상태 전달 실패 재동기화 로직 적용",
        "딥링크 유실 시 홈 fallback과 재진입 가이드 제공",
        "채널 간 버전 불일치 대응을 위한 유지보수 호환 규칙 운영",
      ],
      en: [
        "Applied resync logic for failed mobile-to-TV session/state handoff",
        "Provided home fallback and re-entry guidance on deeplink failures",
        "Operated maintenance compatibility rules for cross-channel version drift",
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
      ko: [
        "대시보드/리스트 간 데이터 소스 분리로 동기화 충돌 최소화",
        "수정 실패 시 낙관적 업데이트 롤백 규칙 명확화",
        "운영 이슈 재현을 위한 요청/응답 상관 ID 추적 적용",
      ],
      en: [
        "Minimized sync collisions by separating dashboard/list data sources",
        "Clarified optimistic-update rollback rules on update failures",
        "Applied request/response correlation IDs for incident reproduction",
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
      ko: [
        "템플릿 공통 토큰 사용으로 스타일 편차 누적 방지",
        "시맨틱 마크업/키보드 탐색 기준선으로 접근성 품질 유지",
        "화면 단위 시각 회귀 점검으로 퍼블리싱 납품 안정화",
      ],
      en: [
        "Prevented style drift by enforcing shared template design tokens",
        "Maintained accessibility quality with semantic and keyboard baselines",
        "Stabilized deliveries through page-level visual regression checks",
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
      ko: [
        "오버레이 진입/종료 시 포커스 고정 및 복귀 기준선 정의",
        "추천 API 지연 시 skeleton/대체 카드로 빈 화면 방지",
        "자동 닫힘/복귀 타이밍 충돌 방지 가드로 전환 안정화",
      ],
      en: [
        "Defined focus lock/restore baselines for overlay entry and exit",
        "Avoided blank states with skeleton/fallback cards on API delays",
        "Stabilized transitions with guards against auto-close timing conflicts",
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
      ko: [
        "권한 매트릭스 기준으로 화면/액션 노출 회귀 테스트 운영",
        "LLM 응답 실패·지연·빈 결과별 복구 UX와 재시도 정책 분리",
        "프롬프트 실행 로그와 사용자 액션 로그를 분리 수집해 분석성 강화",
      ],
      en: [
        "Ran regression checks for screen/action exposure by permission matrix",
        "Separated retry/recovery policies for failed, delayed, and empty LLM outputs",
        "Strengthened analysis by separating prompt-execution and user-action logs",
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
      ko: [
        "AI 응답 스키마 검증과 신뢰도 임계치로 비정상 결과 차단",
        "추천 결과 없음/지연/실패를 독립 상태로 분리해 오작동 방지",
        "연동 장애 시 규칙 기반 기본 추천 세트로 서비스 연속성 유지",
      ],
      en: [
        "Blocked abnormal outputs using response-schema validation and confidence thresholds",
        "Separated empty, delayed, and failed recommendation states to avoid misbehavior",
        "Maintained continuity with rule-based fallback recommendations during integration failures",
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
