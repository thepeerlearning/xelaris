import WhiteAppLogo from "@/components/svgs/white-app-logo"
import Link from "next/link"
import SignUpBanner from "../_components/Banner"
import { SignupForm } from "../_components/Form"

export default function SignupPage() {
  return (
    <div className="w-full flex flex-col justify-between min-h-screen bg-secondary relative">
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <Link href="/">
          <WhiteAppLogo className="w-[150px] h-[150px]" />
        </Link>
        <SignupForm />
      </div>

      <SignUpBanner />
    </div>
  )
}
