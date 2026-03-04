import Section from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { useI18n } from "@/hooks/useI18n.ts"

const EMAIL = "bellelaide1005@gmail.com"

export default function ContactSection() {
  const { t } = useI18n()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      alert("Copied!")
    } catch {
      // ignore
    }
  }

  return (
    <Section
      id="contact"
      title={t("contact.title")}
      subtitle={t("contact.desc")}
    >
      <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="mt-1 font-display text-lg font-semibold tracking-tight text-gray-900">
            {EMAIL}
          </p>
        </div>

        <div className="flex gap-2">
          <Button onClick={copyEmail}>{t("contact.emailCopy")}</Button>
          <Button
            variant="ghost"
            onClick={() => window.open("https://github.com/yyyys2", "_blank")}
          >
            GitHub
          </Button>
        </div>
      </Card>
    </Section>
  )
}
