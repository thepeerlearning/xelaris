"use client"
import { TeamMemberLogo } from "@/components/svgs/team-members"
import {
  AmazonLogo,
  DuolingoLogo,
  MasterCardLogo,
  TeslaLogo,
} from "@/components/svgs/hero-banner"

import React from "react"

export default function Banner() {
  return (
    <div className="w-full min-h-[370px] xl:min-h-[126px] py-[60px] px-[42px] xl:py-6 xl:px-[94px] flex flex-col xl:flex-row gap-[10px] xl:justify-center xl:items-center bg-secondary">
      <div
        className="flex flex-col xl:flex-row gap-[65px] xl:gap-[171px]  w-full 3xl:w-[1252px]"
        data-aos="fade-up"
        data-aos-once={true}
        data-aos-delay="100"
        data-aos-offset="100"
      >
        <div className="w-full xl:w-[488px] flex flex-col gap-4">
          <p className="w-full xl:w-[300px] 2xl:w-[352px] 3xl:w-[380px] text-center text-white fold:text-[10px] text-sm tracking-[1.57px] font-inter font-normal">
            ALL OF OUR COURSE ARE DESIGNED
            <br /> BY EDUCATORS AND EXPERTS FROM
          </p>
          <div className="w-full flex justify-center items-center xl:justify-start xl:items-start">
            <TeamMemberLogo />
          </div>
        </div>
        <div className="w-full xl:w-[592.01px] flex flex-col justify-center items-center gap-[25px]">
          <p className="w-[295px] text-center text-white text-sm tracking-[1.57px] font-inter font-normal">
            TRUSTED BY PARENTS FROM
          </p>

          <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6 xl:gap-8 2xl:flex-nowrap 2xl:justify-between 2xl:gap-6">
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
  )
}
