import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import WorksSection from '@/components/sections/WorksSection'
import IllustrationSection from '@/components/sections/IllustrationSection'
import PricingSection from '@/components/sections/PricingSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <IllustrationSection />
      <PricingSection />
      <ProcessSection />
      <ContactSection />
    </>
  )
}