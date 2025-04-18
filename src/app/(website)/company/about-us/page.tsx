import React from "react"
import HeroSection from "./_components/HeroSection"
import CoreValues from "./_components/CoreValues"
import OurTeam from "./_components/OurTeam"
import GetStartedCard from "../../_components/GetStartedCard"
import CareerCard from "./_components/Careers"

export default function AboutXelaris() {
  return (
    <div className="w-full relative flex flex-col">
      <HeroSection />
      <CoreValues />
      <OurTeam />
      <CareerCard />
      <GetStartedCard />
    </div>
  )
}
