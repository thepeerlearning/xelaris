import Link from "next/link"
import Banner from "../../(signup)/_components/Banner"
import WhiteAppLogo from "@/components/svgs/white-app-logo"
import { ParentInformation } from "./_components/Form"

export default function AdminSignup() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      {/* Scrollable content */}
      <div className="flex-grow overflow-auto flex items-center justify-center">
        <div className="w-full max-w-lg px-3 py-6 flex flex-col gap-8">
          <Link href="/">
            <WhiteAppLogo className="w-[150px] h-[150px] mx-auto" />
          </Link>

          <ParentInformation />

          <p className="text-[17px] font-inter text-[#FBF8E6] text-left px-2">
            Already have an account?{" "}
            <Link href="/signup" className="text-primary font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Banner />
    </div>
  )
}
