"use client"
import { SignupForm } from "@/app/(signup)/_components/Form"
import TrialClassButton from "../../_components/TrialClassButton"

interface SchoolProps {
  ageRange: string
  school: string
  description: string
  required?: boolean
}
export default function HeroSection({
  ageRange,
  school,
  description,
  required = false,
}: SchoolProps) {
  return (
    <section
      className="w-full min-h-[549px]  xl:min-h-[753px] relative bg-cover bg-no-repeat bg-[#FBF8E6] bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(/images/school_lg-hero_img.jpeg)` }}
    >
      <div className="w-full h-full flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:pl-8 xl:pr-0 2xl:pl-10 2xl:pr-0 3xl:px-0">
        <div className="w-full h-full max-w-[1234px] flex flex-col xl:flex-row items-center gap-10 xl:gap-[50px] 2xl:gap-[114px] pt-30 pb-12  xl:pt-24">
          {/* Left Section */}
          <div className="flex-1 max-w-[540px] flex flex-col gap-6 justify-center items-start text-left">
            <div className="w-full flex flex-col gap-3">
              <div className="w-full flex flex-col gap-[12px]">
                {required && (
                  <span className="w-[214px] h-[30px] rounded bg-primary font-normal font-inter uppercase text-[16px]/[8px] text-[#FBF8E6] align-middle flex justify-center items-center">
                    prerequisite required
                  </span>
                )}
                <span className="hidden xl:flex font-inter font-semibold text-base 2xl:text-[18px]/[22.1px] text-[#FBF8E6] tracking-[0.78px] align-middle uppercase">
                  AGES {ageRange} | 1-on-1 online
                </span>
              </div>
              <h1 className="font-inter font-normal text-[36px]/[37.8px] md:text-3xl lg:text-4xl xl:text-4xl/[35px] 2xl:text-[56px]/[58.8px] text-[#FBF8E6]">
                {school}
              </h1>
            </div>
            <p className="font-normal font-inter text-[15px]/[25px] -tracking-[0.56px] lg:-tracking-[0.09px] sm:text-base md:text-lg xl:text-base 2xl:text-[18px]/[28px] text-[#FBF8E6]">
              {description}
            </p>
            <div className="w-full md:w-auto pt-4">
              <TrialClassButton className="w-full md:w-[183px]" />
            </div>
          </div>

          {/* Right Section - Hero Image */}
          <div className="hidden xl:flex w-full h-full xl:w-[542px]">
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  )
}
