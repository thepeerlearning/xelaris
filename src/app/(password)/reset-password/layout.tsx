import WhiteAppLogo from "@/components/svgs/white-app-logo"
import type { Metadata } from "next"
import Link from "next/link"
import Banner from "../_components/Banner"

export const metadata: Metadata = {
  title: "Password Reset | Xelaris",
  description: "Xelaris password reset page",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between min-h-screen bg-secondary relative place-content-center ">
      <div className="hidden lg:block" />
      <div className="w-full py-6 px-3 flex flex-col justify-center items-center gap-8">
        <Link href="/">
          <WhiteAppLogo className="w-[150px] h-[80px]" />
        </Link>
        <div className="w-full h-full lg:w-[542px]">{children}</div>
      </div>

      <Banner />
    </div>
  )
}
