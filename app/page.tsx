import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ToolsGrid from '@/components/ToolsGrid'
import AssessmentSection from '@/components/AssessmentSection'
import HowItWorks from '@/components/HowItWorks'
import StatsBar from '@/components/StatsBar'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import AnnieChat from '@/components/AnnieChat'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Navbar />
      <ToolsGrid />
      <AssessmentSection />
      <HowItWorks />
      <StatsBar />
      <Testimonials />
      <FAQ />
      <AnnieChat />
      <CTASection />
      <Footer />
    </main>
  )
}
