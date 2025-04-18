import WhiteAppLogo from "@/components/svgs/white-app-logo"
import Link from "next/link"
import { AdminInformation } from "../../_components/adminForm"

export default function AdminSignup() {
  return (
    <div className="w-full flex flex-col justify-between min-h-screen bg-secondary relative">
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <Link href="/">
          <WhiteAppLogo className="w-[150px] h-[150px]" />
        </Link>
        <AdminInformation />
      </div>
    </div>
  )
}
