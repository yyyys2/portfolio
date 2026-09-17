import SiteHeader from "@/components/layout/SiteHeader"
import ContactView from "@/components/contact/ContactView"
import "@/styles/home.css"
import "@/styles/contact.css"

export default function ContactPage() {
  return <div className="contact-page"><SiteHeader /><ContactView /></div>
}
