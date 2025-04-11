import GetStartedCard from "../../_components/GetStartedCard"
import Banner from "../_components/Banner"
import CourseDescription from "./_components/Course"
import HeroSection from "../_components/HeroSection"

export default function SchoolOfProductDesign() {
  return (
    <div className="w-full relative flex flex-col">
      <HeroSection
        ageRange="10-17"
        school="School of product design"
        description={`This self-paced course introduces students to the world of product design. They'll learn how to create user-friendly interfaces from concept to execution while building a strong foundation in UX/UI principles, visual design, and prototyping.`}
      />
      <Banner />
      <CourseDescription />
      <GetStartedCard />
    </div>
  )
}
