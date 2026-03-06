import { AnimatedSection } from "./animated-section"
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Printer,
} from "lucide-react"

const contacts = [
  {
    icon: MapPin,
    label: "地址",
    value: "桃園市中壢區明德南路10-1號",
    href: "https://maps.google.com/?q=桃園市中壢區明德南路10-1號",
  },
  {
    icon: Phone,
    label: "手機",
    value: "0955-685641",
    href: "tel:0955685641",
  },
  {
    icon: Printer,
    label: "傳真",
    value: "03-2812667",
    href: "tel:032812667",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "gfc_syfeng@hotmail.com",
    href: "mailto:gfc_syfeng@hotmail.com",
  },
  {
    icon: Globe,
    label: "網站",
    value: "www.tc-info.com.tw",
    href: "https://www.tc-info.com.tw",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "天承資訊粉絲團",
    href: "https://facebook.com/tcinfo911",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            與我們聯繫
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            聯絡我們
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            有任何IT問題或服務需求，歡迎隨時與我們聯繫
          </p>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact cards */}
          <AnimatedSection direction="left">
            <div className="grid gap-4 sm:grid-cols-2">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="truncate text-sm font-semibold text-card-foreground group-hover:text-primary">
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Map embed */}
          <AnimatedSection direction="right">
            <div className="h-full min-h-[320px] overflow-hidden rounded-xl border border-border shadow-sm">
              <iframe
                title="天承資訊位置"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.3!2d121.2168!3d24.9575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823d73e4fffff%3A0x5e2ef5fc1b6cc5b4!2z5qGD5ZyS5biC5Lit5aOi5Y2A5piO5b635Y2X6Lev!5e0!3m2!1szh-TW!2stw!4v1700000000000"
                className="h-full w-full border-0 min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
