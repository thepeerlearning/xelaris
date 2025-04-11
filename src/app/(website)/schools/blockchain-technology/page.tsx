import GetStartedCard from "../../_components/GetStartedCard"
import Banner from "../_components/Banner"
import CourseDescription from "./_components/Course"
import HeroSection from "../_components/HeroSection"

export default function SchoolOfSoftwareDevelopment() {
  return (
    <div className="w-full relative flex flex-col">
      <HeroSection
        ageRange="15-17"
        school="Web3 developer beginner"
        description={`This Web3 Beginner course introduces students to blockchain technology from the ground up. Students will explore the Ethereum blockchain and Decentralized Finance (DeFi). They will gain hands-on experience building decentralized applications (dApps) with Solidity and smart contracts. By the end of the course, they will have the skills to create and deploy Web3 applications, preparing them for a career as a Blockchain Engineer.`}
      />
      <Banner />
      <CourseDescription />
      <GetStartedCard />
    </div>
  )
}
