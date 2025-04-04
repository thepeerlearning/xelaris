"use client"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Play, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function StudentShowCase() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="w-full bg-[#FBF8E6] py-12 sm:py-14 md:py-16 xl:py-[87px] flex justify-center items-center">
      <div className="w-full 4xl:w-[1440px] px-2 xl:px-8 3xl:pr-[196px] 3xl:pl-[232px] flex justify-center items-center">
        <div className="w-full xl:w-[1012px] flex flex-col xl:flex-row  gap-4 lg:gap-[28px] bg-[#FBF8E6] rounded-[6px] overflow-hidden">
          {/* Video Thumbnail */}
          <div
            className="hidden xl:block relative w-full xl:w-[473px] aspect-video xl:aspect-auto xl:h-[567px] cursor-pointer group"
            onClick={() => setVideoOpen(true)}
          >
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity group-hover:opacity-90">
              <div className="bg-[#FBF8E6] rounded-full p-4 sm:p-6 shadow-lg transform transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 sm:h-8 sm:w-8 text-black fill-black" />
              </div>
            </div>

            {/* Border Decoration */}
            <div
              className="absolute inset-0 h-full w-full bg-center bg-no-repeat z-[5]"
              style={{
                backgroundImage: `url(/images/thick_border-play_img.webp)`,
                backgroundSize: "100px 100px",
              }}
            ></div>

            {/* Image */}
            <Image
              src="/images/kids_competition-img.webp"
              alt="A coding competition for kids"
              width={473}
              height={567}
              quality={80}
              className="w-[473px] h-[567px] rounded object-cover object-center"
            />
          </div>

          {/* Content */}
          <div className="w-[365px] xl:w-[539px] xl:h-[589px] flex flex-col gap-[28px] justify-center">
            <div className="w-[351px] md:w-[415px] h-[402px] flex flex-col justify-center items-center gap-4 xl:gap-[28px] mx-auto">
              <h2 className="font-inter font-normal text-center xl:text-left text-[#202426] text-[30px]/[33.6px] md:text-[50px]/[56px] -tracking-[1px]">
                2nd place National BETA State Convention
              </h2>

              <div className="font-normal font-inter space-y-4 sm:space-y-[26px] text-center md:text-left text-sm sm:text-[17px]/[28px] md:text-[17.44px]/[28px] -tracking-[0.2px]">
                <p>
                  We&apos;re super excited to share that Fedir, one of our
                  students, came in 2nd place in Computer Science at the
                  2024-2025 National BETA State Convention!
                </p>

                <p>
                  This is a huge achievement, and we&apos;re so proud of
                  Fedir&apos;s hard work and dedication. It also shows how our
                  online classes are helping kids build real tech skills and
                  compete at top levels.
                </p>
              </div>
            </div>
          </div>
          {/* small video section */}
          <div
            className="block xl:hidden relative w-[full] aspect-video xl:aspect-auto xl:h-[567px] cursor-pointer group px-4"
            onClick={() => setVideoOpen(true)}
          >
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity group-hover:opacity-90">
              <div className="bg-[#FBF8E6] rounded-full p-4 sm:p-6 shadow-lg transform transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 sm:h-8 sm:w-8 text-black fill-black" />
              </div>
            </div>

            {/* Border Decoration */}
            <div
              className="absolute inset-0 h-full w-full bg-center bg-no-repeat z-[5]"
              style={{
                backgroundImage: `url(/images/thick_border-play_img.webp)`,
                backgroundSize: "100px 100px",
              }}
            ></div>

            {/* Image */}
            <Image
              src="/images/kids_competition-img.webp"
              alt="A coding competition for kids"
              width={473}
              height={567}
              className="w-full md:-w-[321px] h-[382.84px] lg:w-full lg:h-[567px] rounded object-cover"
            />
          </div>
        </div>
      </div>
      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[1000px] 2xl:max-w-[1200px] 3xl:max-w-[1280px] p-0 bg-black h-[50vh] xl:h-auto overflow-hidden border-0 rounded [&>button[data-state]]:hidden">
          <DialogTitle className="sr-only">
            National BETA State Convention Video
          </DialogTitle>

          <DialogClose className="absolute right-2 top-2 sm:right-4 sm:top-4 z-50 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all">
            <X className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/-exSmCcoY1E?autoplay=1"
              title="Student Competition Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
