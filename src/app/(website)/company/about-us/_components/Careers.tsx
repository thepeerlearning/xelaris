import { ArrowLiftUp } from "@/components/svgs"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CareerCard() {
  return (
    <div className="w-full bg-secondary py-10 md:py-16 lg:py-20 xl:pt-[117px] xl:pb-[87px]">
      <div className="w-full max-w-[1302px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-[35px] 2xl:px-[38px] mb-8 md:mb-12 lg:mb-16">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6 md:gap-8 xl:gap-[120px]">
          <div className="w-full xl:w-1/2 flex flex-col gap-[40px]">
            <h2 className="font-inter font-normal text-[#FBF8E6] text-[30px]/[36px] sm:text-[40px]/[48px] 2xl:text-[50px]/[72px] tracking-normal">
              Careers
            </h2>
            <div className="w-full sm:w-[371px] max-w-[371px] h-[100px] flex flex-col gap-[20px] text-[#FBF8E6] font-inter font-normal text-[12.36px]/[20px] tracking-normal align-middle">
              We&apos;re always on the lookout for bright minds ready to
              contribute.
              <span>
                If you&apos;re passionate about empowering the next generation
                with tech skills and want to make a positive impact, you&apos;ve
                found your perfect blend here.
              </span>
            </div>
            <Link
              href="/company/careers"
              className="bg-[#FBF8E6] w-[162px] h-[40px] py-[10px] flex gap-1 justify-center items-center rounded-full text-secondary font-normal font-inter text-[14.13px]/[20px] tracking-normal align-middle cursor-pointer mt-8"
            >
              View all at Lever <ArrowLiftUp />
            </Link>
          </div>
          <div className="w-full xl:w-1/2 h-full xl-[67px] py-4 border-t border-[#FBF8E6]">
            <div className="w-full h-full xl:h-[34px] flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-inter font-normal text-[#FBF8E6] text-[16.92px]/[24px] tracking-normal">
                Sales and marketing specialist
              </p>
              <Button className="bg-transparent border border-[#FBF8E6] w-[82px] h-[34px] py-[7px] flex justify-center items-center rounded-full text-[#FBF8E6] font-normal font-inter text-[13.02px]/[20px] tracking-normal align-middle cursor-pointer">
                Remote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
