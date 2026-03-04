export const en = {
  app: {
    footer: {
      thanks: "Thanks for visiting.",
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
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      lightMode: "Light mode",
      darkMode: "Dark mode",
    },
    language: {
      toEnglish: "EN",
      toKorean: "KO",
    },
  },
  profile: {
    title: "About Me",
    desc: "This section distills the self-introduction and resume details organized in the Notion portfolio into one focused view.",
    formTitle: "Build Your Profile Draft",
    formDesc:
      "Organize your name, intro, and skills to shape a polished self-introduction section for your portfolio.",
    helper: "Changes appear in the preview board immediately.",
    submit: "Save Profile",
    saved: "Last saved:",
    roleLabel: "Frontend Developer",
    name: "Yunyeong Kim",
    intro:
      "Hello. I am Yunyeong Kim, a frontend developer who treats user experience with the same attention to detail used to capture meaningful moments in travel photography.",
    strengthsTitle: "Strengths",
    careerTitle: "Career",
    highlights: [
      "A frontend developer who does not miss UX details",
      "Hands-on operational experience across production services and admin systems",
      "Focused on React/TypeScript structure, state management, API integration, and performance improvements",
    ],
    summary: {
      stats: [
        { label: "Career Span", value: "7+", desc: "Years in Frontend" },
        { label: "Case Projects", value: "12+", desc: "Production Projects" },
        { label: "Service Areas", value: "3+", desc: "Domains Operated" },
      ],
      cards: [
        {
          title: "Frontend Specialist",
          icon: "FE",
          body: "Since 2018, I have built production services and admin systems with React and TypeScript. I prioritize maintainability and edge-case handling over short-term delivery speed.",
        },
        {
          title: "Collaboration Philosophy",
          icon: "COL",
          body: "I align requirements and constraints first with product, design, and backend teams. Shared understanding of state flows and failure scenarios is a core part of my process.",
        },
        {
          title: "Future & Growth",
          icon: "GRW",
          body: "Building on WebOS and platform operations experience, I focus on making complex UI states more predictable. Improving reliability to increase user trust is my main direction.",
        },
      ],
    },
    experience: [
      {
        period: "2021.03 - Present",
        company: "OQube Co., Ltd.",
        role: "Senior Researcher",
        details: [
          "Developed web services and admin systems with React and TypeScript",
          "Handled UI implementation, Zustand/Query state management, API integration, and performance optimization",
          "Worked across WebOS TV apps, public systems, and corporate websites",
        ],
      },
      {
        period: "2020.08 - 2021.02",
        company: "L Computer Academy",
        role: "Development Team",
        details: [
          "Built a student management program with HTML/CSS and Spring Boot",
        ],
      },
      {
        period: "2020.04 - 2020.08",
        company: "Woonkim",
        role: "Founder",
        details: [
          "Led web planning, design, and frontend delivery through SI projects",
        ],
      },
      {
        period: "2018.12 - 2020.04",
        company: "WECOM Co., Ltd.",
        role: "Associate Researcher",
        details: [
          "Handled frontend for in-house solution mobile web and websites",
        ],
      },
    ],
    fields: {
      name: "Name",
      role: "Role",
      headline: "Headline",
      bio: "About",
      location: "Location",
      email: "Email",
      skills: "Core Skills",
      availability: "Availability",
    },
    preview: {
      location: "Location",
      email: "Email",
      availability: "Availability",
      skills: "Key Skills",
    },
  },
  hero: {
    title: "TBD",
    desc: "TBD TBD TBD",
    keyword: "Operational Frontend",
    photoCaption: "Photography helps me practice noticing details.",
    ctaProjects: "View Projects",
    ctaResume: "Resume",
  },
  home: {
    featured: {
      title: "Featured Project",
      subtitle:
        "A key project that best represents the current portfolio direction.",
      badge: "Featured Case",
      cta: "View all projects",
    },
    interests: {
      title: "My Interests",
      subtitle:
        "I keep growing through both deep technical exploration and personal creative practice.",
      techTag: "Frontend",
      techTitle: "Technical Interests",
      techKeywords: [
        { label: "React", href: "https://react.dev/" },
        { label: "TypeScript", href: "https://www.typescriptlang.org/" },
        { label: "TanStack Query", href: "https://tanstack.com/query/latest" },
        { label: "State Architecture" },
        { label: "UX Reliability" },
        { label: "Web Performance", href: "https://web.dev/performance/" },
      ],
      personalTag: "Photography",
      personalTitle: "Personal Interest",
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
    desc: "Selected cases highlighting operational experience.",
    all: "All",
    view: "View Case Study",
    visitSite: "Visit site",
    privateUiNote: "Some parts of the real UI are private",
  },
  skills: {
    title: "Skills",
    desc: "Organized technical capabilities.",
    sortedBy: "Sorted by hiring preference",
    overview: {
      total: "Total Skills",
      strong: "Advanced+",
      average: "Average Level",
    },
    level: {
      expert: "Expert",
      advanced: "Advanced",
      intermediate: "Intermediate",
      basic: "Basic",
    },
    tabs: {
      all: "All",
      frontend: "Frontend",
      tooling: "Tooling",
      infra: "Infra",
    },
    categoryLabel: {
      frontend: "Frontend",
      tooling: "Tools/Collab",
      infra: "Infrastructure",
    },
  },
  reliability: {
    title: "Reliability",
    desc: "I care about the details that turn nice UI into stable service.",
    summary: [
      { label: "Core Principles", value: "5", desc: "Standards for stable operations" },
      { label: "Review Angles", value: "3", desc: "State, failure, release impact" },
      { label: "Release Style", value: "Small Batch", desc: "Ship small and verify fast" },
    ],
    principles: "Working Principles",
    firstChecks: "First Checks",
    checklist: [
      "Do loading, error, and empty states connect naturally within the user flow?",
      "Are duplicate requests, race conditions, and boundary inputs structurally guarded?",
      "Is the release scope small enough with a clear rollback path when issues happen?",
    ],
    items: [
      {
        title: "Failure-friendly UI",
        desc: "Loading, error, and empty states are treated as part of the normal flow, not exceptions.",
      },
      {
        title: "Operable by design",
        desc: "I leave action-level logs and reproducible flows so issues can be traced and fixed quickly.",
      },
      {
        title: "Edge cases first",
        desc: "I think through boundaries, duplicate requests, and race conditions early and handle them structurally.",
      },
      {
        title: "Release mindset",
        desc: "I ship changes in small, controlled slices with an understanding of the branch and release flow.",
      },
      {
        title: "Predictable state flow",
        desc: "State boundaries keep UI predictable even during async updates.",
      },
    ],
  },
  contact: {
    title: "Contact",
    desc: "Open to project proposals, collaboration, and hiring inquiries.",
    badge: "Let's Work Together",
    headline: "If you have a product to build, let's talk.",
    message:
      "I prefer turning requirements into clear, executable scopes and shipping stable increments. Feel free to reach out, even for a short inquiry.",
    sendEmail: "Send Email",
    response: "I usually reply within 24 hours on weekdays.",
    channelsTitle: "Channels",
    channelEmail: "Email",
    channelGithub: "GitHub",
    channelInstagram: "Instagram",
    channelResume: "Resume PDF",
    workTitle: "What I Can Help With",
    workScope: [
      {
        title: "Product UI Development",
        desc: "Frontend implementation for new products and service renewals",
      },
      {
        title: "Admin Experience",
        desc: "Usability and flow improvements for operation-focused admin tools",
      },
      {
        title: "Reliability & Performance",
        desc: "State architecture, API integration, and rendering quality optimization",
      },
    ],
    emailLabel: "Email",
    emailCopy: "Copy email",
    copied: "Copied!",
  },
  modal: {
    closeAria: "Close modal",
    caseStudy: "Case Study",
    close: "Close",
    problem: "Problem",
    approach: "Approach",
    reliabilityOps: "Reliability / Ops",
    result: "Result",
    stack: "Stack",
  },
} as const
