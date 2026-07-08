import { useEffect, useRef, useState, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  direction?: "up" | "left" | "right"
  delay?: 0 | 200 | 400 | 600
  animation?: "fade" | "scale" | "blur" | "spring" | "bounce" | "stagger"
}

export function AnimatedSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
  animation = "fade",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    // Fallback — if observer doesn't fire, force visible after 1.5s
    const timer = setTimeout(() => setIsVisible(true), 1500)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  const getAnimationClass = (): string => {
    if (animation === "scale") return "animate-scale-in"
    if (animation === "blur") return "animate-blur-reveal"
    if (animation === "spring") return "animate-slide-up-spring"
    if (animation === "bounce") return "animate-bounce-in"
    if (animation === "stagger") return "animate-stagger-reveal"
    // Default fade with direction
    if (direction === "left") return "animate-fade-in-left"
    if (direction === "right") return "animate-fade-in-right"
    return "animate-fade-in-up"
  }

  const getDelayClass = (): string => {
    if (delay === 200) return "animation-delay-200"
    if (delay === 400) return "animation-delay-400"
    if (delay === 600) return "animation-delay-600"
    return ""
  }

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `${getAnimationClass()} ${getDelayClass()}` : "opacity-0"
      }`}
    >
      {children}
    </div>
  )
}
