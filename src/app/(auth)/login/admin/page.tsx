import Link from "next/link"
import Banner from "../../../(signup)/_components/Banner"
import WhiteAppLogo from "@/components/svgs/white-app-logo"
import { AdminInformation } from "./_components/Form"

export default function AdminSignup() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      {/* Scrollable content */}
      <div className="flex-grow overflow-auto flex items-center justify-center">
        <div className="w-full max-w-lg p-6 flex flex-col gap-8">
          <Link href="/">
            <WhiteAppLogo className="w-[150px] h-[150px] mx-auto" />
          </Link>

          <AdminInformation />
        </div>
      </div>
      <Banner />
    </div>
  )
}
