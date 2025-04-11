import GetStartedCard from "../../_components/GetStartedCard"
import Banner from "../_components/Banner"
import CourseDescription from "./_components/Course"
import HeroSection from "../_components/HeroSection"

export default function SchoolOfSoftwareDevelopment() {
  return (
    <div className="w-full relative flex flex-col">
      <HeroSection
        ageRange="10-17"
        school="School of software development"
        description={`This self-paced course is designed for students to build skills in
              web development by learning HTML, CSS, and JavaScript, three
              common coding languages on which all modern websites are built. By
              the end of this course, they'll have all the skills required to
              build a fully functional and interactive website.`}
      />
      <Banner />
      <CourseDescription />
      <GetStartedCard />
    </div>
  )
}
