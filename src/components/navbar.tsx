import { useState, useEffect } from "react"
import { Menu, X, Monitor } from "lucide-react"

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

  const handleClick = (href: string) => {
    setIsOpen(false)
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleClick("#hero")}
            className="flex items-center gap-3"
          >
            <img 
              src="/logo.png" 
              alt="天承資訊 Logo Icon" 
              className="h-7 w-auto sm:h-9 transition-all duration-300"
            />
            <div className="flex items-baseline gap-3">
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                天承資訊
              </span>
              <span
                className={`text-sm font-light tracking-[0.2em] transition-colors duration-300 ${
                  scrolled ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                TC-INFO
              </span>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`rounded-md px-4 py-2 text-lg font-bold transition-all duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? scrolled
                      ? "bg-primary/10 text-primary"
                      : "bg-white/20 text-white"
                    : scrolled
                      ? "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="tel:0955685641"
            className={`hidden rounded-full px-6 py-2.5 text-lg font-bold transition-all duration-200 lg:block ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white text-foreground hover:bg-white/90"
            }`}
          >
            立即來電
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-md p-2 lg:hidden ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-border bg-card/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`rounded-md px-4 py-3 text-left text-base font-semibold transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:0955685641"
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-base font-bold text-primary-foreground hover:bg-primary/90"
            >
              立即來電
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
