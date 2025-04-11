import React from "react"
import HeroSection from "./_components/HeroSection"
import PricingFAQsSection from "./_components/Faqs"
import GetStartedCard from "../_components/GetStartedCard"

export default function Pricing() {
  return (
    <div className="w-full relative flex flex-col">
      <HeroSection />
      <PricingFAQsSection />
      <GetStartedCard />
    </div>
  )
}
