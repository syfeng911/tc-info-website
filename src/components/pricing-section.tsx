import { AnimatedSection } from "./animated-section"
import { Check, Star } from "lucide-react"

const features = [
  "保固內免維修費",
  "軟硬體咨詢服務",
  "36小時內到場",
  "遠端連線處理",
  "線上故障排除",
  "軟體重新設定",
]

const plans = [
  { range: "1 ~ 5 台", price: "450", popular: false },
  { range: "6 ~ 10 台", price: "400", popular: false },
  { range: "10 ~ 20 台", price: "350", popular: true },
  { range: "21 台以上", price: "300", popular: false },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            透明價格
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            維護合約方案
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            台數越多、單價越低，所有方案均包含完整的維護服務
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <AnimatedSection
              key={plan.range}
              delay={([0, 200, 400, 400] as const)[i]}
            >
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.popular
                    ? "border-primary bg-primary/5 shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="flex items-center justify-center gap-1 bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                    <Star className="h-3 w-3" />
                    最多客戶選擇
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-1 text-sm font-medium text-muted-foreground">
                    電腦台數
                  </h3>
                  <p className="mb-4 text-lg font-bold text-card-foreground">
                    {plan.range}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-muted-foreground">$</span>
                      <span
                        className={`text-4xl font-bold ${
                          plan.popular ? "text-primary" : "text-card-foreground"
                        }`}
                      >
                        {plan.price}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      每台 / 每月
                    </p>
                  </div>

                  <ul className="mb-6 flex flex-1 flex-col gap-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-lg bg-secondary/80 px-4 py-3 text-center text-sm text-muted-foreground">
                    伺服器另計{" "}
                    <span className="font-semibold text-card-foreground">
                      $2,000
                    </span>
                    /台/月
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
