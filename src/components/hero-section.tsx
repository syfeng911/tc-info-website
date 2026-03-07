import { useEffect, useState } from "react"
import { ChevronDown, Shield, Clock, Wrench } from "lucide-react"
import heroBg from "@/assets/hero-bg.jpg"

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${heroBg}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-sm font-medium text-white/90">
              專業資訊委外服務
            </span>
          </div>
        </div>

        <h1
          className={`mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          省去高額人事成本
          <br />
          <span style={{ color: "hsl(38, 95%, 68%)" }}>專業IT團隊為您服務</span>
        </h1>

        <p
          className={`mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 sm:text-xl transition-all duration-1000 delay-500 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          不必擔心資訊人員離職交接不全，天承資訊提供完整的資訊委外服務，
          讓您的企業享有專業IT支援，卻只需要一小部分的成本。
        </p>

        <div
          className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-1000 delay-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-xl"
          >
            免費諮詢
          </a>
          <a
            href="#outsourcing"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("outsourcing")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            了解委外優勢
          </a>
        </div>

        {/* Feature badges */}
        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 transition-all duration-1000 delay-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {[
            { icon: Shield, label: "專業可靠" },
            { icon: Clock, label: "36小時內到場" },
            { icon: Wrench, label: "遠端即時支援" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-white/70">
              <item.icon className="h-5 w-5" style={{ color: "hsl(38, 95%, 68%)" }} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60 transition-colors hover:text-white"
        aria-label="Scroll to services"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
