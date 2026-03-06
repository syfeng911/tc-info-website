import { useEffect, useRef, useState, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  direction?: "up" | "left" | "right"
  delay?: 0 | 200 | 400 | 600
}

export function AnimatedSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
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
      { threshold: 0.15 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const directionClass =
    direction === "left"
      ? "animate-fade-in-left"
      : direction === "right"
        ? "animate-fade-in-right"
        : "animate-fade-in-up"

  const delayClass =
    delay === 200
      ? "animation-delay-200"
      : delay === 400
        ? "animation-delay-400"
        : delay === 600
          ? "animation-delay-600"
          : ""

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `${directionClass} ${delayClass}` : "opacity-0"
      }`}
    >
      {children}
    </div>
  )
}
