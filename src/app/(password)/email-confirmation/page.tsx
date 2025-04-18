"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function EmailConfirmation() {
  const search = useSearchParams()
  const email = search.get("email")

  return (
    <Card className="w-full h-[301px] xl:w-[542px] rounded bg-[#FBF8E6] shadow-[0px_15px_35px_0px_#3C425714_0px_5px_15px_0px_#0000001F]">
      <div className="w-full h-full flex flex-col justify-center items-center gap-6 ">
        <div className="w-full xl:w-[419px] flex flex-col gap-3">
          <h2 className="text-[#232426] font-inter font-normal text-[24px]/[100%] tracking-normal">
            Check your email
          </h2>
          <p className="font-inter font-normal text-[15.63px]/[22px] tracking-normal">
            We sent a password reset link to your email address. {email}
          </p>
          <p className="font-inter font-normal text-[15.63px]/[22px] tracking-normal text-[#232426] mt-8">
            Didn&apos;t receive the email?{" "}
            <Link
              href="/forgot-password"
              className="text-primary cursor-pointer hover:underline"
            >
              Click to resend
            </Link>
          </p>
        </div>
      </div>
    </Card>
  )
}
