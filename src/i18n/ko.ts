export const ko = {
  app: {
    footer: {
      thanks: "끝까지 봐주셔서 감사합니다. 좋은 하루 보내세요 :)",
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
      "이름, 소개, 스킬을 정리해 포트폴리오용 자기소개를 빠르게 구성할 수 있어요.",
    helper: "내용을 수정하면 미리보기 영역에 바로 반영됩니다.",
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
    title: "서비스를 이해하고 UI를 만듭니다",
    desc: "실제 서비스 환경에서 쌓은 경험을 바탕으로 안정적으로 동작하고 오래 유지되는 UI를 만듭니다.",
    keyword: "서비스 중심 프론트엔드",
    photoCaption: "사진 취미는 ‘디테일을 관찰하는 습관’으로 이어집니다.",
    ctaProjects: "Projects",
    ctaResume: "Resume",
  },
  home: {
    featured: {
      title: "대표 프로젝트",
      subtitle: "지금의 저를 가장 잘 보여주는 프로젝트만 골라 담았습니다.",
      badge: "Featured Case",
      cta: "전체 프로젝트 보기",
    },
    interests: {
      title: "나의 관심사",
      subtitle:
        "기술을 깊게 파는 일과 일상에서 감각을 키우는 활동을 함께 이어가고 있습니다.",
      techTag: "Frontend",
      techTitle: "기술적 관심사",
      techKeywords: [
        { label: "UI Architecture", href: "https://react.dev/learn" },
        { label: "State Management" },
        { label: "Frontend Performance", href: "https://web.dev/performance/" },
        { label: "Service Reliability" },
        { label: "Scalable UI" },
        { label: "Design Systems" },
        {
          label: "Web Accessibility",
          href: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
        },
        {
          label: "Cross-Platform UI",
          href: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",
        },
      ],
      personalTag: "Photography",
      personalTitle: "개인적 관심사",
      personalKeywords: [
        {
          label: "Photography Archive",
          href: "https://www.instagram.com/_mysweetvalentine/",
        },
        { label: "Curated Travel" },
        {
          label: "Literary Reading",
          href: "https://pedia.watcha.com/ko-KR/users/nkPvrzO8Jvgar/contents/books",
        },
        {
          label: "Cinema Appreciation",
          href: "https://pedia.watcha.com/ko-KR/users/nkPvrzO8Jvgar/contents/movies",
        },
        { label: "Food Spot Hunting" },
        { label: "Cafe Discovery" },
        { label: "Solo Travel" },
      ],
    },
  },
  projects: {
    title: "Projects",
    desc: "실무 운영 경험이 잘 드러나는 프로젝트를 중심으로 정리했습니다.",
    all: "전체",
    view: "Case Study 보기",
    visitSite: "사이트 보기",
    privateUiNote: "실제 UI 일부 비공개",
  },
  skills: {
    title: "Skills",
    desc: "실무에서 꾸준히 사용해 온 기술을 정리했습니다.",
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
    desc: "보기 좋은 화면에서 끝내지 않고, 실제 운영에서도 안정적으로 동작하는 서비스를 만드는 데 집중합니다.",
    summary: [
      { label: "핵심 기준", value: "5", desc: "항상 지키는 개발 원칙" },
      { label: "점검 항목", value: "3", desc: "상태, 오류, 배포 영향" },
      {
        label: "배포 방식",
        value: "단계별 배포",
        desc: "작게 나눠 빠르게 확인",
      },
    ],
    principles: "일할 때 지키는 기준",
    firstChecks: "배포 전 먼저 보는 항목",
    checklist: [
      "핵심 화면 3~5개를 직접 클릭해 주요 기능이 정상 동작하는지 확인합니다.",
      "API 실패, 빈 데이터, 느린 응답 상황에서 화면이 깨지지 않는지 확인합니다.",
      "문제 발생 시 바로 되돌릴 수 있도록 이전 버전과 롤백 방법을 다시 확인합니다.",
    ],
    items: [
      {
        title: "실패해도 쓰기 쉬운 UI",
        desc: "로딩, 오류, 빈 화면을 예외로 두지 않고 기본 흐름 안에서 함께 설계합니다.",
      },
      {
        title: "운영하기 쉬운 구조",
        desc: "문제가 생겼을 때 빠르게 찾을 수 있도록 로그를 남기고, 같은 상황을 다시 확인할 수 있게 만듭니다.",
      },
      {
        title: "문제 상황 먼저 점검",
        desc: "경계값 입력, 중복 요청처럼 실제로 자주 발생하는 문제를 먼저 막습니다.",
      },
      {
        title: "단계별로 배포하고 확인",
        desc: "변경을 한 번에 크게 배포하지 않고 작은 단위로 나눠 영향 범위를 줄입니다.",
      },
      {
        title: "예측 가능한 상태 흐름",
        desc: "비동기 작업이 있어도 화면 상태가 갑자기 바뀌지 않도록 흐름을 단순하게 유지합니다.",
      },
    ],
  },
  contact: {
    title: "Contact",
    desc: "프론트엔드 포지션 제안이나 협업 문의를 받고 있습니다.",
    badge: "Contact",
    headline: "프론트엔드 포지션과 프로젝트 문의를 환영합니다.",
    message:
      "서비스 화면 구현, 관리자 기능 개발, 운영 안정화까지 경험했습니다.\n팀 상황과 기대 역할을 알려주시면 빠르게 검토해 답변드리겠습니다.",
    sendEmail: "이메일 보내기",
    response: "평일 기준 24시간 이내 답장드립니다.",
    channelsTitle: "연락 방법",
    channelEmail: "Email",
    channelGithub: "GitHub",
    channelInstagram: "Instagram",
    channelResume: "Resume PDF",
    workTitle: "선호 포지션",
    workScope: [
      {
        title: "Frontend Engineer",
        desc: "사용자와 운영자 관점을 함께 고려한 제품 개발",
      },
      {
        title: "Product Frontend",
        desc: "기획·디자인·백엔드와 협업해 제품 완성도를 높이는 역할",
      },
      {
        title: "운영/고도화 중심 역할",
        desc: "기존 서비스 안정화와 성능·사용성 개선을 담당하는 역할",
      },
    ],
    emailLabel: "Email",
    emailCopy: "이메일 복사",
    copied: "복사되었습니다!",
  },
  modal: {
    closeAria: "모달 닫기",
    caseStudy: "Case Study",
    close: "닫기",
    role: "내 역할",
    details: "프로젝트 상세",
    problem: "어떤 문제가 있었나",
    approach: "어떻게 풀었나",
    reliabilityOps: "신뢰성/운영",
    result: "어떤 변화가 있었나",
    stack: "기술 스택",
  },
} as const
