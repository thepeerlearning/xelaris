import GetStartedCard from "../../_components/GetStartedCard"
import Banner from "../_components/Banner"
import CourseDescription from "./_components/Course"
import HeroSection from "../_components/HeroSection"

export default function SchoolOfArtificialIntelligence() {
  return (
    <div className="w-full relative flex flex-col">
      <HeroSection
        ageRange="14-17"
        school="School of artificial intelligence"
        description={`AI is one of the fastest-growing technologies of our time. Our AI program gives students hands-on experience in data analysis, machine learning, and AI-powered problem-solving. With expert mentorship and real-world projects, they gain the skills to understand, build, and apply AI in meaningful ways.`}
      />
      <Banner />
      <CourseDescription />
      <GetStartedCard />
    </div>
  )
}
