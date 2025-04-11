"use client"

import TrialClassButton from "@/app/(website)/_components/TrialClassButton"
import { ContactBook, ContactPerson } from "@/components/svgs"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="w-full min-h- xl:min-h-[691px] relative bg-[#FBF8E6] py-24 flex justify-center items-center">
      <div className="w-full 3xl:w-[1440px] px-2 lg:px-10 3xl:px-[100px]">
        <div className="w-full h-full 2xl:w-[1200px] max-w-[1200px] flex flex-col justify-center items-center gap-[19px] px-4 lg:px-5">
          <div className="w-full max-w-[784px] flex flex-col justify-center items-center gap-[12px] lg:gap-[32px] px-2 2xl:px-6 3xl:px-0">
            <h2 className="font-inter font-normal text-secondary text-[39.22px]/[56px] lg:text-[50px]/[72px] -tracking-[1.44px] align-middle">
              Contact us
            </h2>
            <span className="max-w-[582px] font-inter font-normal text-secondary text-[18px]/[28px] tracking-normal text-center align-middle">
              We&apos;re here to support your child&apos;s tech journey. Reach
              out to us for class information, scheduling, or any questions
              about our programs.
            </span>
          </div>
          <div className="w-full xl:w-[784px] h-full xl:h-[284px] flex flex-col xl:flex-row items-center gap-6 rounded">
            <div className="w-full h-full flex flex-col justify-between gap-[25px] p-[25px] bg-secondary rounded">
              <div className="w-full h-[186px] flex flex-col gap-4">
                <ContactPerson className="shrink-0" />
                <h2 className="font-inter font-bold text-[#FBF8E6] text-[18px]/[28px] tracking-normal align-middle">
                  Parent support{" "}
                </h2>
                <p className="font-inter font-light max-w-[328.67px] text-[#FBF8E6] text-sm/[24px] lg:text-[17px]/[25.5px] tracking-normal align-middle">
                  Need help with class schedules, rescheduling, or any other
                  inquiries? Our support team is here to assist.
                </p>
              </div>
              <Link
                href="mailto:hello@xelaris.co"
                className="font-inter font-bold text-[#FBF8E6] text-[18px]/[28px] tracking-normal align-middle"
              >
                Hello@xelaris.co
              </Link>
            </div>
            <div className="w-full h-full flex flex-col gap-6 p-[25px] bg-secondary rounded">
              <div className="w-full h-[186px] flex flex-col gap-4">
                <ContactBook className="shrink-0" />
                <h2 className="font-inter font-bold text-[#FBF8E6] text-[18px]/[28px] tracking-normal align-middle">
                  Schedule a Call
                </h2>
                <p className="font-inter font-light max-w-[328.67px] text-[#FBF8E6] text-sm/[24px] lg:text-[17px]/[25.5px] tracking-normal align-middle">
                  Book a free call to discuss your child&apos;s interests,
                  experience level, and find the perfect program match.
                </p>
              </div>
              <TrialClassButton
                className="w-fit border-none justify-start bg-transparent hover:bg-transparent text-primary font-semibold p-0 hover:scale-[1.01] cursor-pointer"
                buttonText="Book Now→"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
