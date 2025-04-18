"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PageNotFound() {
  const router = useRouter()
  return (
    <div className="bg-white bg-no-repeat bg-top bg-fixed relative flex flex-col items-center min-h-[100vh] overflow-hidden place-content-center">
      <div className="bg-top bg-no-repeat max-w-[768px] flex flex-col justify-center items-center bg-white">
        <Button className="w-fit h-[48px] flex gap-[2px] justify-center items-center py-[12px] px-[18px] rounded-lg border border-solid border-[#D0D5DD] bg-white shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] cursor-pointer">
          <span className="text-error text-5xl -mt-1">&bull;</span>
          <p className="text-[#667085] font-semibold font-inter text-[16px]/[20px]">
            404 error
          </p>
        </Button>
        <h1 className="w-full flex text-center flex-col text-secondary m-0 font-bold font-inter text-2xl sm:text-[32px]/[38px] xl:text-[50px]/[52px] -tracking-[0.02em] my-4">
          We can&apos;t find this page
          <span className="text-center text-secondary m-0 font-normal font-inter text-base xl:text-[20px]/[30px]">
            No worries, we&apos;ll send you reset instructions.
          </span>
        </h1>
        <div className="w-full flex flex-col xl:flex-row gap-4 justify-center items-center mt-[32px] px-4">
          <Button
            className="w-full md:w-fit h-[48px] gap-1 flex justify-center items-center py-[12px] px-[18px] rounded-lg border border-solid border-[#D0D5DD] bg-white text-[#667085] shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] cursor-pointer font-semibold font-inter text-lg"
            onClick={() => router.back()}
          >
            <ArrowLeft /> Go back
          </Button>
          <div
            className="w-full md:w-[150px] h-[48px] flex justify-center items-center py-[12px] px-[18px] rounded-lg border border-solid border-[#D0D5DD] bg-primary text-white shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] cursor-pointer font-semibold font-inter text-[18px]/[28px] flex gap-2"
            onClick={() => router.push("/")}
          >
            Go home
          </div>
        </div>
        <Card
          onClick={() => router.push("/contact")}
          className="flex w-full max-w-[500px] cursor-pointer shadow-none border-t border-t-[#EAECF0] border-b border-b-[#EAECF0] mt-[116px]"
        >
          <CardHeader>
            <CardTitle className="w-full flex text-left flex-col text-[black] m-0 p-0 font-semibold font-inter text-xl/[30px]">
              Chat to us
            </CardTitle>
            <CardDescription className="text-left text-[#667085] m-0 font-normal font-inter text-[16px/[24px]">
              Can&apos;t find what you&apos;re looking for?
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
