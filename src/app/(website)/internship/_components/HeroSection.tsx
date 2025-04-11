"use client"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-[658.78px] relative bg-cover bg-no-repeat bg-[#FBF8E6] bg-center"
      style={{ backgroundImage: `url(/images/lg-hero_img.png)` }}
    >
      <div className="w-full h-full flex justify-center items-center px-4 sm:px-6 md:px-8 xl:px-[37px] pt-[120px] xl:pt-10">
        <div className="w-full xl:w-[960px] 3xl:w-[1366px] pt-24 sm:pt-[120px] lg:pt-[150px] pb-12 lg:pb-[80px] flex flex-col xl:flex-row items-center gap-10 xl:gap-[114px]">
          {/* Left Section */}
          <div className="flex-1 max-w-[588px] flex flex-col gap-6 justify-center items-center xl:items-start text-center xl:text-left">
            <h1 className="max-w-[494px] font-inter font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[50px]/[52px] text-secondary">
              The Xelaris Internship Program
            </h1>
            <p className="max-w-[568px] text-sm md:text-[16px]/[24px] font-inter text-[#333]">
              The Xelaris Internship Program is a unique opportunity for high
              school students who have completed our program to take their
              problem-solving skills to the next level. This internship is
              designed to immerse students in real-world challenges, working
              alongside industry leaders and leveraging cutting-edge tools to
              create impactful solutions.
            </p>
          </div>

          {/* Right Section - Hero Image */}
          <div className="hidden xl:flex">
            <Image
              src="/images/sam-and-malik_img.webp"
              alt="Intenship hero section image"
              width={800}
              height={853}
              className="w-full h-auto xl:h-[600px] xl:w-[700px] object-cover bg-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
