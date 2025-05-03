"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
// import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import * as React from "react"

export const menu: {
  title: string

  pages?: { title: string; link: string; icon?: string; isReady: boolean }[]
  link: string
}[] = [
  {
    title: "Schools",
    link: "",
    pages: [
      {
        title: "School of Software Development",
        link: "/schools/software-development",
        icon: "/school-logo_soft.svg",
        isReady: true,
      },

      {
        title: "School of Artificial Intelligence",
        link: "/schools/artificial-intelligence",
        icon: "/school-logo_artintl.svg",
        isReady: true,
      },
      {
        title: "School of Product Design",
        link: "/schools/product-design",
        icon: "/school-logo_prod.svg",
        isReady: true,
      },
      {
        title: "School of Blockchain Technology",
        link: "/schools/blockchain-technology",
        icon: "/school-logo_blkchn.svg",
        isReady: true,
      },
    ],
  },
  {
    title: "Company",
    link: "",
    pages: [
      {
        title: "About Xelaris",
        link: "/company/about-us",
        icon: "/about-us.svg",
        isReady: true,
      },
      {
        title: "Career at Xelaris",
        link: "/company/careers",
        icon: "/contact-us.svg",
        isReady: false,
      },
    ],
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  // {
  //   title: "Internship",
  //   link: "/internship",
  // },
]
export function NavMenu({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu className="hidden xl:flex">
      <NavigationMenuList>
        {menu?.map((item, index) => {
          return (
            <NavigationMenuItem key={`item-${index}`}>
              {item.pages && item.pages.length > 0 ? (
                <>
                  <NavigationMenuTrigger className="text-[#1F1F1F] text-[13.34px] leading-5 font-inter font-medium tracking-normal align-middle">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg-md:w-[717px]">
                      {item.pages?.map((item, index) => (
                        <span
                          key={index}
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
                        </span>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <div
                  className={cn(
                    "text-[#1F1F1F] text-[13.34px] leading-5 font-inter font-medium tracking-normal align-middle hover:underline",
                    pathname.includes(item.link) && "text-primary font-semibold"
                  )}
                >
                  <NavigationMenuLink
                    href={item.link}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </div>
              )}
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
