"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { menu } from "./NavMenu"

export function MobileMenu({
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
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-[0.2px] border-[#6C6A6B] px-1"
              >
                <AccordionTrigger className="text-[18px]/[20px] text-[#FBF8E6] font-inter font-medium tracking-normal align-middle">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="border-b">
                  <ul className="grid w-[251px] grid-cols-1">
                    {item.pages?.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className={`w-[292px] flex gap-[15px] items-center py-[15px] px-[20px] rounded-[20px] justify-between bg-transparent hover:bg-[#FBF8E6] hover:text-[#202426] text-[#FBF8E6] cursor-pointer transition-all duration-300`}
                      >
                        <span className="w-full flex gap-[15px] justify-between">
                          <Image
                            src={item.icon || ""}
                            alt="school logo"
                            width={12}
                            height={12}
                            className="w-auto h-auto"
                          />
                          <span className="w-full font-inter font-semibold  text-[15px]/[100%] -tracking-[1%] align-middle">
                            {item.title}
                          </span>
                        </span>

                        <ArrowRight className="shrink-0 text-primary" />
                      </Link>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )
          }

          // If the menu item has no sub-pages, render as a direct link
          return (
            <div key={index} className="py-4 border-b-[0.2px] border-[#6C6A6B]">
              <Link
                href={item.link}
                className={cn(
                  "text-[18px]/[20px] text-[#FBF8E6] font-inter font-medium tracking-normal align-middle hover:underline",
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
        <Button className="w-full py-[13px]">
          <Link href="/signup" className="cursor-pointer">
            Sign up
          </Link>
        </Button>
        <Link
          href="/login"
          className="w-full h-[40px] flex justify-center items-center font-inter font-normal text-[#FBF8E6] text-sm leading-[14px] tracking-normal px-4 py-[13px] uppercase border-[0.5px] border-solid border-[#FBF8E6] rounded"
        >
          Parent Login
        </Link>
      </div>
    </div>
  )
}
