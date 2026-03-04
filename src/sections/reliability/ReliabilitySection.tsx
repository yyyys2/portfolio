import Section from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import FadeIn from "@/components/animation/FadeIn"
import { useI18n } from "@/hooks/useI18n.ts"

const items = [
  {
    key: "states",
    ko: {
      title: "Failure-friendly UI",
      desc: "로딩, 에러, 빈 상태를 예외가 아니라 기본 흐름으로 두고 UI를 설계합니다.",
    },
    en: {
      title: "Failure-friendly UI",
      desc: "Loading, error, and empty states are treated as part of the normal flow, not exceptions.",
    },
  },
  {
    key: "logging",
    ko: {
      title: "Operable by design",
      desc: "문제가 생겼을 때 빠르게 원인을 찾을 수 있도록 액션 단위의 로그와 재현 가능한 흐름을 남깁니다.",
    },
    en: {
      title: "Operable by design",
      desc: "I leave action-level logs and reproducible flows so issues can be traced and fixed quickly.",
    },
  },
  {
    key: "edges",
    ko: {
      title: "Edge cases first",
      desc: "경계값, 중복 요청, 레이스 컨디션 같은 상황을 먼저 떠올리고 구조적으로 방지합니다.",
    },
    en: {
      title: "Edge cases first",
      desc: "I think through boundaries, duplicate requests, and race conditions early and handle them structurally.",
    },
  },
  {
    key: "release",
    ko: {
      title: "Release mindset",
      desc: "브랜치와 릴리즈 흐름을 이해하고, 변경 영향을 최소화하는 단위로 나누어 배포합니다.",
    },
    en: {
      title: "Release mindset",
      desc: "I ship changes in small, controlled slices with an understanding of the branch and release flow.",
    },
  },
  {
    key: "state",
    ko: {
      title: "Predictable state flow",
      desc: "비동기 흐름에서도 UI 상태가 예측 가능하도록 상태 경계를 명확히 나눕니다.",
    },
    en: {
      title: "Predictable state flow",
      desc: "State boundaries keep UI predictable even during async updates.",
    },
  },
]

export default function ReliabilitySection() {
  const { lang, t } = useI18n()

  return (
    <Section
      id="reliability"
      title={t("reliability.title")}
      subtitle={t("reliability.desc")}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((x, i) => (
          <FadeIn key={x.key} delay={i * 0.04}>
            <Card>
              <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                {lang === "ko" ? x.ko.title : x.en.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {lang === "ko" ? x.ko.desc : x.en.desc}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
