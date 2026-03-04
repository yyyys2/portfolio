export const en = {
  app: {
    footer: {
      thanks: "Thanks for reading all the way through. Have a great day :)",
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
    desc: "A focused summary of my profile and practical experience.",
    formTitle: "Build Your Profile Draft",
    formDesc:
      "Organize your name, intro, and skills to quickly shape a polished profile section.",
    helper: "Any edits are reflected in the preview instantly.",
    submit: "Save Profile",
    saved: "Last saved:",
    roleLabel: "Frontend Developer",
    name: "Kim Yun Young",
    intro:
      "Hello. I am Kim Yun Young, a frontend developer who treats user experience with the same attention to detail used to capture meaningful moments in travel photography.",
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
    title: "Frontend Engineer Focused on Reliable Product UX",
    desc: "I build UI that is not only polished on the surface but also dependable in real production environments.",
    keyword: "Operational Frontend",
    photoCaption: "Photography helps me practice noticing details.",
    ctaProjects: "View Projects",
    ctaResume: "Resume",
  },
  home: {
    featured: {
      title: "Featured Project",
      subtitle:
        "Projects that best represent how I work today.",
      badge: "Featured Case",
      cta: "View all projects",
    },
    interests: {
      title: "My Interests",
      subtitle:
        "I keep growing through both technical deep dives and creative personal practice.",
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
    desc: "Selected projects that reflect real operational experience.",
    all: "All",
    view: "View Case Study",
    visitSite: "Visit site",
    privateUiNote: "Some parts of the real UI are private",
  },
  skills: {
    title: "Skills",
    desc: "Technologies I use consistently in real work.",
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
    desc: "I care about the details that make polished UI stay stable in production.",
    summary: [
      {
        label: "Core Principles",
        value: "5",
        desc: "Standards for stable operations",
      },
      {
        label: "Review Angles",
        value: "3",
        desc: "State, failure, release impact",
      },
      {
        label: "Release Style",
        value: "Small Batch",
        desc: "Ship small and verify fast",
      },
    ],
    principles: "How I Work",
    firstChecks: "What I Check First",
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
    desc: "Open to career opportunities and frontend role inquiries.",
    badge: "Open to Opportunities",
    headline: "If you're hiring for a frontend role, I'd love to connect.",
    message:
      "I want to contribute to product teams with strong ownership and practical execution.",
    sendEmail: "Send Email",
    response: "I usually reply within a day on weekdays.",
    channelsTitle: "Where to Reach Me",
    channelEmail: "Email",
    channelGithub: "GitHub",
    channelInstagram: "Instagram",
    channelResume: "Resume PDF",
    workTitle: "Preferred Roles",
    workScope: [
      {
        title: "Frontend Engineer",
        desc: "Product development with React and TypeScript",
      },
      {
        title: "Operations-focused Role",
        desc: "Roles that include real service operations and maintenance",
      },
      {
        title: "Product Improvement Team",
        desc: "Teams focused on performance, reliability, and UX quality",
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
    problem: "What Was the Problem",
    approach: "How I Solved It",
    reliabilityOps: "Reliability / Ops",
    result: "What Changed",
    stack: "Stack",
  },
} as const
