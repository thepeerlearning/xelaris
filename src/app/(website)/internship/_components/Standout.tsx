"use client"
import Image from "next/image"

export default function StandoutSection() {
  return (
    <section className="w-full min-h-[746.78px] relative bg-[#FBF8E6]">
      <div className="w-full h-full flex justify-center items-center px-4 sm:px-6 md:px-8 xl:px-[37px] py-[88px] xl:pt-10">
        <div className="w-full xl:w-[960px] 3xl:w-[1366px] pt-24 sm:pt-[120px] lg:pt-[150px] pb-12 lg:pb-[80px] flex flex-col xl:flex-row items-center gap-10 xl:gap-[114px]">
          <div className="hidden xl:flex">
            <Image
              src="/images/standout-img.webp"
              alt="Standout section image"
              width={588}
              height={538.78}
              className="w-full h-auto xl:h-[538.78px] xl:w-[588px] object-cover bg-center"
            />
          </div>

          <div className="flex-1 max-w-[568px] flex flex-col gap-6 justify-center items-center xl:items-start text-center xl:text-left">
            <h1 className="w-full font-inter font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[54px]/[57.6px] text-secondary">
              Stand Out in College Applications
            </h1>
            <p className="w-full  text-sm md:text-[16px]/[24px] font-inter text-[#333] flex flex-col gap-2">
              Imagine applying to college with a portfolio showcasing
              innovations, not just assignments.
              <span>
                This internship provides tangible proof that you&apos;ve built,
                learned, and executed at a professional level. Your college
                applications will feature concrete technical achievements that
                set you apart from peers who rely solely on grades and
                conventional extracurriculars. Through immersion in cutting-edge
                technology and AI projects, you&apos;ll develop coding
                expertise, problem-solving abilities, and collaborative skills
                that universities value.
              </span>{" "}
              By completing this internship, you demonstrate your ability to
              meet deadlines, apply technical knowledge in real-world settings,
              and contribute to a professional team, qualities that distinguish
              top candidates in both higher education and future careers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
