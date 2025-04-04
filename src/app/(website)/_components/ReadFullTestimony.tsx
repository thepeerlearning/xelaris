"use client"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight, X } from "lucide-react"
import { useState } from "react"

interface TestimonyProps {
  testimony: {
    id: number
    author: string
    location: string
    img: string
    summary: string
    shortText: string
    text: string
  }
}

export function ReadFullTestimony({ testimony }: TestimonyProps) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 p-0 h-auto w-auto font-normal text-primary text-sm 2xl:text-[15px] leading-[22px] hover:bg-transparent">
          Read The Full Testimonial <ArrowRight className="w-[18px] h-[18px]" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0 border border-[#999999]/20 bg-[#FBF8E6] shadow-[0px_8px_8px_-4px_rgba(16,24,40,0.04),0px_20px_24px_-4px_rgba(16,24,40,0.1)] [&>button]:hidden rounded-[12px]">
        <DialogHeader className="bg-[#202426] pt-6 pb-5 px-6 rounded-tr-[12px] rounded-tl-[12px]">
          <div className="w-full flex justify-between">
            <DialogTitle className="p-0">
              <div className="flex flex-col">
                <h4 className="font-semibold text-white text-[30px] leading-[40px]">
                  {testimony.location}
                </h4>
                <p className="font-normal text-white text-[20px] leading-[30px]">
                  {testimony.author}
                </p>
              </div>
            </DialogTitle>
            <DialogClose>
              <span className="bg-[#FBF8E6] w-[44px] h-[44px] rounded-full border border-[#999999]/10 flex justify-center items-center cursor-pointer">
                <X className="text-[#202426] w-[18.33px] h-[18.33px]" />
              </span>
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="p-6">
          <div className="font-normal text-[#202426] text-[15px] leading-[26px] whitespace-pre-line">
            {testimony.text}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
