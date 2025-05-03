"use client"
import { UsersIcon } from "@/components/svgs"
// import Image from "next/image"
import TrialClassButton from "./TrialClassButton"
import { SignupForm } from "@/app/(signup)/_components/Form"

export default function HeroSection() {
  return (
    <section
      className="w-full relative bg-cover bg-no-repeat bg-[#FBF8E6] bg-center"
      style={{ backgroundImage: `url(/images/lg-hero_img.png)` }}
    >
      <div className="w-full h-full flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-0">
        <div className="w-full xl:w-[960px] 2xl:w-[1206px] 3xl:w-[1220px] pt-24 sm:pt-[120px] 3xl:pt-[85px] 3xl:pb-[30px] pb-12 lg:pb-[30px] lg:pt-[75px] flex flex-col xl:flex-row items-center gap-10 xl:gap-16 2xl:gap-[114px] justify-between">
          {/* Left Section */}
          <div className="w-full xl:w-[550px] flex-1 flex flex-col gap-6 justify-center items-center xl:justify-start xl:items-start text-center xl:text-left">
            <h1 className="font-inter font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-[48px]/[52px] 3xl:text-[50px]/[52px] text-secondary">
              The Best Place for Kids <br /> &amp; Teens to Learn Tech Skills.
              <span className="text-primary underline underline-offset-4">
                Guaranteed.
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg xl:text-sm 2xl:text-[18px]/[29px] font-inter text-[#333]">
              We&apos;re building a foundation for future pioneers in software
              engineering, artificial intelligence, blockchain, and computing.
            </p>
            <div className="h-fit flex items-center gap-3 mt-2">
              <UsersIcon />
              <span className="text-base sm:text-[20px]/[24px] font-semibold font-inter">
                1-on-1 online live classes
              </span>
            </div>

            <div className="w-full sm:w-auto mt-4">
              <TrialClassButton className="w-full sm:w-[183px]" />
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
