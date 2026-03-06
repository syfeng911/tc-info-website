import { AnimatedSection } from "./animated-section"
import {
  AlertTriangle,
  DollarSign,
  UserX,
  FileWarning,
  CheckCircle2,
  TrendingDown,
  Users,
  ShieldCheck,
} from "lucide-react"

const painPoints = [
  {
    icon: DollarSign,
    title: "高額人事成本",
    desc: "雇用一位專職資訊人員，年薪加勞健保、勞退等，年開銷輕鬆超過 60 萬元。",
  },
  {
    icon: UserX,
    title: "人員離職風險",
    desc: "資訊人員離職時，系統密碼、架構文件、維護紀錄往往交接不全，新人接手困難重重。",
  },
  {
    icon: FileWarning,
    title: "知識斷層危機",
    desc: "許多關鍵設定只存在資訊人員腦中，一旦人員異動，企業可能面臨系統癱瘓風險。",
  },
]

const benefits = [
  {
    icon: TrendingDown,
    title: "大幅降低成本",
    desc: "每月只需數千元，即享有專業級的IT支援，不到雇用員工的十分之一。",
  },
  {
    icon: Users,
    title: "專業團隊支援",
    desc: "不只一位工程師，而是整個專業團隊為您服務，知識與經驗不再侷限於單一個人。",
  },
  {
    icon: ShieldCheck,
    title: "完整文件紀錄",
    desc: "所有維護紀錄、系統架構、帳號密碼均有完整文件備份，永遠不怕交接問題。",
  },
]

export function OutsourcingSection() {
  return (
    <section
      id="outsourcing"
      className="bg-secondary py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            為什麼選擇委外？
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            資訊委外，企業的聰明選擇
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            自聘 IT 人員看似方便，卻隱含高額成本與離職交接不全的風險
          </p>
        </AnimatedSection>

        {/* Pain points */}
        <div className="mb-16">
          <AnimatedSection className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              自行雇用資訊人員的痛點
            </h3>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-3">
            {painPoints.map((p, i) => (
              <AnimatedSection
                key={p.title}
                delay={([0, 200, 400] as const)[i]}
              >
                <div className="rounded-xl border border-destructive/20 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                    <p.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h4 className="mb-2 text-base font-bold text-card-foreground">
                    {p.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <AnimatedSection className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              選擇天承資訊委外的優勢
            </h3>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-3">
            {benefits.map((b, i) => (
              <AnimatedSection
                key={b.title}
                delay={([0, 200, 400] as const)[i]}
              >
                <div className="rounded-xl border border-primary/20 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="mb-2 text-base font-bold text-card-foreground">
                    {b.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {b.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
