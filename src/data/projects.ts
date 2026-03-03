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
}

export const PROJECT_CATEGORIES: {
    id: ProjectCategory
    label: { ko: string; en: string }
}[] = [
    { id: "platform", label: { ko: "Platform & Device", en: "Platform & Device" } },
    { id: "enterprise", label: { ko: "Enterprise / B2B", en: "Enterprise / B2B" } },
    { id: "finance_public", label: { ko: "Finance / Public", en: "Finance / Public" } },
]

export const projects: Project[] = [
    {
        id: "webos-multi",
        category: "platform",
        title: { ko: "WebOS 기반 멀티 플랫폼 서비스 개발", en: "WebOS Multi-platform Service" },
        oneLiner: { ko: "디바이스 제약 환경에서 안정적인 UI/상태 흐름을 설계", en: "Stable UI/state design under device constraints" },
        tags: ["WebOS", "운영", "상태설계"],
        role: { ko: "프론트엔드 설계/구현 · 운영 이슈 대응", en: "FE design/implementation · ops support" },
        stack: ["Svelte", "TypeScript", "WebOS", "Git"],
        problem: {
            ko: "리모컨 입력/네트워크/성능 제약에서 상태 꼬임과 UI 불안정이 발생",
            en: "State/UI instability under remote input, network, and performance constraints",
        },
        approach: {
            ko: ["상태 전이를 단순화", "실패/재시도 흐름 표준화", "로그/분기 지점 정리"],
            en: ["Simplified state transitions", "Standardized failure/retry", "Logging/branching points"],
        },
        reliability: {
            ko: ["로딩/에러/빈 상태 기본값", "재시도/타임아웃 처리", "예외 케이스 시나리오 정리"],
            en: ["Default loading/error/empty", "Retry/timeout", "Edge-case scenarios"],
        },
        result: {
            ko: ["운영 이슈 재발 감소", "화면 전환 안정화", "CS 대응 시간 단축"],
            en: ["Fewer recurring ops issues", "Stabilized navigation", "Reduced CS response time"],
        },
    },
    {
        id: "ai-agent",
        category: "enterprise",
        title: { ko: "기업용 채팅형 AI Agent 플랫폼", en: "Enterprise Chat-based AI Agent Platform" },
        oneLiner: { ko: "복잡한 상태/권한/흐름을 ‘예측 가능’하게 구조화", en: "Structured state/permissions into predictable flows" },
        tags: ["B2B", "상태정확성", "예외대응"],
        role: { ko: "UI 구조/상태 설계 · 운영 플로우 정리", en: "UI architecture/state design · ops flows" },
        stack: ["React", "TypeScript", "Tailwind"],
        problem: {
            ko: "사용자 액션과 비동기 응답이 얽히며 예외 케이스가 많고 운영 대응이 어려움",
            en: "Many edge cases due to user actions + async responses; hard to operate",
        },
        approach: {
            ko: ["상태/권한 경계를 명확히", "에러 메시지 규격화", "재시도/복구 UX 설계"],
            en: ["Clear state/permission boundaries", "Standardized error copy", "Retry/recovery UX"],
        },
        reliability: {
            ko: ["실패 시 fallback UI", "액션 단위 로깅 포인트", "재현 가능한 흐름 기록"],
            en: ["Fallback UI on failure", "Action-level logs", "Reproducible flows"],
        },
        result: {
            ko: ["예외 케이스 누락 감소", "운영 대응 효율 향상", "UI 신뢰도 상승"],
            en: ["Fewer missed edge cases", "Improved ops efficiency", "Higher UI reliability"],
        },
    },
    {
        id: "finance-renewal",
        category: "finance_public",
        title: { ko: "IM유페이 금융 서비스 리뉴얼 및 관리자 개발", en: "Finance Service Renewal & Admin" },
        oneLiner: { ko: "정확성이 중요한 화면에서 검증/예외/상태를 체계화", en: "Systematized validation/edge/state for accuracy-critical UI" },
        tags: ["금융", "검증", "안정성"],
        role: { ko: "화면 구현 · 검증/예외 처리 강화", en: "UI implementation · validation/edge hardening" },
        stack: ["React", "TypeScript"],
        problem: {
            ko: "입력/조회 흐름에서 오류 대응이 부족해 사용자 신뢰가 흔들릴 수 있음",
            en: "Gaps in error handling could undermine user trust",
        },
        approach: {
            ko: ["검증 규칙 정리", "오류 UX 통일", "중복 요청/레이스 방지"],
            en: ["Unified validation rules", "Consistent error UX", "Prevented duplicates/races"],
        },
        reliability: {
            ko: ["필수 상태 체크", "네트워크 오류 분기", "추적 가능한 로그 포인트"],
            en: ["Required state checks", "Network error branches", "Traceable logs"],
        },
        result: {
            ko: ["오류 UX 개선", "상태 꼬임 감소", "운영 요청 대응 효율 향상"],
            en: ["Better error UX", "Less state corruption", "Improved ops efficiency"],
        },
    },
    {
        id: "tv-overlay-shopping",
        category: "platform",
        title: {
            ko: "TV Overlay 쇼핑·푸드 추천 애플리케이션",
            en: "TV Overlay Shopping & Food Recommendation App"
        },
        oneLiner: {
            ko: "TV 시청 중 Overlay UI로 쇼핑·푸드 추천을 연동",
            en: "Overlay-based shopping and food recommendation during TV viewing"
        },
        tags: ["WebOS", "Overlay", "리모컨UX"],
        role: {
            ko: "Overlay UI 설계 및 리모컨 입력 기반 UX 구현",
            en: "Overlay UI design and remote-based UX implementation"
        },
        stack: ["Svelte", "TypeScript", "WebOS"],
        problem: {
            ko: "TV 시청을 방해하지 않으면서 상호작용 가능한 UI 필요",
            en: "Need interactive UI without disrupting TV viewing"
        },
        approach: {
            ko: ["Overlay 상태 분리", "리모컨 포커스 흐름 설계", "비동기 추천 데이터 처리"],
            en: ["Separated overlay state", "Designed remote focus flow", "Handled async recommendation data"]
        },
        reliability: {
            ko: ["네트워크 실패 대비 UI fallback", "포커스 유실 방지 처리"],
            en: ["Fallback UI on network failure", "Prevented focus loss"]
        },
        result: {
            ko: ["Overlay 전환 안정성 확보", "UX 일관성 개선"],
            en: ["Improved overlay stability", "Enhanced UX consistency"]
        }
    },
    {
        id: "smart-display-ai",
        category: "platform",
        title: {
            ko: "스마트 디스플레이 기반 AI 스타일링·추천 시스템 연동",
            en: "Smart Display AI Styling & Recommendation Integration"
        },
        oneLiner: {
            ko: "AI 추천 결과를 디바이스 UI에 실시간 반영",
            en: "Integrated AI recommendation results into device UI"
        },
        tags: ["AI연동", "WebOS", "실시간데이터"],
        role: {
            ko: "추천 데이터 UI 매핑 및 상태 흐름 설계",
            en: "UI mapping and state flow design for recommendation data"
        },
        stack: ["Svelte", "TypeScript"],
        problem: {
            ko: "추천 결과 변화에 따른 UI 불안정 발생",
            en: "UI instability due to dynamic recommendation updates"
        },
        approach: {
            ko: ["상태 스냅샷 기반 렌더링", "비동기 흐름 단순화"],
            en: ["Snapshot-based rendering", "Simplified async flow"]
        },
        reliability: {
            ko: ["데이터 유효성 검증", "로딩/빈 상태 명확화"],
            en: ["Data validation", "Clear loading/empty states"]
        },
        result: {
            ko: ["실시간 추천 반영 안정화", "사용자 인지 혼란 감소"],
            en: ["Stabilized real-time updates", "Reduced user confusion"]
        }
    },
    {
        id: "mobile-shopping-webos",
        category: "platform",
        title: {
            ko: "모바일 쇼핑 플랫폼(WebOS 연계)",
            en: "Mobile Shopping Platform integrated with WebOS"
        },
        oneLiner: {
            ko: "TV-모바일 간 사용자 플로우 연결",
            en: "Connected TV and mobile user flows"
        },
        tags: ["CrossPlatform", "WebOS", "쇼핑"],
        role: {
            ko: "플랫폼 간 상태 동기화 UI 구현",
            en: "Implemented cross-platform state synchronization"
        },
        stack: ["React", "TypeScript"],
        problem: {
            ko: "디바이스 간 상태 불일치 문제",
            en: "State mismatch across devices"
        },
        approach: {
            ko: ["세션 기반 상태 관리", "이벤트 기반 동기화 처리"],
            en: ["Session-based state management", "Event-driven synchronization"]
        },
        reliability: {
            ko: ["재연결 시 상태 복구 처리", "중복 요청 방지"],
            en: ["State recovery on reconnect", "Prevented duplicate requests"]
        },
        result: {
            ko: ["TV-모바일 UX 연속성 확보"],
            en: ["Ensured continuity between TV and mobile UX"]
        }
    },
    {
        id: "v2x-sdk-platform",
        category: "enterprise",
        title: {
            ko: "V2X 기반 SDK 제공 플랫폼",
            en: "V2X SDK Distribution Platform"
        },
        oneLiner: {
            ko: "SDK 문서·관리·배포를 위한 관리자 중심 플랫폼",
            en: "Admin-centered platform for SDK documentation and distribution"
        },
        tags: ["B2B", "SDK", "관리자"],
        role: {
            ko: "관리자 UI 설계 및 배포 플로우 구현",
            en: "Designed admin UI and deployment flows"
        },
        stack: ["React", "TypeScript"],
        problem: {
            ko: "SDK 버전 관리 및 권한 제어 복잡도",
            en: "Complex versioning and permission management"
        },
        approach: {
            ko: ["권한 레벨 분리", "버전 관리 UI 체계화"],
            en: ["Separated permission levels", "Structured version management UI"]
        },
        reliability: {
            ko: ["잘못된 배포 방지 로직 추가"],
            en: ["Added safeguards against incorrect releases"]
        },
        result: {
            ko: ["배포 안정성 향상"],
            en: ["Improved deployment stability"]
        }
    },
    {
        id: "daegu-transport-system",
        category: "finance_public",
        title: {
            ko: "대구광역시 어르신 통합 무임 교통카드 발급 관리 시스템",
            en: "Daegu Public Transport Card Issuance System"
        },
        oneLiner: {
            ko: "공공 서비스 특성에 맞는 안정적 발급 관리 UI 구현",
            en: "Built stable issuance management UI for public service"
        },
        tags: ["공공", "검증", "안정성"],
        role: {
            ko: "입력 검증 및 상태 흐름 설계",
            en: "Validation and state flow design"
        },
        stack: ["React", "TypeScript"],
        problem: {
            ko: "잘못된 입력/중복 발급 리스크",
            en: "Risk of invalid input and duplicate issuance"
        },
        approach: {
            ko: ["입력 검증 강화", "중복 처리 방지"],
            en: ["Enhanced input validation", "Prevented duplicates"]
        },
        reliability: {
            ko: ["에러 메시지 통일", "상태 체크 강화"],
            en: ["Unified error messages", "Strengthened state checks"]
        },
        result: {
            ko: ["발급 오류 감소"],
            en: ["Reduced issuance errors"]
        }
    },
    {
        id: "blockchain-payment-shopping",
        category: "finance_public",
        title: {
            ko: "블록체인 결제 기반 쇼핑 서비스",
            en: "Blockchain-based Payment Shopping Service"
        },
        oneLiner: {
            ko: "결제 신뢰성이 중요한 B2C 쇼핑 플랫폼",
            en: "Trust-critical B2C shopping platform with blockchain payment"
        },
        tags: ["결제", "B2C", "안정성"],
        role: {
            ko: "결제 흐름 UI 및 예외 처리 강화",
            en: "Implemented payment flow UI and strengthened edge handling"
        },
        stack: ["React", "TypeScript"],
        problem: {
            ko: "결제 실패/지연 시 사용자 불안감 증가",
            en: "User anxiety on payment delay/failure"
        },
        approach: {
            ko: ["상태별 UX 분리", "재시도 및 타임아웃 처리"],
            en: ["Separated UX by state", "Retry and timeout handling"]
        },
        reliability: {
            ko: ["결제 상태 추적 로직 강화"],
            en: ["Enhanced payment state tracking"]
        },
        result: {
            ko: ["결제 흐름 신뢰도 향상"],
            en: ["Improved payment flow reliability"]
        }
    }
]