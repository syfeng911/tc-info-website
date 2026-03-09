import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WebsiteSection } from "@/components/website-section"
import { OutsourcingSection } from "@/components/outsourcing-section"
import { ComparisonSection } from "@/components/comparison-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <OutsourcingSection />
      <ComparisonSection />
      <PricingSection />
      <WebsiteSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export default Index
