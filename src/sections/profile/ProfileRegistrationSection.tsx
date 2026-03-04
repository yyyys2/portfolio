import FadeIn from "@/components/animation/FadeIn"
import Card from "@/components/ui/Card"
import Section from "@/components/ui/Section"
import { useI18n } from "@/hooks/useI18n.ts"

const profileHighlights = [
  "사용자 경험의 디테일을 놓치지 않는 프론트엔드 개발자",
  "실서비스와 관리자 시스템을 모두 다뤄온 운영형 개발 경험",
  "React·TypeScript 기반 구조화, 상태관리, API 연동, 성능 개선 중심",
]

const experience = [
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
]

const profileSummaryByLang = {
  ko: {
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
  en: {
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
} as const

export default function ProfileRegistrationSection() {
  const { t, lang } = useI18n()
  const profileSummary = profileSummaryByLang[lang]

  const intro =
    lang === "ko"
      ? "안녕하세요. 여행지의 순간을 사진으로 기록하듯, 사용자 경험의 디테일을 놓치지 않는 프론트엔드 개발자 김윤영입니다."
      : "Hello. I am Yunyeong Kim, a frontend developer who treats user experience with the same attention to detail used to capture meaningful moments in travel photography."

  return (
    <Section
      id="profile"
      title={t("profile.title")}
      className="py-28"
    >
      <div className="grid gap-6">
        <FadeIn>
          <Card className="relative overflow-hidden p-0">
            <div className="bg-soft-gradient px-6 py-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                Frontend Developer
              </p>
              <div className="mt-4 flex flex-wrap items-end gap-4">
                <div className="overflow-hidden inline-flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/90 font-display text-4xl font-semibold text-gray-900 shadow-card">
                  <img src={"public/assets/images/profile/profile.jpeg"} alt="" />
                </div>
                <div>
                  <h3 className="font-display text-4xl font-semibold tracking-tight">
                    김윤영
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85">
                    {intro}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 bg-white p-6 dark:bg-neutral-900">
              <div className="grid gap-3 sm:grid-cols-3">
                {profileSummary.stats.map((item, index) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-black/5 bg-white px-5 py-5 dark:border-white/10 dark:bg-neutral-800"
                  >
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-neutral-400">
                      {item.label}
                    </p>
                    <p
                      className={`mt-3 font-display text-3xl font-semibold tracking-tight ${
                        index === 0
                          ? "text-primary-strong"
                          : index === 1
                            ? "text-secondary"
                            : "text-emerald-500"
                      }`}
                    >
                      {item.value}
                    </p>
                    <p className="font-display mt-2 text-sm text-gray-600 dark:text-neutral-300">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {profileSummary.cards.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-black/5 bg-neutral-50 px-5 py-5 dark:border-white/10 dark:bg-neutral-800"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-2xl text-[10px] font-semibold tracking-wider text-white ${
                          index === 0
                            ? "bg-primary-strong"
                            : index === 1
                              ? "bg-secondary"
                              : "bg-accent"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-gray-900 dark:text-neutral-100">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-neutral-300">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 dark:text-neutral-400">
                  Strengths
                </p>
                <div className="mt-3 grid gap-3">
                  {profileHighlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-black/5 px-4 py-3 text-sm text-gray-700 dark:border-white/10 dark:text-neutral-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.06}>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 dark:text-neutral-400">
              Career
            </p>
            <div className="mt-4 grid gap-5">
              {experience.map((item) => (
                <div
                  key={`${item.period}-${item.company}`}
                  className="border-l-2 border-primary/40 pl-4"
                >
                  <p className="text-xs font-semibold text-gray-400 dark:text-neutral-400">
                    {item.period}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold tracking-tight text-gray-900 dark:text-neutral-100">
                    {item.company}
                  </p>
                  <p className="mt-1 text-sm font-medium text-primary-strong">
                    {item.role}
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-gray-600 dark:text-neutral-300">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </FadeIn>
      </div>
    </Section>
  )
}
