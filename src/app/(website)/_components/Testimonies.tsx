"use client"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { testimonies } from "@/lib/data"
import { ArrowRight, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { ReadFullTestimony } from "./ReadFullTestimony"

export default function ParentTestimonies() {
  const [open, setOpen] = useState(false)
  return (
    <section className="w-full min-h-[516px] bg-[#202426] pt-12 sm:pt-16 md:pt-20 pb-12 md:pb-16 xl:pb-[138px]">
      <div className="w-full 4xl:w-[1440px] px-4 sm-[20px] md:px-[30px] 2xl:px-[64px]">
        {/* Header */}
        <div className="w-full flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 sm:gap-6 xl:gap-8 mb-6 sm:mb-8 xl:mb-12">
          <h2 className="font-inter font-normal text-[#F7F7EE] text-[30px]/[36px] lg:text-[50px]/[48px] -tracking-[0.72px] md:tracking-normal align-middle">
            What Parents Are Saying
          </h2>

          <button
            className="font-inter font-normal w-[210px] flex items-center gap-2 text-[#F7F7EE] text-sm sm:text-[15.25px]/[22px] hover:underline cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Read More Parent Stories
            <ArrowRight className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonies?.slice(0, 4).map((testimony) => (
            <div key={testimony.id} className="flex flex-col gap-4 h-full">
              {/* Testimony Header */}
              <div className="pb-4 sm:pb-[30px]">
                <h3 className="font-normal text-xl sm:text-2xl text-[#F7F7EE] mb-2 sm:mb-4">
                  {testimony.location}
                </h3>
                <p className="font-light text-sm sm:text-[14px] text-[#EFEFEF]">
                  {testimony.summary}
                </p>
              </div>

              {/* Testimony Card */}
              <div className="bg-[#FBF8E6] rounded flex-1 flex flex-col">
                <div className="p-4 flex flex-col h-full justify-between gap-4">
                  {/* Image and Short Text */}
                  <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                    <div className="relative aspect-square w-full max-w-full lg:w-[284px] mx-auto">
                      <Image
                        src={testimony.img}
                        alt={`${testimony.author}'s testimonial`}
                        fill
                        className="object-cover object-center rounded"
                      />
                    </div>

                    <p className="font-light text-sm sm:text-[15px] text-[#202426] leading-relaxed">
                      {testimony.shortText}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 sm:pt-6">
                    <ReadFullTestimony testimony={testimony} />
                    <p className="font-bold text-xs sm:text-sm text-[#1C1B17] mt-2">
                      {testimony.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Video Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="h-[95vh] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[1000px] 2xl:max-w-[1186px] pt-4 pb-20 xl:pt-[60px] xl:pb-[80px]  xl:px-[85px] bg-[#202426] border-0 rounded [&>button[data-state]]:hidden flex flex-col gap-[56px] overflow-scroll">
          <DialogHeader className="w-full flex justify-center items-center">
            <DialogTitle className="font-normal text-[#F7F7EE] text-xl sm:text-2xl md:text-4xl lg:text-[48px] leading-[48px] text-center">
              More Stories of Impact
            </DialogTitle>
          </DialogHeader>

          <DialogClose className="absolute -right-2 top-4 xl:top-2 sm:right-4 sm:top-6 md:top-6 z-50 bg-white hover:bg-white/70 p-2 rounded-full transition-all">
            <X className="h-4 w-4 md:h-6 md:w-6 text-[#202426]" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="w-full max-w-[1170px] px-0 xl:px-16 flex flex-col xl:flex-row gap-4">
            {testimonies?.slice(4, testimonies?.length)?.map((testimony) => (
              <div key={testimony.id} className="flex flex-col gap-4">
                {/* Testimony Header */}
                <div className="w-full pb-4 sm:pb-[30px]">
                  <h3 className="font-normal text-xl sm:text-2xl text-[#F7F7EE] mb-2 sm:mb-4">
                    {testimony.location}
                  </h3>
                  <p className="font-light text-xs text-[#EFEFEF]">
                    {testimony.summary}
                  </p>
                </div>

                {/* Testimony Card */}
                <div className="bg-[#F7F7EE] rounded flex-1 flex flex-col">
                  <div className="p-4 flex flex-col h-full justify-between gap-4">
                    {/* Image and Short Text */}
                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                      <div className="relative aspect-square w-full max-w-full sm:max-w-[284px] mx-auto">
                        <Image
                          src={testimony.img}
                          alt={`${testimony.author}'s testimonial`}
                          fill
                          className="object-cover object-center rounded"
                        />
                      </div>

                      <p className="font-light text-sm sm:text-[15px] text-[#202426] leading-relaxed">
                        {testimony.shortText}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 sm:pt-6">
                      <ReadFullTestimony testimony={testimony} />
                      <p className="font-bold text-xs sm:text-sm text-[#1C1B17] mt-2">
                        {testimony.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
