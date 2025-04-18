import WhiteAppLogo from "@/components/svgs/white-app-logo"
import type { Metadata } from "next"
import Link from "next/link"
import Banner from "../_components/Banner"

export const metadata: Metadata = {
  title: "Admin signup | Xelaris",
  description: "Xelaris admin signup page",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between min-h-screen bg-secondary relative place-content-center">
      <div />
      <div className="w-full py-6 px-3 flex flex-col justify-center items-center gap-8">
        <Link href="/">
          <WhiteAppLogo className="w-[150px] h-[80px]" />
        </Link>
        <div className="w-full h-full lg:w-[542px] flex flex-col gap-8">
          {children}
          <p className="space-x-1 font-inter font-normal text-[17px]/[100%] text-left tracking-normal text-[#FBF8E6]">
            Go back to?{" "}
            <Link href="/login" className="text-primary">
              Login
            </Link>
          </p>
        </div>
      </div>

      <Banner />
    </div>
  )
}
