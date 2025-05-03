"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogOverlay } from "@radix-ui/react-dialog"
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
      <DialogOverlay className="fixed inset-0 bg-[#CBCBCB]/20 backdrop-blur-[14px] z-50" />
      <DialogContent className="h-[723px] max-w-screen xl:max-h-[95vh] w-[352px] lg:w-[425px] xl:w-[576px] bg-transparent shadow-none border-0 [&>button]:hidden [&_[data-radix-dialog-close]]:hidden px-0 overflow-y-auto">
        <div className="w-full h-full relative">
          <span
            className="absolute right-0 -top-6 bg-primary w-[44px] h-[44px] rounded-full border border-[#999999]/10 flex justify-center items-center cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <X className="text-[#FBF8E6] w-[18.33px] h-[18.33px]" />
          </span>
          <span className="sr-only">Close</span>

          <div className="w-full h-full pt-8">
            <DialogHeader className="bg-[#202426] pt-4 pb-5 px-6 rounded-tr-[12px] rounded-t-[12px]">
              <div className="w-full flex justify-between">
                <DialogTitle className="p-0">
                  <div className="w-full flex flex-col">
                    <h4 className="font-semibold text-white text-[30px] leading-[40px]">
                      {testimony.location}
                    </h4>
                    <p className="font-normal text-white text-[20px] leading-[30px]">
                      {testimony.author}
                    </p>
                  </div>
                </DialogTitle>
              </div>
            </DialogHeader>
            <div className="w-full h-[80%] py-6 px-4 lg:p-6 border border-[#999999]/20 bg-[#FBF8E6] shadow-[0px_8px_8px_-4px_#1018280A_0px_20px_24px_-4px_#1018281A] rounded-b-[12px] overflow-y-auto">
              <p className=" font-normal text-[#202426] text-[15px] leading-[26px] whitespace-pre-line">
                {testimony.text}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
