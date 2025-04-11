import React from "react"
import HeroSection from "./_components/HeroSection"
import CoreValues from "./_components/CoreValues"
import OurUniqueness from "./_components/OurUniqueness"
import GetStartedCard from "../../_components/GetStartedCard"

export default function AboutXelaris() {
  return (
    <div className="w-full relative flex flex-col">
      <HeroSection />
      <CoreValues />
      <OurUniqueness />
      <GetStartedCard />
    </div>
  )
}
