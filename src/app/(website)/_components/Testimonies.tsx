"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog"
import { testimonies } from "@/lib/data"
import { ArrowRight, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ReadFullTestimony } from "./ReadFullTestimony"

export default function ParentTestimonies() {
  const [open, setOpen] = useState(false)
  /* ---------- horizontal scroll helpers ---------- */
  const railRef = useRef<HTMLDivElement>(null)
  const modalRailRef = useRef<HTMLDivElement>(null)

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

    return () => {
      el.removeEventListener("wheel", onWheel)
    }
  }, [])

  return (
    <section className="w-full bg-[#202426] pt-12 pb-12 sm:pt-16 md:pt-20 md:pb-16 xl:pb-[138px]">
      <div className="w-full px-4 md:px-[30px] 2xl:px-[64px] mx-auto max-w-[1440px]">
        {/* heading */}
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:gap-6 xl:mb-12 xl:flex-row xl:items-center xl:justify-between">
          <h2 className="font-inter text-[30px]/[36px] text-[#F7F7EE] lg:text-[50px]/[48px] -tracking-[0.72px] md:tracking-normal">
            What Parents Are Saying
          </h2>

          <button
            onClick={() => setOpen(true)}
            className="flex w-fit items-center gap-2 font-inter text-sm text-[#F7F7EE] hover:underline sm:text-[15.25px]/[22px]"
          >
            Read More Parent Stories
            <ArrowRight className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          </button>
        </div>

        {/* ---------- horizontal rail ---------- */}
        <div className="relative">
          {/* scroll container */}
          <div
            ref={railRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 scrollbar-hide md:gap-6 lg:gap-8 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonies.slice(0, 4).map((t) => (
              <div
                key={t.id}
                className="card flex w-[280px] min-w-[280px] flex-shrink-0 snap-start flex-col gap-4 xs:w-[300px] sm:min-w-[300px] lg:w-[350px] lg:min-w-[350px]"
              >
                {/* header */}
                <div className="pb-4">
                  <h3 className="mb-2 font-normal text-xl text-[#F7F7EE] lg:text-2xl">
                    {t.location}
                  </h3>
                  <p className="font-light text-sm text-[#EFEFEF] lg:text-[14px]">
                    {t.summary}
                  </p>
                </div>

                {/* card */}
                <div className="flex flex-1 flex-col rounded bg-[#FBF8E6]">
                  <div className="flex h-full flex-col justify-between gap-4 p-4 lg:gap-6">
                    <div className="flex flex-col gap-4">
                      <div className="relative aspect-square w-full">
                        <Image
                          src={t.img || "/placeholder.svg"}
                          alt={`${t.author}'s testimonial`}
                          fill
                          className="rounded object-cover"
                        />
                      </div>
                      <p className="font-light text-sm leading-relaxed text-[#202426] lg:text-[15px]">
                        {t.shortText}
                      </p>
                    </div>
                    <div className="pt-4">
                      <ReadFullTestimony testimony={t} />
                      <p className="mt-2 font-bold text-xs text-[#1C1B17] lg:text-sm">
                        {t.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- modal ---------------- */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay className="fixed inset-0 bg-[#CBCBCB]/20 backdrop-blur-[24px] z-50" />
        <DialogContent className="flex flex-col items-center justify-center overflow-hidden border-0 bg-transparent p-4 shadow-none [&>button]:hidden [&_[data-radix-dialog-close]]:hidden">
          <DialogHeader className="w-full max-w-[1334px] relative">
            <DialogTitle className="sr-only">Parent Testimonials</DialogTitle>
            <DialogClose className="absolute -right-1 lg:right-2 -top-4 lg:top-12 z-50 rounded-full bg-primary p-2 hover:bg-white/70 ">
              <X className="h-4 w-4 sm:h-6 sm:w-6 text-[#FBF8E6]" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>

          <div className="relative w-full max-w-[1334px] mt-8">
            <div
              ref={modalRailRef}
              className="w-full flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 scrollbar-hide md:gap-6 lg:gap-8 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonies.slice(4, testimonies?.length).map((t) => (
                <div
                  key={t.id}
                  className="w-[316px] min-w-[316px] sm:w-[316px] h-auto max-h-[80vh] bg-[#FBF8E6] flex flex-col gap-4 snap-start rounded"
                >
                  <div className="w-full h-[57px] px-4 pt-4 pb-[17px] border-b-[0.2px] border-[#202426]">
                    <h3 className="font-medium text-[23.06px]/[20px] tracking-normal align-middle  text-[#202426] sm:text-2xl">
                      {t.location}
                    </h3>
                  </div>
                  <div className="w-full px-4 pt-4 pb-[17px] border-b-[0.2px] border-[#202426]">
                    <p className="font-light text-[14px]/[20px] text-[#202426]">
                      {t.summary}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col rounded ">
                    <div className="flex h-full flex-col justify-between gap-4 p-4 lg:gap-6">
                      <div className="font-light text-[#202426] lg:text-[15.13px]/[20px]">
                        {t.text}
                      </div>
                      <div className="pt-4">
                        <p className="mt-2 font-bold text-xs text-[#1C1B17] lg:text-sm">
                          {t.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
