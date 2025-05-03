"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export default function CoreValues() {
  const values = [
    {
      icon: "/innovative.svg",
      title: "Innovative Mind",
      description:
        "We embrace curiosity and creativity to think beyond boundaries and deliver groundbreaking solutions.",
    },
    {
      icon: "/driven-heart.svg",
      title: "Driven Heart",
      description:
        "Passion fuels everything we do. We approach our work with enthusiasm and a commitment to excellence.",
    },
    {
      icon: "/unwavering.svg",
      title: "Unwavering Integrity",
      description:
        "Honesty and accountability are non-negotiable. We hold ourselves to the highest standards in everything we do.",
    },
    {
      icon: "/resilient.svg",
      title: "Resilient Spirit",
      description:
        "Challenges are opportunities for growth. We persevere with determination and adaptability.",
    },
    {
      icon: "/purpose-led.svg",
      title: "Purpose-Led Impact",
      description:
        "We build with intention. Every lesson, every product, every conversation is anchored in the desire to make a difference.",
    },
  ]

  /** -------- scroll‑jack & helpers -------- */
  const railRef = useRef<HTMLDivElement>(null)

  const updateArrows = () => {
    const el = railRef.current
    if (!el) return
  }

  /** convert vertical wheel → horizontal scroll */
  useEffect(() => {
    const el = railRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        el.scrollBy({ left: e.deltaY, behavior: "smooth" })
      }
    }
    el.addEventListener("wheel", onWheel, { passive: false })
    el.addEventListener("scroll", updateArrows)
    updateArrows()
    return () => {
      el.removeEventListener("wheel", onWheel)
      el.removeEventListener("scroll", updateArrows)
    }
  }, [])

  return (
    <section className="w-full bg-primary py-10 md:py-16 lg:py-20 xl:pt-[117px] xl:pb-[87px]">
      {/* heading – unchanged */}
      <div className="mx-auto mb-8 w-full max-w-[1302px] px-4 sm:px-6 lg:px-10 xl:px-[35px] 2xl:px-[38px] md:mb-12 lg:mb-16">
        <div className="flex flex-col gap-6 md:gap-8 xl:flex-row xl:items-start xl:justify-between xl:gap-[120px]">
          <h2 className="font-inter text-[30px]/[36px] tracking-normal text-[#FBF8E6] sm:text-[40px]/[48px] 2xl:text-[50px]/[72px]">
            Our Values
          </h2>
          <p className="font-inter max-w-[625px] text-[14.13px]/[22.4px] tracking-normal text-[#FBF8E6]">
            Our core values are the foundation of who we are and what we strive
            to achieve. They guide our actions, inspire our creativity, and
            shape the way we work together as a team.
          </p>
        </div>
      </div>

      {/* ---------- horizontal rail ---------- */}
      <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-[35px] 2xl:px-[38px]">
        {/* scroll container */}
        <div
          ref={railRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 md:gap-5 lg:gap-[13px] scrollbar-hide"
        >
          {values.map((item, i) => (
            <div
              key={i}
              className="card flex h-[380px] w-[280px] min-w-[280px] flex-shrink-0 snap-start flex-col justify-between rounded-[12px] bg-[#FBF8E6] xs:h-[400px] xs:w-[300px] sm:h-[400px] sm:w-[320px] md:h-[416px] md:w-[350px] lg:w-[380px] xl:w-[416px]"
            >
              <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-5 md:gap-[50px] md:p-6">
                <div className="flex justify-center md:justify-start">
                  <Image
                    src={item.icon}
                    alt={item.title + " icon"}
                    width={120}
                    height={120}
                    className="h-[100px] w-[100px] object-contain sm:h-[120px] sm:w-[120px] md:h-[140px] md:w-[140px] lg:h-[160px] lg:w-[160px] xl:h-[178px] xl:w-[178px]"
                    priority
                  />
                </div>
                <h4 className="font-inter text-[22px]/[28px] uppercase tracking-normal text-[#202426] sm:text-[24px]/[32px] md:text-[26px]/[40px] lg:text-[28.5px]/[40px]">
                  {item.title}
                </h4>
              </div>
              <div className="border-t-[0.5px] border-[#202426] px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-[25px]">
                <p className="font-inter text-[12px]/[18px] tracking-normal text-[#202426] sm:text-[12.47px]/[20px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
