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
import Link from "next/link"
import { cn } from "@/lib/utils"

export const menu: {
  title: string

  pages?: { title: string; link: string; isReady: boolean }[]
  link: string
}[] = [
  {
    title: "Schools",
    link: "",
    pages: [
      {
        title: "School of Software Development",
        link: "/schools/software-development",
        isReady: true,
      },
      {
        title: "School of Product Design",
        link: "/schools/product-design",
        isReady: true,
      },
      {
        title: "School of Artificial Intelligence",
        link: "/schools/artificial-intelligence",
        isReady: true,
      },
      {
        title: "School of Blockchain Technology",
        link: "/schools/blockchain-technology",
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
        isReady: true,
      },
      {
        title: "Career at Xelaris",
        link: "/company/careers",
        isReady: true,
      },
      {
        title: "Contact Us",
        link: "/company/contact",
        isReady: true,
      },
    ],
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Internship",
    link: "/internship",
  },
]
export function NavMenu({ pathname }: { pathname: string }) {
  console.log("pathname", pathname)
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
                  <NavigationMenuContent className="bg-[#FBF8E6]  rounded">
                    {item.pages?.map((page, idx) => {
                      return (
                        <div
                          key={`page-${idx}`}
                          className="min-w-[300px] py-1 w-max grid gap-1 grid-cols-1"
                        >
                          <Link
                            href={page.link}
                            className={cn(
                              "font-normal font-inter text-secondary text-sm capitalize block px-4 py-2 hover:text-primary cursor-pointer rounded-[6px]",
                              !page.isReady &&
                                "cursor-not-allowed hover:text-secondary opacity-50",
                              pathname === page.link &&
                                "text-primary font-semibold"
                            )}
                          >
                            {page.title}{" "}
                            {!page.isReady && (
                              <span className="px-0.5  text-xs font-bold text-red-500">
                                Coming Soon
                              </span>
                            )}
                          </Link>
                        </div>
                      )
                    })}
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
