"use client"

import {
  AnchorIcon,
  DoubleCheck,
  PersonSetting,
  Users,
} from "@/components/svgs"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import type { CarouselApi } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { questions, testimonies } from "@/lib/data"
import { cn } from "@/lib/utils"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import Autoplay from "embla-carousel-autoplay"
import { ChevronDown, PlusIcon } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
// Custom Accordion components
const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-left group",
        className
      )}
      {...props}
    >
      {children}
      <div className="w-[38px] h-[38px] border border-[#A2A2A2] rounded flex justify-center items-center transition-all">
        <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-[#FBF8E6] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = "AccordionContent"

const modules = [
  "Introduction to Product Design",
  "Design Thinking & User-Centered Design",
  "Visual Design Principles (Typography, Color, Layout, UI Design)",
  "Wireframing & Prototyping",
  "User Research & Usability Testing",
  "Design Systems & Component Libraries",
  "Building Interfaces with No-Code Tools",
  "Portfolio Development",
]
const icons = [
  "/figma.svg",
  "/tota11y.svg",
  "/stark.svg",
  "/miro.svg",
  "/ux-check.svg",
  "/excalidraw.svg",
  "/material-design.svg",
]

export default function CourseDescription() {
  // Calculate the number of rows in the grid
  const totalItems = questions.length
  const lastItemIndex = totalItems - 1
  const secondLastItemIndex = totalItems - 2

  const autoplayRef = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  )

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )
  const SECTION_IDS = ["introduction", "xelaris", "learn", "review", "faq"]
  function useActiveSection(ids: string[]) {
    const [active, setActive] = useState<string>("")
    useEffect(() => {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(e.target.id)
          })
        },
        { threshold: 0.5, rootMargin: "0px 0px -50% 0px" }
      )
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el) io.observe(el)
      })
      return () => io.disconnect()
    }, [ids])
    return active
  }
  const activeId = useActiveSection(SECTION_IDS)

  const introduction = (
    <div
      id="introduction"
      className="w-full min-h-[828px] rounded-[6px] py-[64px] px-5 lg:px-10 2xl:p-[64px] bg-secondary overflow-hidden"
    >
      <div className="w-full flex flex-col gap-[30px] lg:gap-[58px]">
        <h2 className="w-full h-[85px] pb-[49px] border-b border-[#6C6A6B] font-inter font-normal text-[#FBF8E6] text-[28px]/[28px] -tracking-[0.84px] align-middle">
          Introduction
        </h2>
        <p className="w-full font-inter font-normal text-[#A2A2A2] text-[18px]/[27.6px] -tracking-[0.66px] flex flex-col gap-4">
          Product Designers, also known as UX/UI Designers, are the creative
          minds behind the look and feel of the apps and websites you use every
          day. They research, sketch, and perfect everything you touch and see
          on your phone and computer. From tech startups to major brands across
          all industries, companies depend on Product Designers to create
          experiences people love.
          <span>
            Every digital product has two essential aspects: functionality and
            user experience. The user experience is how people interact with and
            feel about a product—whether it&apos;s intuitive, satisfying, or
            frustrating to use. Product Designers specialize in understanding
            human behavior and creating beautiful, thoughtful interfaces that
            make technology accessible and enjoyable for everyone.
          </span>
        </p>
        <div className="w-full flex flex-col xl:flex-row xl:h-[293.02px]">
          <div className="flex xl:hidden w-full xl:w-[439.53px] xl:h-[293.02px] p-6 rounded-tr rounded-br bg-primary">
            <p className="w-full font-inter font-normal text-[18px]/[27px] text-[#FBF8E6] -tracking-[0.66px] align-middle">
              All our classes are flexible, personalized, and guided by
              experienced software engineers. Your child will practice hands-on,
              build real-world projects, and receive 1-on-1 support all on a
              schedule that works best for them.
            </p>
          </div>
          <div className="w-full xl:w-[439.53px] rounded-y">
            <Image
              src="/images/prod-design_1.webp"
              alt="course introduction picture"
              width={439.53}
              height={439.53}
              className="w-full xl:h-full object-cover"
              priority
            />
          </div>
          <div className="hidden xl:flex w-full xl:w-[439.53px] h-[293.02px] p-6 rounded-tr rounded-br bg-primary">
            <p className="w-full font-inter font-normal text-[18px]/[27px] text-[#FBF8E6] -tracking-[0.66px] align-middle">
              All our classes are flexible, personalized, and guided by
              experienced software engineers. Your child will practice hands-on,
              build real-world projects, and receive 1-on-1 support all on a
              schedule that works best for them.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  const xelaris = (
    <div
      id="xelaris"
      className="w-full min-h-[828px] rounded-[6px] py-[64px] px-5 lg:px-10 2xl:p-[64px] bg-secondary overflow-hidden"
    >
      <div className="w-full flex flex-col gap-[30px] lg:gap-[58px]">
        <h2 className="w-full h-[85px] pb-[49px] border-b border-[#6C6A6B] font-inter font-normal text-[#FBF8E6] text-[28px]/[28px] -tracking-[0.84px] align-middle">
          Why Xelaris
        </h2>
        <div className="w-full grid grid-cols-1 lg-md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col gap-2">
            <PersonSetting />
            <h4 className="font-normal font-inter text-[18px]/[24px] text-[#FBF8E6] tracking-normal align-middle">
              Skilled-Experienced Instructors
            </h4>
            <p className="font-normal font-inter text-[18px]/[28px] text-[#A2A2A2]">
              Our instructors are carefully selected, they have both the tech
              industry experience knowledge and the passion to deliver
              exceptional instruction.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-2">
            <Users />
            <h4 className="font-normal font-inter text-[18px]/[24px] text-[#FBF8E6] tracking-normal align-middle">
              Student Support
            </h4>
            <p className="font-normal font-inter text-[18px]/[28px] text-[#A2A2A2]">
              If a student needs extra help, instructors are always available to
              answer questions, even outside of class time. Plus, we run 24/7
              customer support.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-2">
            <AnchorIcon />
            <h4 className="font-normal font-inter text-[18px]/[24px] text-[#FBF8E6] tracking-normal align-middle">
              Real-World Coding Tools
            </h4>
            <p className="font-normal font-inter text-[18px]/[28px] text-[#A2A2A2]">
              Student will learn learn to use the key popular developer tools
              tools that are part of any Software Engineer&apos;s workflow like
              Git, GitHub, VS Code, and Chrome Dev Tools.
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col gap-2">
            <DoubleCheck />
            <h4 className="font-normal font-inter text-[18px]/[24px] text-[#FBF8E6] tracking-normal align-middle">
              Structured Curriculum
            </h4>
            <p className="font-normal font-inter text-[18px]/[28px] text-[#A2A2A2]">
              Our curriculum is carefully designed for a structured learning
              path to mastery. Each course builds on the previous one, ensuring
              each child&apos;s coding skills progress steadily.
            </p>
          </div>
        </div>
        <div className="w-ful xl:h-[386.63px] flex flex-col xl:flex-row">
          <div className="w-full xl:w-[248px] h-full p-6 rounded-tr rounded-br bg-primary">
            <p className="font-inter font-normal text-[18px]/[27px] text-[#FBF8E6] -tracking-[0.66px] align-middle">
              We carefully select our instructors—only the top 2% of applicants
              make the cut. That means your child learns from coding experts who
              aren&apos;t just technically brilliant but also passionate about
              teaching and inspiring young learners.
            </p>
          </div>
          <div className="w-full h-full xl:w-[579.94px]">
            <Image
              src="/images/prod-design_2.webp"
              alt="course introduction picture"
              width={579.94}
              height={386.63}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
  const whyXelaris = (
    <div
      id="learn"
      className="w-full min-h-[828px] rounded-[6px] py-[64px] px-5 lg:px-10 2xl:p-[64px] bg-secondary overflow-hidden"
    >
      <div className="w-full flex flex-col gap-[30px] lg:gap-[30px]">
        <h2 className="w-full h-[85px] pb-[49px] border-b border-[#6C6A6B] font-inter font-normal text-[#FBF8E6] text-[28px]/[28px] -tracking-[0.84px] align-middle">
          What you&apos;ll learn
        </h2>
        <p className="w-full font-inter font-normal text-[#A2A2A2] text-[18px]/[27.6px] -tracking-[0.66px] flex flex-col gap-4">
          This curriculum is thoughtfully designed to equip students with a
          strong foundation in product design principles while making learning
          both fun and engaging. Through a progressive, structured approach,
          students will master key design concepts step by step through Capstone
          course.
        </p>
        <div className="w-full flex flex-col bg-[#FBF8E6] rounded">
          <div className="w-full bg-primary h-[73px] p-6 rounded-tl rounded-tr">
            <h4 className="font-inter font-normal text-[18px]/[25.2px] text-[#FBF8E6] -tracking-[0.54px] align-middle">
              Frontend development curriculum
            </h4>
          </div>
          {modules?.map((module, index) => {
            // Check if the module contains newlines
            if (module.includes("\n")) {
              // Split the module into main title and sub-modules
              const parts = module.split("\n")
              const mainTitle = parts[0].trim()

              // Process sub-modules (remove leading dots and trim)
              const subModules = parts
                .slice(1)
                .map((part) => part.trim())
                .filter((part) => part.length > 0)
                .map((part) =>
                  part.startsWith(".") ? part.substring(1).trim() : part
                )

              return (
                <div key={index}>
                  <div className="w-full p-6 rounded-tl rounded-tr border-t-[0.3px] border-[#6C6A6B]">
                    <h4 className="font-inter font-normal text-[17.44px]/[25.2px] text-secondary -tracking-[0.54px] align-middle flex gap-6 items-center">
                      <span className="w-[14px] h-[7px] bg-secondary shrink-0"></span>{" "}
                      {mainTitle}
                    </h4>
                    {subModules.length > 0 && (
                      <div className="pl-9 pr-6 pt-2">
                        {subModules.map((subModule, subIndex) => (
                          <p
                            key={subIndex}
                            className="font-inter font-normal text-[15px]/[22px] text-secondary -tracking-[0.42px] mb-2 flex items-start"
                          >
                            <span className="mr-2">•</span> {subModule}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            } else {
              // Regular module without sub-modules
              return (
                <div
                  key={index}
                  className="w-full p-6 rounded-tl rounded-tr border-t-[0.3px] border-[#6C6A6B]"
                >
                  <h4 className="font-inter font-normal text-[17.44px]/[25.2px] text-secondary -tracking-[0.54px] align-middle flex gap-6 items-center">
                    <span className="w-[14px] h-[7px] bg-secondary"></span>{" "}
                    {module}
                  </h4>
                </div>
              )
            }
          })}
        </div>
        <div className="w-full flex flex-col gap-[29px]">
          <h4 className="font-inter font-normal text-[20px]/[27.5px] lg:text-[22px]/[27.5px] text-[#FBF8E6] -tracking-[-0.66px]">
            Software Engineering Immersive Tools and Technologies
          </h4>
          <div className="max-w-[325px] flex flex-wrap gap-4">
            {icons?.map((icon, index) => (
              <Image
                key={index}
                src={icon || "/placeholder.svg"}
                alt="tech icons"
                width={155}
                height={15}
                className="h-auto w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const reviews = (
    <div
      id="review"
      className="w-full min-h-[828px] rounded-[6px] py-[64px] px-5 lg:px-10 2xl:p-[64px] bg-secondary overflow-hidden"
    >
      <div className="w-full flex flex-col gap-[30px] lg:gap-[58px]">
        <h2 className="w-full h-[85px] pb-[49px] border-b border-[#6C6A6B] font-inter font-normal text-[#FBF8E6] text-[28px]/[28px] -tracking-[0.84px] align-middle">
          Reviews
        </h2>
        <p className="w-full font-inter font-normal text-[#A2A2A2] text-[18px]/[27.6px] -tracking-[0.66px] flex flex-col gap-4">
          See how we&apos;re making a difference! Hear from parents about their
          experiences. At Xelaris, we let our success stories speak for
          themselves. These heartfelt testimonials showcase the real results
          that happen within our programs.
        </p>
        <Carousel
          plugins={[autoplayRef.current]}
          className="w-full"
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {testimonies?.map((item, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="bg-[#FBF8E6] flex flex-col xl:flex-row h-full xl:h-[315px] rounded">
                  <div className="w-full xl:w-[439.53px] h-[191px] md:h-[250px] rounded-tr rounded-br bg-primary xl:hidden flex-col py-6 px-2">
                    <p className="w-full h-[100px] sm-md:h-[150px] xl:h-full rounded-tr rounded-br bg-primary custom-scrollbar  overflow-y-auto font-inter font-normal text-[14px]/[24px] lg:text-[18px]/[27px] text-[#FBF8E6] -tracking-[0.66px] align-middle break-all whitespace-normal">
                      {item.text}
                    </p>
                    <p className="font-inter font-normal text-[20px]/[27.5px] text-[#FBF8E6] -tracking-[0.66px] break-all whitespace-normal pt-4">
                      {item.author}
                    </p>
                  </div>
                  <div className="w-full h-[220px] md:h-[320px] lg:h-[202px] xl:h-full xl:w-[439.53px] rounded">
                    <Image
                      src={item.img || "/placeholder.svg"}
                      alt={`testimony of ${item.author}`}
                      width={439.53}
                      height={315}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="hidden w-full xl:w-[439.53px] h-full p-6 rounded-tr rounded-br bg-primary  xl:flex flex-col justify-between">
                    <p className="w-full h-[200px] md:h-full p-6 rounded-tr rounded-br bg-primary custom-scrollbar  overflow-y-auto font-inter font-normal text-[18px]/[27px] text-[#FBF8E6] -tracking-[0.66px] align-middle">
                      {item.text}
                    </p>
                    <p className="font-inter font-normal text-[20px]/[27.5px] text-[#FBF8E6] -tracking-[0.66px]">
                      {item.author}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-8">
            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-[17px] h-[8px] rounded transition-all ${
                    index === current ? "bg-primary w-6" : "bg-[#FBF8E6]"
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
  const faqs = (
    <div
      id="faq"
      className="w-full min-h-[828px] rounded-[6px] py-[64px] px-5 lg:px-10 2xl:p-[64px] bg-secondary overflow-hidden"
    >
      <div className="w-full flex flex-col gap-[30px] lg:gap-[58px]">
        <h2 className="w-full h-[85px] pb-[49px] border-b border-[#6C6A6B] font-inter font-normal text-[#FBF8E6] text-[28px]/[28px] -tracking-[0.84px] align-middle">
          FAQs
        </h2>
        <p className="w-full font-inter font-normal text-[#A2A2A2] text-[18px]/[27.6px] -tracking-[0.66px] flex flex-col gap-4">
          We&apos;re big on transparency. Get clear answers to the most
          frequently asked questions about our courses, schedule, and learning
          approach.
        </p>
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 gap-4 xl:gap-6 w-full xl:grid-cols-2"
        >
          {questions?.map((question, index) => {
            // For single column layout (mobile to lg)
            const isLastItem = index === lastItemIndex
            const isLastInColumn =
              (totalItems % 2 === 0 &&
                (index === lastItemIndex || index === secondLastItemIndex)) ||
              (totalItems % 2 === 1 &&
                (index === lastItemIndex ||
                  index === Math.floor(totalItems / 2) - 1))

            return (
              <AccordionItem
                value={`item-${index + 1}`}
                key={question.id}
                className={cn(
                  "w-full align-middle h-auto",
                  "border-t border-[#6C6A6B]",
                  isLastItem ? "border-b border-[#6C6A6B]" : "",
                  isLastInColumn
                    ? "xl:border-b xl:border-[#6C6A6B]"
                    : "xl:border-b-0"
                )}
              >
                <AccordionTrigger
                  className={cn(
                    "font-inter font-normal tracking-normal align-middle text-[#FBF8E6]",
                    "text-sm sm:text-[13px] md:text-[14px] lg:text-[15.25px]",
                    "leading-5 md:leading-6"
                  )}
                >
                  {question.question}
                </AccordionTrigger>
                <AccordionContent
                  className={cn(
                    "font-inter font-normal tracking-normal align-middle text-[#FBF8E6]",
                    "text-xs sm:text-[12px] md:text-[13px] lg:text-sm",
                    "leading-5 md:leading-6"
                  )}
                >
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </div>
  )
  return (
    <div className="w-full flex justify-center items-center relative pt-[64px] bg-[#FBF8E6]">
      <div className="max-w-[1297px] flex flex-col 2xl:flex-row gap-[30px] lg:gap-[58px]">
        {/* Menu */}
        <div className="w-full bg-secondary 2xl:bg-transparent pt-[20px] pb-[32px] px-5 lg:pl-8 lg:pr-1 2xl:px-0 2xl:w-[280px] h-[371.32px] 2xl:pb-[32px] flex flex-col gap-4 sticky top-0 2xl:-left-50 z-1">
          <Link
            href="#introduction"
            className={`${
              activeId === "introduction"
                ? "bg-secondary text-[#FBF8E6]"
                : "text-[#FBF8E6] 2xl:text-secondary"
            }  w-full h-[42px] 2xl:rounded-[6px] 2xl:border-b 2xl:border-[#FBF8E6] 2xl:border-none pt-3  font-inter font-normal text-[13.78px]/[17.64px] -tracking-[0.28px] align-middle p-3 flex justify-between items-center`}
          >
            Introduction{" "}
            <PlusIcon className="flex xl:hidden h-4 w-4 text-[#FBF8E6]" />
          </Link>
          <Link
            href="#xelaris"
            className={`${
              activeId === "xelaris"
                ? "bg-secondary text-[#FBF8E6]"
                : "text-[#FBF8E6] 2xl:text-secondary"
            }  w-full h-[42px] 2xl:rounded-[6px] 2xl:border-b 2xl:border-[#FBF8E6] 2xl:border-none pt-3  font-inter font-normal text-[13.78px]/[17.64px] -tracking-[0.28px] align-middle p-3 flex justify-between items-center`}
          >
            Why Xelaris{" "}
            <PlusIcon className="flex xl:hidden h-4 w-4 text-[#FBF8E6]" />
          </Link>
          <Link
            href="#learn"
            className={`${
              activeId === "learn"
                ? "bg-secondary text-[#FBF8E6]"
                : "text-[#FBF8E6] 2xl:text-secondary"
            }  w-full h-[42px] 2xl:rounded-[6px] 2xl:border-b 2xl:border-[#FBF8E6] 2xl:border-none pt-3  font-inter font-normal text-[13.78px]/[17.64px] -tracking-[0.28px] align-middle p-3 flex justify-between items-center`}
          >
            What you&apos;ll learn{" "}
            <PlusIcon className="flex xl:hidden h-4 w-4 text-[#FBF8E6]" />
          </Link>
          <Link
            href="#review"
            className={`${
              activeId === "review"
                ? "bg-secondary text-[#FBF8E6]"
                : "text-[#FBF8E6] 2xl:text-secondary"
            }  w-full h-[42px] 2xl:rounded-[6px] 2xl:border-b 2xl:border-[#FBF8E6] 2xl:border-none pt-3  font-inter font-normal text-[13.78px]/[17.64px] -tracking-[0.28px] align-middle p-3 flex justify-between items-center`}
          >
            Review{" "}
            <PlusIcon className="flex xl:hidden h-4 w-4 text-[#FBF8E6]" />
          </Link>
          <Link
            href="#faq"
            className={`${
              activeId === "faq"
                ? "bg-secondary text-[#FBF8E6]"
                : "text-[#FBF8E6] 2xl:text-secondary"
            }  w-full h-[42px] 2xl:rounded-[6px] 2xl:border-b 2xl:border-[#FBF8E6] 2xl:border-none pt-3  font-inter font-normal text-[13.78px]/[17.64px] -tracking-[0.28px] align-middle p-3 flex justify-between items-center`}
          >
            FAQ <PlusIcon className="flex xl:hidden h-4 w-4 text-[#FBF8E6]" />
          </Link>
        </div>
        <div className="w-full min-h-full max-w-[996px] px-4 2xl:pr-0 2xl:pl-10 ">
          <div className="w-full h-full pb-10 2xl:pb-[64px] flex flex-col gap-6 lg:gap-[64px]">
            {/* Introduction */}
            {introduction}
            {/* Xelaris */}
            {xelaris}
            {/* Learn */}
            {whyXelaris}

            {/* Review */}
            {reviews}
            {/* FAQ */}
            {faqs}
          </div>
        </div>
      </div>
    </div>
  )
}
