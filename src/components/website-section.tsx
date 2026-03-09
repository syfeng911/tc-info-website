import { AnimatedSection } from "./animated-section"
import { Globe, Server, ShieldCheck, Upload, Wrench, DatabaseBackup, CheckCircle2, Star } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "網域申請",
    desc: "協助選購適合的網域名稱，完成 DNS 設定，讓品牌網址立即上線。",
  },
  {
    icon: Server,
    title: "VPS 架設",
    desc: "建置穩定的虛擬私人伺服器，安裝並優化網頁伺服器環境。",
  },
  {
    icon: ShieldCheck,
    title: "SSL 證書申請",
    desc: "申請並安裝 SSL/TLS 憑證，確保網站全程加密傳輸、瀏覽器顯示安全鎖頭。",
  },
  {
    icon: Upload,
    title: "網站上傳部署",
    desc: "將您的網站檔案上傳至伺服器，完成設定與測試，確保正常運作。",
  },
  {
    icon: Wrench,
    title: "網站維護",
    desc: "定期更新套件、修復漏洞、處理異常，保持網站持續健康運作。",
  },
  {
    icon: DatabaseBackup,
    title: "定期備份",
    desc: "排程自動備份網站資料與資料庫，發生意外時可快速還原，資料零流失。",
  },
]

const included = [
  "一次付清，省去繁瑣分期",
  "全程協助，不需技術背景",
  "一年內免費維護諮詢",
  "SSL 到期自動續約",
  "網域及 VPS 主機費用已含",
]

export function WebsiteSection() {
  return (
    <section id="website" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            網站架設服務
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            一條龍網站建置方案
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            從網域申請到定期備份，六大流程全包辦，讓您的網站安全穩定上線
          </p>
        </AnimatedSection>

        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12 items-stretch">
          {/* Feature cards - 2/3 width */}
          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <AnimatedSection
                key={f.title}
                delay={([0, 200, 400, 0, 200, 400] as const)[i]}
              >
                <div className="group flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-card-foreground">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Pricing card - 1/3 width */}
          <AnimatedSection delay={200} className="lg:col-span-1 flex flex-col">
            <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-xl shadow-primary/10">
              {/* Popular banner */}
              <div className="flex items-center justify-center gap-2 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                <Star className="h-4 w-4" />
                超值全包方案
              </div>

              <div className="p-7">
                <p className="mb-1 text-sm font-medium text-muted-foreground">年費方案</p>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-lg text-muted-foreground">$</span>
                  <span className="text-6xl font-bold text-primary">10,000</span>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">/ 年，六大服務全包含</p>

                <ul className="mb-7 flex flex-col gap-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="block w-full rounded-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground shadow-md transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                >
                  立即諮詢方案
                </a>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  網域及 VPS 主機費用另計，依實際規格報價
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
