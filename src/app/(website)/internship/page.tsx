import GetStartedCard from "../_components/GetStartedCard"
import PricingFAQsSection from "../pricing/_components/Faqs"
import InternshipBanner from "./_components/Banner"
import HeroSection from "./_components/HeroSection"
import StandoutSection from "./_components/Standout"

export default function Internship() {
  return (
    <div className="w-full relative flex flex-col">
      <HeroSection />
      <InternshipBanner />
      <StandoutSection />
      <PricingFAQsSection />
      <GetStartedCard />
    </div>
  )
}
