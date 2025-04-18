"use client"
import {
  AmazonLogo,
  DuolingoLogo,
  MasterCardLogo,
  TeslaLogo,
} from "@/components/svgs/hero-banner"

import Image from "next/image"

export default function Banner() {
  return (
    <div className="absolute bottom-0 hidden w-full h-[150px] xl:flex flex-col xl:flex-row justify-center items-center">
      <div className="w-full 3xl:w-[1440px] px-[99px] py-[21px] flex 2xl:flex-col gap-[10px]">
        <div className="w-full 2xl:w-[1242px] 2xl:h-[54px] flex flex-col 2xl:flex-row 3xl:gap-[115px]">
          <div className="flex">
            <p className="w-full 2xl:w-1/2 font-inter font-normal text-white fold:text-[10px] text-[14px]/[100%] tracking-[1.57px] align-middle uppercase">
              Designed by top educators <br /> and industry experts from.
            </p>
            <div className="flex h-[19.85px] xl:w-1/2">
              <Image
                src="/white-team-logo.svg"
                alt="Team members logo"
                width={100}
                height={100}
                className="w-auto h-auto"
              />
            </div>
          </div>
          <div className="flex gap-[25px]">
            <p className="w-[125px] text-white text-[14px]/[100%] tracking-[1.57px] font-inter font-normal uppercase">
              Trusted by <br />
              parent from
            </p>

            <div className="w-[449px] flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6 xl:gap-8 2xl:flex-nowrap 2xl:justify-between 2xl:gap-6">
              <div className="w-[calc(50%-8px)] sm:w-[calc(50%-10px)] lg:w-[calc(25%-18px)] xl:w-[calc(50%-16px)] 2xl:w-auto 2xl:flex-1">
                <AmazonLogo />
              </div>
              <div className="w-[calc(50%-8px)] sm:w-[calc(50%-10px)] lg:w-[calc(25%-18px)] xl:w-[calc(50%-16px)] 2xl:w-auto 2xl:flex-1">
                <TeslaLogo />
              </div>
              <div className="w-[calc(50%-8px)] sm:w-[calc(50%-10px)] lg:w-[calc(25%-18px)] xl:w-[calc(50%-16px)] 2xl:w-auto 2xl:flex-1">
                <MasterCardLogo />
              </div>
              <div className="w-[calc(50%-8px)] sm:w-[calc(50%-10px)] lg:w-[calc(25%-18px)] xl:w-[calc(50%-16px)] 2xl:w-auto 2xl:flex-1">
                <DuolingoLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
