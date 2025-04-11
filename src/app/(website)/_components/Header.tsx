"use client"
import { MenuIcon } from "@/components/svgs"
import { X } from "lucide-react"
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
      <header className="w-full xxl:w-[1312px] fixed top-0 left-0 bg-[#FBF8E6]/50 h-[62px] z-10 border-b border-b-[#1F1F1F]/[5%] backdrop-blur-[25px] flex items-center">
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
              href="/parent-login"
              className="w-[143px] h-[40px] flex justify-center items-center font-inter font-normal text-secondary text-sm leading-[14px] tracking-normal px-4 py-2 uppercase border-[0.5px] border-solid border-[#FBF8E6]"
            >
              Parent Login
            </Link>
            <TrialClassButton />
          </div>
          <div className="xl:hidden" onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon />
          </div>
          <AnimatePresence>
            {isDrawerOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-full max-w-[300px] h-screen bg-[#FBF8E6] z-[200] p-6"
              >
                <div className="flex justify-end items-end mb-8">
                  <button onClick={() => setIsDrawerOpen(false)}>
                    <X size={24} className="text-secondary" />
                  </button>
                </div>
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
