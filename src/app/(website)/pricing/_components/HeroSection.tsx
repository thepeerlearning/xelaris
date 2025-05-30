"use client"

import { Check } from "lucide-react"
import TrialClassButton from "../../_components/TrialClassButton"

const pricingData = [
  {
    id: 1,
    title: "1 hour private lesson once a week ",
    amount: 275,
    addons: [
      `Weekly 60-minute 1:1 classes with an experienced instructor.`,
      `Personalized lessons tailored to your child's pace and learning style.`,
      `Detailed instructor session notes outlining what was covered in each class`,
      `Dedicated, responsive support available 7 days a week.`,
      `Easily reschedule your child's class anytime.`,
      `Course certification.`,
    ],
  },
  {
    id: 2,
    title: "45 minutes private lesson twice a week ",
    amount: 350,
    addons: [
      `Twice a week, 45-minute 1:1 classes with an experienced instructor.`,
      `Personalized lessons tailored to your child's pace and learning style.`,
      `Detailed instructor session notes outlining what was covered in each class`,
      `Dedicated, responsive support available 7 days a week.`,
      `Easily reschedule your child's class anytime.`,
      `Course certification.`,
    ],
  },
  {
    id: 3,
    title: "1 hour private lesson twice a week ",
    amount: 450,
    addons: [
      `Twice a week, 60-minute 1:1 classes with an experienced instructor.`,
      `Personalized lessons tailored to your child's pace and learning style.`,
      `Detailed instructor session notes outlining what was covered in each class`,
      `Dedicated, responsive support available 7 days a week.`,
      `Easily reschedule your child's class anytime.`,
      `Course certification.`,
    ],
  },
]

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen relative bg-secondary py-[61px] lg:pt-24 lg:pb-12 flex justify-center items-center">
      <div className="w-full 3xl:w-[1319px] h-full flex justify-center items-center px-4 2xl:px-6 3xl:px-0">
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <div className="w-full flex flex-col gap-[32px] xl:gap-[71px] pt-12 lg:pt-12">
            <div className="w-full flex flex-col gap-[12px] lg:gap-[32px] px-2 2xl:px-6 3xl:px-0">
              <h2 className="font-inter font-normal text-[#FBF8E6] text-[39.22px]/[56px] lg:text-[60px]/[60px] tracking-[0.72px] md:tracking-normal align-middle">
                Pricing
              </h2>
              <span className="max-w-[576px] font-inter font-normal text-[#FBF8E6] text-[18px]/[28.18px] tracking-normal align-middle">
                Our goal is to provide the finest online tech education
                available. When you enrol your child, their tuition includes
                much more than just the standard class experience.{" "}
              </span>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[5px]">
              {/* CARDs */}
              {pricingData?.map((item) => (
                <div
                  key={item.id}
                  className="w-full 3xl:w-[420px] min-h-[594px] flex flex-col gap-6 rounded lg-w-[320px] bg-[#FBF8E6] shadow-[0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A]"
                >
                  <div className="w-full flex flex-col gap-4 p-6 xl:p-5">
                    <p className="text-[#2E3338] font-inter font-bold text-[19px]/[24px] align-middle tracking-normal">
                      {item.title}
                    </p>
                    <p className="h-[49px] text-[#2E3338] font-inter font-extrabold text-[26.88px]/[40px] align-middle tracking-normal">
                      ${item.amount}{" "}
                      <span className="font-normal text-[15px]/[24px]">
                        per/month
                      </span>
                    </p>
                    <TrialClassButton />
                  </div>
                  <div className="w-full flex flex-col gap-6 pt-[25px] px-6 border-t border-[#C2CCD6]">
                    <h4 className="w-full text-[#202426] font-inter font-normal text-[13px]/[16px] align-middle tracking-[0.32px] uppercase">
                      What&apos;s included
                    </h4>
                    <div className="pb-[25px] w-full flex flex-col gap-4">
                      {item.addons?.map((addon, idx) => (
                        <div key={idx} className="w-full h-[38px] flex gap-2">
                          <span className="w-[14px] h-[24px] shrink-0">
                            <Check className="w-[14px] h-full text-#232426]" />
                          </span>
                          <p className="font-normal font-inter text-[15px]/[18.4px] tracking-[0.34px] text-black/80">
                            {addon}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
