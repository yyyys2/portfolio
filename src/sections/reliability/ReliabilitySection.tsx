import Section from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import FadeIn from "@/components/animation/FadeIn"
import {useI18n} from "@/hooks/useI18n.ts";

const items = [
    {
        key: "states",
        ko: { title: "Failure-friendly UI", desc: "로딩/에러/빈 상태를 기본값으로 설계해 운영 리스크를 줄입니다." },
        en: { title: "Failure-friendly UI", desc: "I treat loading/error/empty states as defaults to reduce ops risk." },
    },
    {
        key: "logging",
        ko: { title: "Operable by design", desc: "액션 단위 로깅 포인트와 재현 가능한 흐름을 남겨 문제 해결 속도를 높입니다." },
        en: { title: "Operable by design", desc: "Action-level logs and reproducible flows accelerate debugging." },
    },
    {
        key: "edges",
        ko: { title: "Edge cases first", desc: "경계값/중복 요청/레이스 컨디션을 먼저 정의하고 구조로 막습니다." },
        en: { title: "Edge cases first", desc: "I define boundaries/duplicates/races first and block them structurally." },
    },
    {
        key: "release",
        ko: { title: "Release mindset", desc: "브랜치/릴리즈 흐름을 이해하고, 변경 영향을 줄이는 단위로 배포합니다." },
        en: { title: "Release mindset", desc: "I ship in impact-limiting slices with release/branch awareness." },
    },
]

export default function ReliabilitySection() {
    const { lang, t } = useI18n()

    return (
        <Section id="reliability" title={t("reliability.title")} subtitle={t("reliability.desc")}>
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