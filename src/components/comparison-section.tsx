import { AnimatedSection } from "./animated-section"
import {
  Check,
  X,
  DollarSign,
  HeartPulse,
  BrainCircuit,
  LogOut,
  Zap,
  Lightbulb,
  CalendarOff,
  FileText,
} from "lucide-react"

const comparisonItems = [
  {
    icon: DollarSign,
    category: "每月人事成本",
    inhouse: "約 $50,000 ~ $70,000",
    outsource: "約 $3,000 ~ $8,000",
    highlight: true,
  },
  {
    icon: HeartPulse,
    category: "勞健保/勞退開銷",
    inhouse: "額外負擔",
    outsource: "完全免除",
    highlight: false,
  },
  {
    icon: BrainCircuit,
    category: "專業技能廣度",
    inhouse: "受限單一人員",
    outsource: "整個團隊支援",
    highlight: false,
  },
  {
    icon: LogOut,
    category: "人員離職風險",
    inhouse: "交接不全，知識流失",
    outsource: "團隊服務，完整文件",
    highlight: true,
  },
  {
    icon: Zap,
    category: "資安防護能力",
    inhouse: "依賴個人資安意識",
    outsource: "專業防護，定期資安稽核",
    highlight: false,
  },
  {
    icon: Lightbulb,
    category: "技術更新能力",
    inhouse: "需自行進修培訓",
    outsource: "團隊持續精進",
    highlight: false,
  },
  {
    icon: CalendarOff,
    category: "假日/病假覆蓋",
    inhouse: "無人替代",
    outsource: "團隊輪值不間斷",
    highlight: true,
  },
  {
    icon: FileText,
    category: "系統文件完整性",
    inhouse: "因人而異",
    outsource: "標準化文件管理",
    highlight: false,
  },
]

const summaryStats = [
  { label: "節省人事成本", value: "高達 90%", icon: DollarSign },
  { label: "資安防護能力", value: "專業防護", icon: Zap },
  { label: "整合專業技能", value: "全團隊", icon: BrainCircuit },
]

export function ComparisonSection() {
  return (
    <section id="comparison" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            一目了然
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            自聘 vs 委外，完整比較
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            透過下方表格，清楚看出資訊委外如何幫您省錢、省心、省風險
          </p>
        </AnimatedSection>

        {/* Summary stat cards */}
        <AnimatedSection className="mb-12 grid grid-cols-3 gap-4">
          {summaryStats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 py-5 px-3 text-center shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xl font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection>
          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-xl border border-border shadow-lg sm:block">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    比較項目
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/30">
                        <X className="h-3.5 w-3.5" />
                      </div>
                      自行雇用
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      天承委外
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, i) => (
                  <tr
                    key={item.category}
                    className={`border-t border-border transition-colors hover:bg-secondary/50 ${
                      item.highlight ? "bg-primary/5" : i % 2 === 0 ? "bg-card" : "bg-background"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {item.category}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/8 px-3 py-1">
                        <X className="h-3.5 w-3.5 text-destructive" />
                        {item.inhouse}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-primary">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1">
                        <Check className="h-3.5 w-3.5" />
                        {item.outsource}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="flex flex-col gap-4 sm:hidden">
            {comparisonItems.map((item) => (
              <div
                key={item.category}
                className={`rounded-xl border p-4 ${
                  item.highlight
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground">
                    {item.category}
                  </h4>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2 rounded-lg bg-destructive/5 px-3 py-2">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">
                        自行雇用
                      </span>
                      <p className="text-sm text-foreground">{item.inhouse}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg bg-primary/5 px-3 py-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">
                        天承委外
                      </span>
                      <p className="text-sm font-medium text-primary">
                        {item.outsource}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-12 text-center">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
            <h3 className="mb-2 text-xl font-bold text-foreground">
              每月省下數萬元，立即開始委外
            </h3>
            <p className="mb-6 text-muted-foreground">
              讓天承資訊成為您最可靠的IT後盾，把資源專注在核心業務上
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg"
            >
              立即諮詢
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
