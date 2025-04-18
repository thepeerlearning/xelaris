import Link from "next/link"
import Banner from "../_components/Banner"
import { SignupForm } from "../_components/Form"
import WhiteAppLogo from "@/components/svgs/white-app-logo"

export default function AdminSignup() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      {/* Scrollable content */}
      <div className="flex-grow overflow-auto flex items-center justify-center">
        <div className="w-full max-w-lg py-6 px-3 flex flex-col">
          <Link href="/">
            <WhiteAppLogo className="w-[150px] h-[80px] mx-auto" />
          </Link>

          <SignupForm />

          <p className="text-[17px] font-inter text-[#FBF8E6] text-left mt-4 px-2 xl:px-0">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-bold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <Banner />
    </div>
  )
}
