"use client"

import { Button } from "@/components/ui/button"
import type { CarouselApi } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"

export default function MediaCard() {
  /* 1 ▸ create the plugin ONCE and keep the same reference */
  const autoplay = useRef(
    Autoplay({
      delay: 5000, // 5 s between slides
      stopOnInteraction: false, // keep playing after swipe / dot‑click
      stopOnMouseEnter: true, // pause while the user hovers
      // no custom rootNode needed — default root works fine
    })
  ).current

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  /* 2 ▸ normal Embla bookkeeping (unchanged) */
  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api])

  return (
    <div className="w-full min-h-[629.52px] bg-[#FEBAAB] relative px-[33.5px] xl:px-[43.5px] py-[64px] flex justify-center items-center">
      <div className="w-full max-w-[1196px] h-full flex flex-col py-8 px-3 xl:gap-12">
        <h2 className="w-full font-inter font-medium text-[#081A31] text-[50px]/[100px] text-center uppercase -tracking-[1.2px]">
          In The Media
        </h2>

        {/* 3 ▸ hand the ONE plugin instance to Embla */}
        <Carousel
          plugins={[autoplay]}
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <CarouselItem
                key={index}
                className="w-full flex flex-col gap-6 justify-center items-center"
              >
                <div className="w-full h-[185.52px] flex flex-col lg:flex-row gap-4 justify-center items-center">
                  <Image
                    src="/logo_condia.svg"
                    alt="media logo"
                    width={439.53}
                    height={315}
                    className="w-auto h-auto"
                  />
                  <Image
                    src="/logo_technext.svg"
                    alt="media logo"
                    width={439.53}
                    height={315}
                    className="w-auto h-auto"
                  />
                </div>
                <Button
                  variant="outline"
                  className="bg-transparent border border-[#000000] mb-[20px]"
                >
                  Read more
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* dots */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-[17px] h-[8px] rounded transition-all ${
                    index === current ? "bg-primary w-6" : "bg-[#FBF8E6]"
                  }`}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}
