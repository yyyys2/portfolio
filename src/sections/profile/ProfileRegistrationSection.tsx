import FadeIn from "@/components/animation/FadeIn"
import Card from "@/components/ui/Card"
import Section from "@/components/ui/Section"
import { useI18n } from "@/hooks/useI18n.ts"

type ProfileStat = {
  label: string
  value: string
  desc: string
}

type ProfileCard = {
  title: string
  icon: string
  body: string
}

type ExperienceItem = {
  period: string
  company: string
  role: string
  details: string[]
}

export default function ProfileRegistrationSection() {
  const { t, tm } = useI18n()

  const profileSummary = tm<{ stats: ProfileStat[]; cards: ProfileCard[] }>(
    "profile.summary"
  )
  const profileHighlights = tm<string[]>("profile.highlights")
  const experience = tm<ExperienceItem[]>("profile.experience")

  return (
    <Section id="profile" title={t("profile.title")} className="py-28">
      <div className="grid gap-6">
        <FadeIn>
          <Card className="relative overflow-hidden p-0">
            <div className="relative overflow-hidden border-b-2 border-primary/35 bg-white px-6 py-8 text-gray-900 dark:border-primary/45 dark:bg-neutral-800 dark:text-neutral-100">
              <div
                className="pointer-events-none absolute inset-0 opacity-100 dark:hidden"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 12% 18%, rgba(184,192,255,0.35) 0, transparent 18%), radial-gradient(circle at 32% 72%, rgba(250,218,221,0.38) 0, transparent 17%), radial-gradient(circle at 58% 28%, rgba(197,255,235,0.32) 0, transparent 19%), radial-gradient(circle at 78% 60%, rgba(184,192,255,0.28) 0, transparent 16%), radial-gradient(circle at 92% 22%, rgba(250,218,221,0.34) 0, transparent 14%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 hidden opacity-100 dark:block"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 10% 16%, rgba(94,119,255,0.22) 0, transparent 18%), radial-gradient(circle at 28% 74%, rgba(245,113,178,0.2) 0, transparent 16%), radial-gradient(circle at 54% 26%, rgba(85,220,189,0.18) 0, transparent 18%), radial-gradient(circle at 76% 62%, rgba(94,119,255,0.17) 0, transparent 16%), radial-gradient(circle at 90% 20%, rgba(245,113,178,0.18) 0, transparent 14%)",
                }}
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500 dark:text-neutral-400">
                  {t("profile.roleLabel")}
                </p>
                <div className="mt-4 flex flex-wrap items-end gap-4">
                  <div className="inline-flex h-24 w-24 items-center justify-center overflow-hidden rounded-[2rem] bg-white/90 font-display text-4xl font-semibold text-gray-900 shadow-card dark:bg-neutral-700">
                    <img
                      src={"public/assets/images/profile/profile.jpeg"}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-4xl font-semibold tracking-tight">
                      {t("profile.name")}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-700 dark:text-neutral-300">
                      {t("profile.intro")}
                    </p>
                  </div>
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
                    <p className="mt-2 font-display text-sm text-gray-600 dark:text-neutral-300">
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
                  {t("profile.strengthsTitle")}
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
              {t("profile.careerTitle")}
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
