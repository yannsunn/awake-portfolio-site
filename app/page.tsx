import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import WorksSection from '@/components/sections/WorksSection'
import PricingSection from '@/components/sections/PricingSection'
import ProcessSection from '@/components/sections/ProcessSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <PricingSection />
      <ProcessSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}