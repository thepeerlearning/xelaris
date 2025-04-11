import React from "react"

export default function InternshipBanner() {
  return (
    <div className="w-full  2xl:min-h-[655.5px] flex justify-center items-center relative bg-primary">
      <div
        className="block md:hidden w-full h-[96.27px] absolute top-0 md:top-0 left-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/inter-small_hero-top-img.svg)` }}
      />
      <div
        className="block md:hidden w-full h-[96.27px] absolute bottom-0 right-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(/inter-small_hero-bottom-img.svg)`,
        }}
      />
      <div
        className="hidden md:block w-full h-[119.25px] absolute top-0 left-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/inter-hero-top_bg.svg)` }}
      />
      <div
        className="hidden md:block w-full h-[119.25px] absolute bottom-0 right-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/inter-hero-bottom_bg.svg)` }}
      />
      <div className="w-full flex justify-center items-center bg-primary  py-8 sm:py-10 md:pt-10 lg:pt-5 md:pb-26 xl:py-18 relative top-10 lg:top-14 xl:top-0">
        <div className="w-full xl:w-[651px] flex flex-col gap-[10px] lg:gap-6 px-10">
          <h4 className="w-full font-inter font-semibold text-white text-[24px]/[37.13px] lg:text-[32px]/[35px] xl:text-[48px]/[57.6px] tracking-normal align-middle text-center">
            Work on Real Projects That Make a Difference
          </h4>
          <p className="font-inter font-normal text-white text-[15px]/[24px] text-center tracking-normal align-middle">
            The best way to prepare kids for the future? Introduce them to the
            technologies shaping it today. we focus on what&apos;s transforming.
            From AI to Web3 and beyond, we&apos;re not just keeping up -
            we&apos;re helping kids lead the way.
          </p>
        </div>
      </div>
    </div>
  )
}
