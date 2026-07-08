import { useState, useEffect, useRef, useCallback } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "首頁", href: "#hero" },
  { label: "服務內容", href: "#services" },
  { label: "資訊委外", href: "#outsourcing" },
  { label: "委外比較", href: "#comparison" },
  { label: "價格方案", href: "#pricing" },
  { label: "聯絡我們", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null)
  const linksContainerRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map((l) => l.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Update indicator position on active section change
  useEffect(() => {
    const key = activeSection
    const btn = linkRefs.current.get(key)
    if (btn && linksContainerRef.current) {
      const containerRect = linksContainerRef.current.getBoundingClientRect()
      const btnRect = btn.getBoundingClientRect()
      setIndicator({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
      })
    }
  }, [activeSection])

  const handleClick = (href: string) => {
    setIsOpen(false)
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const setLinkRef = useCallback((href: string) => (el: HTMLButtonElement | null) => {
    if (el) {
      linkRefs.current.set(href, el)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border translate-y-0"
          : "bg-transparent -translate-y-0"
      }`}
      style={{ transitionProperty: "background, backdrop-filter, box-shadow, border-color, transform" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo with micro animation */}
          <button
            onClick={() => handleClick("#hero")}
            className="group flex items-center gap-3"
          >
            <img 
              src="/logo.png" 
              alt="天承資訊 Logo Icon" 
              className="h-7 w-auto sm:h-9 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-3deg]"
            />
            <div className="flex items-baseline gap-3">
              <span
                className={`text-2xl font-bold transition-all duration-500 ${
                  scrolled ? "text-foreground" : "text-white"
                } group-hover:scale-[1.03]`}
              >
                天承資訊
              </span>
              <span
                className={`text-sm font-light tracking-[0.2em] transition-all duration-500 ${
                  scrolled ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                TC-INFO
              </span>
            </div>
          </button>

          {/* Desktop links with sliding indicator */}
          <div className="hidden items-center gap-1 lg:flex relative" ref={linksContainerRef}>
            {indicator && (
              <div
                className={`absolute bottom-0 rounded-md transition-all duration-300 ease-out ${
                  scrolled
                    ? "bg-primary/10"
                    : "bg-white/10"
                }`}
                style={{
                  left: `${indicator.left}px`,
                  width: `${indicator.width}px`,
                }}
              />
            )}
            {navLinks.map((link) => (
              <button
                key={link.href}
                ref={setLinkRef(link.href)}
                onClick={() => handleClick(link.href)}
                className={`relative z-10 rounded-md px-4 py-2 text-lg font-bold transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? scrolled
                      ? "text-primary"
                      : "text-white"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA with shimmer on hover */}
          <a
            href="tel:0955685641"
            className={`group relative hidden overflow-hidden rounded-full px-6 py-2.5 text-lg font-bold transition-all duration-300 lg:block hover:scale-105 ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg"
                : "bg-white text-foreground hover:bg-white/90 shadow-md hover:shadow-lg"
            }`}
          >
            <span className="relative z-10">立即來電</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-md p-2 transition-all duration-300 hover:scale-110 lg:hidden ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu with slide-down animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-card/95 backdrop-blur-md">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`rounded-md px-4 py-3 text-left text-base font-semibold transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-primary/10 text-primary translate-x-0"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
                style={{
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:0955685641"
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-base font-bold text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              立即來電
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
