"use client"

import { SuccessIcon } from "@/components/svgs"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EmailConfirmation() {
  return (
    <Card className="w-full xl:w-[542px] rounded bg-[#FBF8E6] shadow-[0px_15px_35px_0px_#3C425714_0px_5px_15px_0px_#0000001F]">
      <div className="w-full flex flex-col justify-center items-center gap-6 ">
        <div className="w-full px-3 xl:w-[418px] h-[297px] flex flex-col justify-center items-center gap-3">
          <SuccessIcon />
          <h2 className="text-[#232426] text-center lg:text-left font-inter font-normal text-xl xl:text-[24px]/[100%] tracking-normal">
            Password successfully reset!
          </h2>
          <p className="font-inter font-normal text-[15.63px]/[22px] tracking-normal">
            Sign in with your new password.
          </p>
          <Link
            href="/login"
            className="w-full h-[46px] py-[9px] px-[13px] font-inter font-normal text-[17px]/[24px] bg-primary text-[#FFFAF3] tracking-normal mt-6 flex justify-center items-center  gap-1 "
          >
            Back to login <ArrowRight />
          </Link>
        </div>
      </div>
    </Card>
  )
}
