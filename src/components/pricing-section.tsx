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
        <AnimatedSection className="mb-16 text-center" animation="spring">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary transition-transform duration-300 hover:scale-110">
            透明價格
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            維護合約方案
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            台數越多、單價越低，所有方案均包含完整的維護服務
          </p>
        </AnimatedSection>

        <div className="flex items-stretch justify-center gap-4 flex-wrap">
          {plans.map((plan, i) => (
            <AnimatedSection
              key={plan.range}
              delay={([0, 100, 200, 300] as const)[i]}
              animation="bounce"
            >
              <div className={`group relative w-[260px] ${plan.popular ? "scale-110 z-10" : ""}`}>
                {/* Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 z-10 flex justify-center">
                    <div className="flex items-center gap-1.5 rounded-full bg-primary px-6 py-2 text-sm font-bold text-primary-foreground shadow-lg transition-all duration-300 group-hover:bg-primary/90">
                      <Star className="h-4 w-4 animate-icon-bounce" />
                      最多客戶選擇
                    </div>
                  </div>
                )}

                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    plan.popular
                      ? "border-primary bg-primary/5 shadow-primary/10 animate-glow-pulse"
                      : "border-border bg-card hover:border-primary/30"
                  }`}
                >
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-1 text-sm font-medium text-muted-foreground">
                      電腦台數
                    </h3>
                    <p className="mb-4 text-lg font-bold text-card-foreground transition-colors duration-300 group-hover:text-primary">
                      {plan.range}
                    </p>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-muted-foreground">$</span>
                        <span
                          className={`text-4xl font-bold transition-all duration-300 group-hover:scale-110 origin-left ${
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
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 group-hover:translate-x-1">
                          <Check className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:scale-125" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-lg bg-secondary/80 px-4 py-3 text-center text-sm text-muted-foreground transition-all duration-300 group-hover:bg-secondary group-hover:shadow-inner">
                      伺服器另計{" "}
                      <span className="font-semibold text-card-foreground">
                        $2,000
                      </span>
                      /台/月
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
