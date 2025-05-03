"use client"
import { MenuIcon } from "@/components/svgs"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC, useEffect, useState } from "react"
import { MobileMenu } from "./AccrodionMenu"
import { NavMenu } from "./NavMenu"
import TrialClassButton from "./TrialClassButton"

export const Header: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const pathname = usePathname()
  // Close drawer when pathname changes
  useEffect(() => {
    setIsDrawerOpen(false)
  }, [pathname])

  return (
    <div className="w-full relative flex justify-center items-center">
      <header className="w-full xxl:w-[1312px] fixed top-0 left-0 bg-[#FBF8E6]/50 h-[62px] z-[100] border-b border-b-[#1F1F1F]/[5%] backdrop-blur-[25px] flex items-center">
        <div className="w-full xl:container mx-auto px-6 xl:px-4 flex justify-between items-center place-content-center">
          {/* Logo */}
          <div>
            <Link href="/" className="block">
              <Image
                src="/xelaris.svg"
                alt="Xelaris Logo"
                width={105.59}
                height={37}
              />
            </Link>
          </div>
          {/* Navigation */}

          <NavMenu pathname={pathname} />
          <div className="sm-w-[280px] xl:w-[338px] h-[40px] hidden xl:flex items-center gap-[12px]">
            <Link
              href="/login"
              className="w-[143px] h-[40px] flex justify-center items-center font-inter font-normal text-secondary text-sm leading-[14px] tracking-normal px-4 py-2 uppercase border-[0.5px] border-solid border-[#FBF8E6]"
            >
              Parent Login
            </Link>
            <TrialClassButton />
          </div>
          <div
            className="xl:hidden w-[150px] flex gap-[15.99px]"
            onClick={() => setIsDrawerOpen(true)}
          >
            <Link
              href="/login"
              className="w-[90px] h-[36px] max-w-[139.77px] rounded py-[11px] px-[21px] bg-[#1F1F1F0D] text-[#1F1F1F] text-[13.45px]/[14px] font-normal font-inter text-center align-middle tracking-normal"
            >
              Sign in
            </Link>
            <span className="w-[39px] h-[36px] rounded py-[9px] px-[11px] bg-[#1F1F1F0D] text-[#1F1F1F] flex justify-center items-center cursor-pointer">
              <MenuIcon />
            </span>
          </div>
          <AnimatePresence>
            {isDrawerOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-[69px] right-4 xl:left-[10px] xl:right-[10px] w-full sm:w-[360px] rounded-[25px] h-[748px] text-[#FBF8E6] bg-[#202426] z-[200] p-6 overflow-y-auto  max-h-[calc(100vh-80px)]"
              >
                <MobileMenu
                  pathname={pathname}
                  closeDrawer={() => setIsDrawerOpen(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </div>
  )
}
