import { useEffect, useState, useCallback } from "react"
import { ChevronDown, Shield, Clock, Wrench, ChevronLeft, ChevronRight } from "lucide-react"
import heroBg1 from "@/assets/hero-bg.jpg"
import heroBg2 from "@/assets/hero-bg-2.jpg"
import heroBg3 from "@/assets/hero-bg-3.jpg"
import heroBg4 from "@/assets/hero-bg-4.jpg"

const slides = [
  {
    bg: heroBg1,
    tag: "專業資訊委外服務",
    title: "省去高額人事成本",
    subtitle: "專業IT團隊為您服務",
    desc: "不必擔心資訊人員離職交接不全，天承資訊提供完整的資訊委外服務，讓您的企業享有專業IT支援，卻只需要一小部分的成本。",
  },
  {
    bg: heroBg2,
    tag: "到府親切服務",
    title: "在您身邊的IT夥伴",
    subtitle: "問題迅速現場解決",
    desc: "我們深入了解您辦公室的實際狀況，免除搬運電腦之苦，快速準確判斷問題所在，讓您的業務不停擺。",
  },
  {
    bg: heroBg3,
    tag: "網路架構專業設置",
    title: "穩定安全的網路環境",
    subtitle: "讓企業運作更順暢",
    desc: "從防火牆設定到整體網路規劃，我們以十餘年的豐富經驗，為您打造最穩固的IT基礎設施。",
  },
  {
    bg: heroBg4,
    tag: "服務大桃園地區",
    title: "深耕桃園在地企業",
    subtitle: "中壢、平鎮、桃園全覆蓋",
    desc: "十餘年深耕大桃園地區，熟悉本地中小企業的IT需求，服務涵蓋桃園區、中壢區、平鎮區及周邊，在地快速響應。",
  },
]

export function HeroSection() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const goTo = useCallback((index: number) => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTransitioning(false)
    }, 400)
  }, [transitioning])

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  const slide = slides[current]

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
          style={{
            backgroundImage: `url('${s.bg}')`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/65 via-foreground/45 to-foreground/75" />

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`切換到第 ${i + 1} 張`}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white/80 backdrop-blur-sm transition-all hover:bg-black/40 hover:text-white sm:left-6"
        aria-label="上一張"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white/80 backdrop-blur-sm transition-all hover:bg-black/40 hover:text-white sm:right-6"
        aria-label="下一張"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span
              key={`tag-${current}`}
              className={`text-sm font-medium text-white/90 transition-opacity duration-400 ${transitioning ? "opacity-0" : "opacity-100"}`}
            >
              {slide.tag}
            </span>
          </div>
        </div>

        <h1
          className={`mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span
            key={`title-${current}`}
            className={`block transition-all duration-400 ${transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}
          >
            {slide.title}
          </span>
          <span
            key={`subtitle-${current}`}
            className={`block transition-all duration-500 delay-100 ${transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}
            style={{ color: "hsl(38, 95%, 68%)" }}
          >
            {slide.subtitle}
          </span>
        </h1>

        <p
          key={`desc-${current}`}
          className={`mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 sm:text-xl transition-all duration-1000 delay-500 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } ${transitioning ? "opacity-0" : ""}`}
        >
          {slide.desc}
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
