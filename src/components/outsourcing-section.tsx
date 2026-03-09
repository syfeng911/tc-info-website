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
  Banknote,
  BookOpen,
  Clock,
  Headphones,
  RotateCcw,
  Star,
  X,
} from "lucide-react"
import outsourcePain from "@/assets/outsource-pain.jpg"
import outsourceBenefit from "@/assets/service-outsource.jpg"

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

const compareRows = [
  {
    icon: Banknote,
    label: "月均費用",
    self: "50,000＋元",
    outsource: "數千元起",
    selfBad: true,
  },
  {
    icon: RotateCcw,
    label: "離職交接",
    self: "風險極高",
    outsource: "完整文件，無縫銜接",
    selfBad: true,
  },
  {
    icon: BookOpen,
    label: "知識累積",
    self: "個人為主，易流失",
    outsource: "團隊共有，持續累積",
    selfBad: true,
  },
  {
    icon: Clock,
    label: "問題回應",
    self: "受假期、病假影響",
    outsource: "遠端即時＋36小時到場",
    selfBad: true,
  },
  {
    icon: Headphones,
    label: "技術廣度",
    self: "受限單一人員專長",
    outsource: "多領域工程師團隊",
    selfBad: true,
  },
  {
    icon: Star,
    label: "服務年資",
    self: "隨人員更換歸零",
    outsource: "十餘年深耕在地",
    selfBad: true,
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

        {/* ── Comparison Table ── */}
        <AnimatedSection className="mb-20">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted">
              <div className="px-4 py-4 text-sm font-semibold text-muted-foreground" />
              <div className="flex items-center justify-center gap-2 border-l border-border px-4 py-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-destructive/15">
                  <X className="h-4 w-4 text-destructive" />
                </div>
                <span className="text-sm font-bold text-destructive">自行雇用</span>
              </div>
              <div className="flex items-center justify-center gap-2 border-l border-border bg-primary/10 px-4 py-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-bold text-primary">天承資訊委外</span>
              </div>
            </div>

            {/* Rows */}
            {compareRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 border-t border-border transition-colors hover:bg-muted/40 ${
                  i % 2 === 0 ? "bg-card" : "bg-background"
                }`}
              >
                {/* Label */}
                <div className="flex items-center gap-2.5 px-4 py-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <row.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{row.label}</span>
                </div>

                {/* Self-hire */}
                <div className="flex items-center justify-center border-l border-border px-4 py-4">
                  <span className="text-center text-sm font-medium text-destructive/80">
                    {row.self}
                  </span>
                </div>

                {/* Outsource */}
                <div className="flex items-center justify-center border-l border-border bg-primary/5 px-4 py-4">
                  <span className="text-center text-sm font-semibold text-primary">
                    {row.outsource}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Pain points */}
        <div className="mb-20">
          <AnimatedSection className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              自行雇用資訊人員的痛點
            </h3>
          </AnimatedSection>

          {/* Image + cards layout */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Photo */}
            <AnimatedSection direction="left">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={outsourcePain}
                  alt="企業IT困境"
                  className="h-72 w-full object-cover lg:h-96"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-xl bg-destructive/85 px-5 py-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-white">
                      💸 自聘資訊人員年均成本超過 60 萬元
                    </p>
                    <p className="mt-0.5 text-xs text-white/80">
                      包含薪資、勞健保、勞退、教育訓練及管理成本
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Cards */}
            <AnimatedSection direction="right">
              <div className="flex flex-col gap-5">
                {painPoints.map((p) => (
                  <div
                    key={p.title}
                    className="flex items-start gap-4 rounded-xl border border-destructive/20 bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                      <p.icon className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-base font-bold text-card-foreground">
                        {p.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
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

          {/* Cards + Photo layout (reversed) */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Cards */}
            <AnimatedSection direction="left">
              <div className="flex flex-col gap-5">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="flex items-start gap-4 rounded-xl border border-primary/20 bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <b.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-base font-bold text-card-foreground">
                        {b.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Photo */}
            <AnimatedSection direction="right">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={outsourceBenefit}
                  alt="天承資訊委外服務"
                  className="h-72 w-full object-cover lg:h-96"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-xl bg-primary/85 px-5 py-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-primary-foreground">
                      ✅ 專業團隊，每月只需自聘費用的十分之一
                    </p>
                    <p className="mt-0.5 text-xs text-primary-foreground/80">
                      十餘年經驗、完整文件、快速回應，讓企業安心專注本業
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
