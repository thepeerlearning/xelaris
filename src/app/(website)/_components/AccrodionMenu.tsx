"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { menu } from "./NavMenu"
import TrialClassButton from "./TrialClassButton"

export function MobileMenu({
  closeDrawer,
  pathname,
}: {
  closeDrawer: () => void
  pathname: string
}) {
  return (
    <div className="w-full h-full flex flex-col justify-between pb-30">
      <Accordion type="multiple" className="w-full">
        {menu.map((item, index) => {
          // If the menu item has sub-pages, render as accordion item
          if (item.pages && item.pages.length > 0) {
            return (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-sm text-[#202426] leading-5 font-inter font-medium tracking-normal align-middle">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-4">
                    {item.pages.map((page, pageIndex) => {
                      return (
                        <Link
                          key={pageIndex}
                          href={page.isReady ? page.link : "#"}
                          className={cn(
                            "text-sm text-[#202426] font-inter font-medium tracking-normal align-middle hover:underline",
                            !page.isReady && "cursor-not-allowed opacity-50",
                            pathname === page.link &&
                              "text-primary font-semibold"
                          )}
                          onClick={(e) => {
                            if (!page.isReady) {
                              e.preventDefault()
                            }
                            // If you want to call closeDrawer, do it like this:
                            closeDrawer()
                          }}
                        >
                          {page.title}
                          {!page.isReady && (
                            <span className="px-0.5  text-xs font-bold text-red-500">
                              Coming Soon
                            </span>
                          )}
                        </Link>
                      )
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          }

          // If the menu item has no sub-pages, render as a direct link
          return (
            <div key={index} className="py-4 border-b">
              <Link
                href={item.link}
                className={cn(
                  "text-sm text-[#202426] leading-5 font-inter font-medium tracking-normal align-middle hover:underline",
                  pathname === item.link && "text-primary font-semibold"
                )}
              >
                {item.title}
              </Link>
            </div>
          )
        })}
      </Accordion>
      <div className="w-full flex flex-col gap-[12px]">
        <TrialClassButton className="w-full py-[13px]" />
        <Link
          href="/parent-login"
          className="w-full h-[40px] flex justify-center items-center font-inter font-normal text-secondary text-sm leading-[14px] tracking-normal px-4 py-[13px] uppercase border-[0.5px] border-solid border-[#6C6A6B] rounded"
        >
          Parent Login
        </Link>
      </div>
    </div>
  )
}
