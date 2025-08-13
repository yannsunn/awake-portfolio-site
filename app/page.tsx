import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WorksSection from '@/components/sections/WorksSectionNew'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PricingSection from '@/components/sections/PricingSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <TestimonialsSection />
      <PricingSection />
      <ProcessSection />
      <ContactSection />
    </>
  )
}