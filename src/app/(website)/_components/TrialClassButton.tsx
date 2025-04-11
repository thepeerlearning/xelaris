"use client"
import { Button } from "@/components/ui/button"
import { DialogClose, DialogTitle } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import React from "react"

interface TrialClassButtonProps {
  className?: string
  buttonText?: string | React.ReactNode
}

const TrialClassButton: React.FC<TrialClassButtonProps> = ({
  className = "",
  buttonText = "Book a Free Class",
}) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [open, setOpen] = React.useState(false)

  const calLink = "https://cal.com/xelaris/trial-class?user=xelaris"

  const fullUrl = calLink.startsWith("http")
    ? calLink
    : `https://cal.com/${calLink}`

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="default"
          className={cn(
            "h-[40px] py-[13px] px-[21px] rounded border border-solid border-primary font-inter font-normal text-white text-sm leading-[14px] tracking-normal uppercase cursor-pointer",
            className
          )}
        >
          {buttonText}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-w-screen h-screen min-h-screen">
        <DialogTitle className="sr-only">
          National BETA State Convention Video
        </DialogTitle>

        <DialogClose className="absolute right-2 top-2 sm:right-4 sm:top-4 z-50 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all">
          <X className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="w-full min-h-[100vh] relative ">
          <div className="w-full overflow-hidden rounded">
            <div className="w-full flex justify-center items-center">
              <div className="w-full flex flex-col gap-4 flex-1">
                <div className="w-full flex flex-col">
                  <div className="relative flex-1 h-[100vh]">
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center rounded">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                      </div>
                    )}
                    <iframe
                      src={fullUrl}
                      className="w-full h-[100vh] border-none"
                      onLoad={() => setIsLoading(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default TrialClassButton
