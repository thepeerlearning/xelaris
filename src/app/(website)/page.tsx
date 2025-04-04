import Banner from "./_components/Banner"
import FAQsSection from "./_components/Faqs"
import GetStartedCard from "./_components/GetStartedCard"
import HeroSection from "./_components/HeroSection"
import ProjectSection from "./_components/ProjectSection"
import SchoolSection from "./_components/SchoolSection"
import StudentShowCase from "./_components/StudentShowCase"
import TestimoniesSection from "./_components/Testimonies"
import WhyXelarisSection from "./_components/WhyXelaris"

export default function Home() {
  return (
    <div className="w-full relative flex flex-col">
      <HeroSection />
      <Banner />
      <SchoolSection />
      <ProjectSection />
      <StudentShowCase />
      <TestimoniesSection />
      <WhyXelarisSection />
      <FAQsSection />
      <GetStartedCard />
    </div>
  )
}
