import { AnimatedSection } from "./animated-section"
import { Monitor, Server, Network, Home, Handshake, MapPin } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "電腦組裝維修",
    desc: "根據您的需求提出建議，給出最適合的方案。十餘年的維修經驗，讓您的電腦保固無後顧之憂。",
    bg: "hsl(220, 60%, 95%)",
  },
  {
    icon: Server,
    title: "伺服器維護",
    desc: "各種伺服器架設與設定：DOMAIN、SQL、WEB、FTP、MAIL SERVER，ERP 連線、印表機連線均精通。",
    bg: "hsl(200, 60%, 95%)",
  },
  {
    icon: Network,
    title: "網路架構設置",
    desc: "辦公室網路整體規畫、防火牆設定、DMZ架構，讓伺服器更安全，網路更迅速。",
    bg: "hsl(240, 60%, 95%)",
  },
  {
    icon: Home,
    title: "到府維修安裝",
    desc: "在現場才能看到真實的情況，免除搬運電腦之苦，更能準確判斷問題所在，迅速解決。",
    bg: "hsl(220, 60%, 95%)",
  },
  {
    icon: Handshake,
    title: "資訊委外服務",
    desc: "省去雇用資訊人員的大筆開銷，我們不只維修電腦，更是您公司的資訊顧問。正確的資訊讓您不走冤枉路。",
    bg: "hsl(200, 60%, 95%)",
  },
  {
    icon: MapPin,
    title: "服務範圍",
    desc: "服務範圍涵蓋大桃園地區：桃園區、中壢區、平鎮區及周邊地區。歡迎來信、來電或粉絲團留言。",
    bg: "hsl(240, 60%, 95%)",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            服務項目
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            全方位的資訊服務
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            從電腦維修到伺服器維護，從網路架構到資訊委外，一站式解決您的所有IT需求
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <AnimatedSection
              key={svc.title}
              delay={i < 3 ? ([0, 200, 400] as const)[i] : ([0, 200, 400] as const)[i - 3]}
            >
              <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Icon header */}
                <div
                  className="flex h-40 items-center justify-center"
                  style={{ background: svc.bg }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/90 text-primary-foreground shadow-md transition-transform duration-300 group-hover:scale-110">
                    <svc.icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-card-foreground">
                    {svc.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {svc.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
