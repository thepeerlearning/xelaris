"use client"

import { cn } from "@/lib/utils"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import * as React from "react"

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
      <div className="w-[38px] h-[38px] border border-[#6C6A6B] rounded flex justify-center items-center transition-all">
        <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-secondary shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
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

export default function PricingFAQsSection() {
  // Calculate the number of rows in the grid
  const totalItems = questions.length
  const lastItemIndex = totalItems - 1
  const secondLastItemIndex = totalItems - 2

  return (
    <div className="w-full bg-[#FBF8E6] pt-10 pb-10 md:pt-16 lg:pt-[118px] lg:pb-10 min-h-[400px] md:min-h-[500px] lg:min-h-[637px] flex justify-center items-center">
      <div className="w-full max-w-[1390px] px-5 sm:px-6.5 md:px-8 lg:px-[44px] 2xl:px-[38px] 3xl:px-[24px] flex flex-col gap-6 md:gap-10 lg:gap-[64px]">
        <h4 className="w-full font-inter font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[60px]/[60px] tracking-normal align-middle text-secondary">
          FAQ
        </h4>
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
                    "font-inter font-normal tracking-normal align-middle text-secondary",
                    "text-sm sm:text-[13px] md:text-[14px] lg:text-[15.25px]",
                    "leading-5 md:leading-6"
                  )}
                >
                  {question.question}
                </AccordionTrigger>
                <AccordionContent
                  className={cn(
                    "font-inter font-normal tracking-normal align-middle text-secondary",
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
}

const questions = [
  {
    id: 1,
    question: "Why should kids and teens learn to code?",
    answer: `Coding offers a multitude of benefits for kids. It fosters logical thinking, problem-solving skills, and creativity, as kids learn to break down complex problems into smaller, manageable steps. These skills are invaluable not only in coding but also in various aspects of life.`,
  },
  {
    id: 2,
    question: "What ages are the classes for?",
    answer: `Our classes cater to students aged 7-18. If your child is outside this age range or you're seeking options for adults, reach out to us, and we'll help find the right program for you.`,
  },
  {
    id: 3,
    question: "How can I track my child's progress?",
    answer: `A key aspect of our coding courses for kids and teens is keeping parents informed on what happens during the online coding class. Instructors send session notes after each class detailing what they worked on and homework.`,
  },
  {
    id: 4,
    question: "What courses does Xelaris offer?",
    answer: `Xelaris currently offers live online coding classes for kids and teens. Our coding courses include Scratch Programming, Python, App Development, Web Development, Game Development, Data Science for kids, and UX/UI Design`,
  },
  {
    id: 5,
    question: "Is the coding course schedule flexible?",
    answer: `Yes! You can work the classes around your child's schedule by selecting any time and any day that works for you.`,
  },
  {
    id: 6,
    question: "How can I track my child's progress?",
    answer: `A key aspect of our coding courses for kids and teens is keeping parents informed on what happens during the online coding class. Instructors send session notes after each class detailing what they worked on and homework.`,
  },
  {
    id: 7,
    question: "How are Xelaris teachers qualified?",
    answer: `Our teachers are handpicked experts with a proven track record in computer science. We prioritize candidates who not only have years of industry experience but also a genuine passion for teaching young minds. Our rigorous selection process ensures that only the top 1% of applicants make the cut, based on their technical expertise and exceptional communication skills.`,
  },
  {
    id: 8,
    question: "Is the coding course schedule flexible?",
    answer: `Yes! You can work the classes around your child's schedule by selecting any time and any day that works for you.`,
  },
]
