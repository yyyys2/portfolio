export const ko = {
  app: {
    footer: {
      thanks: "방문해 주셔서 감사합니다.",
      copyright: "© 2026 yyyys2",
    },
  },
  nav: {
    profile: "Profile",
    skills: "Skills",
    projects: "Projects",
    reliability: "Reliability",
    contact: "Contact",
  },
  header: {
    theme: {
      switchToLight: "라이트 모드로 전환",
      switchToDark: "다크 모드로 전환",
      lightMode: "라이트 모드",
      darkMode: "다크 모드",
    },
    language: {
      toEnglish: "EN",
      toKorean: "KO",
    },
  },
  profile: {
    title: "About Me",
    formTitle: "프로필 초안 작성",
    formDesc:
      "이름, 소개, 스킬을 정리해서 포트폴리오에 들어갈 자기소개 섹션을 빠르게 구성하세요.",
    helper: "내용을 수정하면 우측 미리보드가 즉시 반영됩니다.",
    submit: "프로필 등록하기",
    saved: "마지막 저장:",
    roleLabel: "Frontend Developer",
    name: "김윤영",
    intro:
      "안녕하세요. 여행지의 순간을 사진으로 기록하듯, 사용자 경험의 디테일을 놓치지 않는 프론트엔드 개발자 김윤영입니다.",
    strengthsTitle: "Strengths",
    careerTitle: "Career",
    highlights: [
      "사용자 경험의 디테일을 놓치지 않는 프론트엔드 개발자",
      "실서비스와 관리자 시스템을 모두 다뤄온 운영형 개발 경험",
      "React·TypeScript 기반 구조화, 상태관리, API 연동, 성능 개선 중심",
    ],
    summary: {
      stats: [
        { label: "총 경력", value: "7+", desc: "Years in Frontend" },
        { label: "대표 프로젝트", value: "12+", desc: "Production Projects" },
        { label: "서비스 도메인", value: "3+", desc: "Domains Operated" },
      ],
      cards: [
        {
          title: "Frontend Specialist",
          icon: "FE",
          body: "2018년부터 프론트엔드 개발을 이어오며 React·TypeScript 기반의 실서비스와 관리자 시스템을 안정적으로 구축해왔습니다. 구현 속도보다 유지보수성과 예외 대응력을 우선합니다.",
        },
        {
          title: "Collaboration Philosophy",
          icon: "COL",
          body: "기획·디자인·백엔드와의 커뮤니케이션에서 요구사항과 제약 조건을 먼저 정리합니다. 상태 흐름과 실패 시나리오를 팀 단위로 맞추는 과정을 중요하게 생각합니다.",
        },
        {
          title: "Future & Growth",
          icon: "GRW",
          body: "WebOS/플랫폼 환경에서의 운영 경험을 바탕으로, 복잡한 UI 상태를 더 예측 가능하게 만드는 아키텍처에 집중하고 있습니다. 사용자 신뢰를 높이는 안정성 개선이 핵심 목표입니다.",
        },
      ],
    },
    experience: [
      {
        period: "2021.03 - 현재",
        company: "주식회사 오큐브",
        role: "선임 연구원",
        details: [
          "React·TypeScript 기반 웹 서비스 및 관리자 시스템 개발",
          "UI 구현, Zustand/Query 기반 상태관리, API 연동, 성능 개선 담당",
          "WebOS TV 앱, 공공 행정 시스템, 기업 홈페이지 등 다양한 환경 경험",
        ],
      },
      {
        period: "2020.08 - 2021.02",
        company: "엘컴퓨터학원",
        role: "개발팀",
        details: ["HTML/CSS, Spring Boot 기반 학생 관리 프로그램 개발"],
      },
      {
        period: "2020.04 - 2020.08",
        company: "운김",
        role: "대표",
        details: ["SI 업무를 통한 웹 기획, 디자인, 프론트엔드 담당"],
      },
      {
        period: "2018.12 - 2020.04",
        company: "주식회사 위컴(WECOM)",
        role: "주임 연구원",
        details: ["자사 솔루션 모바일 웹 및 웹사이트 프론트엔드 담당"],
      },
    ],
    fields: {
      name: "이름",
      role: "직무 / 포지션",
      headline: "한 줄 소개",
      bio: "상세 소개",
      location: "활동 지역",
      email: "이메일",
      skills: "핵심 스킬",
      availability: "업무 가능 형태",
    },
    preview: {
      location: "Location",
      email: "Email",
      availability: "Availability",
      skills: "Key Skills",
    },
  },
  hero: {
    title: "내 소개 타이틀 TBD",
    desc: "7년차 프론트엔드 개발자로서, 실제 서비스 환경에서 다뤄온 구조 설계와 운영 경험을 기반으로 제작한 포트폴리오입니다.",
    keyword: "Operational Frontend",
    photoCaption: "사진 취미는 ‘디테일을 관찰하는 습관’으로 이어집니다.",
    ctaProjects: "Projects",
    ctaResume: "Resume",
  },
  home: {
    featured: {
      title: "대표 프로젝트",
      subtitle: "현재 포트폴리오를 가장 잘 설명하는 핵심 프로젝트입니다.",
      badge: "Featured Case",
      cta: "전체 프로젝트 보기",
    },
    interests: {
      title: "나의 관심사",
      subtitle:
        "기술을 깊게 파고드는 일과 삶의 감각을 키우는 활동을 함께 이어가고 있습니다.",
      techTag: "Frontend",
      techTitle: "기술적 관심사",
      techKeywords: [
        { label: "React", href: "https://react.dev/" },
        { label: "TypeScript", href: "https://www.typescriptlang.org/" },
        { label: "TanStack Query", href: "https://tanstack.com/query/latest" },
        { label: "State Architecture" },
        { label: "UX Reliability" },
        { label: "Web Performance", href: "https://web.dev/performance/" },
      ],
      personalTag: "Photography",
      personalTitle: "개인적 관심사",
      personalKeywords: [
        { label: "Street Photography" },
        { label: "Travel Snap" },
        { label: "Light & Composition" },
        { label: "Color Grading", href: "https://lightroom.adobe.com/" },
        { label: "Film Look" },
      ],
    },
  },
  projects: {
    title: "Projects",
    desc: "운영 경험이 드러나는 대표 케이스를 중심으로 정리했습니다.",
    all: "전체",
    view: "Case Study 보기",
    visitSite: "사이트 보기",
    privateUiNote: "실제 UI 일부 비공개",
  },
  skills: {
    title: "Skills",
    desc: "정리된 기술 역량입니다.",
    sortedBy: "기업 선호도 순",
    overview: {
      total: "전체 스킬",
      strong: "상급 이상",
      average: "평균 숙련도",
    },
    level: {
      expert: "전문",
      advanced: "상급",
      intermediate: "중급",
      basic: "기초",
    },
    tabs: {
      all: "전체",
      frontend: "Frontend",
      tooling: "Tooling",
      infra: "Infra",
    },
    categoryLabel: {
      frontend: "프론트엔드",
      tooling: "도구/협업",
      infra: "인프라",
    },
  },
  reliability: {
    title: "Reliability",
    desc: "예쁜 UI가 ‘안정적인 서비스’가 되기까지의 디테일을 중요하게 봅니다.",
    items: [
      {
        title: "Failure-friendly UI",
        desc: "로딩, 에러, 빈 상태를 예외가 아니라 기본 흐름으로 두고 UI를 설계합니다.",
      },
      {
        title: "Operable by design",
        desc: "문제가 생겼을 때 빠르게 원인을 찾을 수 있도록 액션 단위의 로그와 재현 가능한 흐름을 남깁니다.",
      },
      {
        title: "Edge cases first",
        desc: "경계값, 중복 요청, 레이스 컨디션 같은 상황을 먼저 떠올리고 구조적으로 방지합니다.",
      },
      {
        title: "Release mindset",
        desc: "브랜치와 릴리즈 흐름을 이해하고, 변경 영향을 최소화하는 단위로 나누어 배포합니다.",
      },
      {
        title: "Predictable state flow",
        desc: "비동기 흐름에서도 UI 상태가 예측 가능하도록 상태 경계를 명확히 나눕니다.",
      },
    ],
  },
  contact: {
    title: "Contact",
    desc: "가볍게 인사해도 좋아요. 가장 빠른 채널은 이메일입니다.",
    emailLabel: "Email",
    emailCopy: "이메일 복사",
    copied: "복사되었습니다!",
  },
  modal: {
    closeAria: "모달 닫기",
    caseStudy: "Case Study",
    close: "닫기",
    problem: "문제",
    approach: "접근",
    reliabilityOps: "신뢰성/운영",
    result: "결과",
    stack: "기술 스택",
  },
} as const
