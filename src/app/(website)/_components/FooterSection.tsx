import { InstagramIcon, Linkedincon, XIcon } from "@/components/svgs"
import WhiteAppLogo from "@/components/svgs/white-app-logo"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Footer() {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <footer className="w-full min-h-[600px] bg-[#202426] flex justify-center items-center">
      <div className="w-full flex flex-col 2xl:w-[1200px]">
        <div className="w-full h-[108px] py-[22.78px] border-b-[0.2px] border-[#6C6A6B] xl:px-5 2xl:px-0">
          <div className="w-full px-5 lg:px-6 xl:px-0">
            <WhiteAppLogo />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center border-b-[0.2px] border-[#6C6A6B] lg:px-8 xl:px-5 2xl:px-0">
          <div className="w-full max-w-[1440px] flex flex-col">
            <div className="w-full max-w-[1200px] min-h-[454px] grid grid-cols-1 xl:grid-cols-2">
              <div className="flex flex-col py-0 lg:py-[64px]">
                <div className="w-[584px] hidden lg:flex gap-[64px] xl:gap-[25px] 2xl:gap-[64px]">
                  <div className="flex flex-col gap-[27px]">
                    <h4 className="font-inter font-normal text-[15px]/[15px] text-[#F7F7EE] tracking-normal align-middle">
                      Company
                    </h4>
                    <Link
                      href="/company/about-us"
                      className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                    >
                      About
                    </Link>
                    <Link
                      href="/company/contact"
                      className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                    >
                      Contact
                    </Link>
                    <div className="flex gap-1 items-center">
                      <Link
                        href="/company/careers"
                        className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                      >
                        Careers{" "}
                      </Link>
                      <span className="w-[63px] h-[16px] flex justify-center items-center rounded bg-primary  font-inter font-medium text-white text-[7.6px] tracking-normal text-center uppercase ">
                        We&apos;re Hiring
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[27px]">
                    <h4 className="font-inter font-normal text-[15px]/[15px] text-[#F7F7EE] tracking-normal align-middle">
                      Legal
                    </h4>
                    <Link
                      href="/legal/privacy"
                      className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                    >
                      Privacy
                    </Link>
                    <Link
                      href="/legal/terms"
                      className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                    >
                      Terms
                    </Link>
                  </div>
                  <div className="flex flex-col gap-[27px]">
                    <h4 className="font-inter font-normal text-[15px]/[15px] text-[#F7F7EE] tracking-normal align-middle">
                      School
                    </h4>
                    <Link
                      href="schools/software-development"
                      className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                    >
                      School of Software Development
                    </Link>
                    <Link
                      href="/school/profuct-design"
                      className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                    >
                      School of Product Design
                    </Link>
                    <Link
                      href="/school/artificial-intelligence"
                      className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                    >
                      School of Artificial Intelligence
                    </Link>

                    <p className="w-full font-inter font-light text-[#F7F7EE] text-sm align-middle tracking-normal flex items-center">
                      School of Blockchain Technology{" "}
                      <span className="w-fit h-[16px] flex justify-center items-center rounded bg-primary  font-inter font-medium text-white text-[6px] px-1 ml-0.5 tracking-normal text-center uppercase ">
                        Coming soon
                      </span>
                    </p>
                  </div>
                </div>
                <Accordion
                  type="single"
                  collapsible
                  className="px-6 w-full flex flex-col lg:hidden"
                >
                  <AccordionItem
                    value="item-1"
                    className="w-full border-b-[0.2px] border-solid border-[#6C6A6B]flex flex-col gap-[34px] py-[20px]"
                  >
                    <AccordionTrigger className="font-inter font-normal text-[15px]/[15px] text-[#F7F7EE] tracking-normal align-middle">
                      School
                    </AccordionTrigger>
                    <AccordionContent className="w-full flex flex-col gap-[64px]">
                      <Link
                        href="schools/software-development"
                        className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                      >
                        School of Software Development
                      </Link>
                      <Link
                        href="/school/profuct-design"
                        className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                      >
                        School of Product Design
                      </Link>
                      <Link
                        href="/school/artificial-intelligence"
                        className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                      >
                        School of Artificial Intelligence
                      </Link>
                      <div className="flex gap-2 items-center">
                        <p className="font-inter font-light text-[#F7F7EE] text-sm align-middle tracking-normal">
                          School of Blockchain Technology{" "}
                        </p>
                        <span className="w-[68px] h-[16px] flex justify-center items-center rounded bg-primary  font-inter font-medium text-white text-[6px] px-1 tracking-normal text-center uppercase ">
                          Coming soon
                        </span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className="w-full border-b-[0.2px] border-solid border-[#6C6A6B] flex flex-col gap-[34px] py-[20px]"
                  >
                    <AccordionTrigger className="font-inter font-normal text-[15px]/[15px] text-[#F7F7EE] tracking-normal align-middle">
                      Comapany
                    </AccordionTrigger>
                    <AccordionContent className="w-full flex flex-col gap-[64px]">
                      <Link
                        href="/company/about-us"
                        className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                      >
                        About
                      </Link>
                      <Link
                        href="/company/contact"
                        className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                      >
                        Contact
                      </Link>
                      <div className="flex gap-2 items-center">
                        <Link
                          href="/company/careers"
                          className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                        >
                          Careers{" "}
                        </Link>
                        <span className="w-fit h-[16px] flex justify-center items-center rounded bg-primary  font-inter font-medium text-white text-[7.6px] tracking-normal text-center uppercase px-2">
                          We&apos;re Hiring
                        </span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className="w-full border-b-[0.2px] border-solid border-[#6C6A6B] flex flex-col gap-[34px] py-[20px]"
                  >
                    <AccordionTrigger className="font-inter font-normal text-[15px]/[15px] text-[#F7F7EE] tracking-normal align-middle">
                      Legal
                    </AccordionTrigger>
                    <AccordionContent className="w-full flex flex-col gap-[64px]">
                      <Link
                        href="/legal/privacy"
                        className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                      >
                        Privacy
                      </Link>
                      <Link
                        href="/legal/terms"
                        className="font-inter font-light text-[#F7F7EE] text-sm/[25px] align-middle tracking-normal"
                      >
                        Terms
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="h-full flex flex-col gap-6 py-[64px] px-6 xl:pl-[61px]  xl:border-l-[0.2px] xl:border-[#6C6A6B]">
                <h4 className="font-inter font-normal text-[15px]/[15px] text-[#F7F7EE] tracking-normal align-middle">
                  About Xelaris
                </h4>
                <p className="font-inter font-light text-sm/[25px] text-[#F7F7EE] tracking-normal align-middle">
                  We started Xelaris to inspire young minds to explore and
                  harness the power of technology. Our mission is to educate the
                  next generation of innovators equipping them with the skills
                  to build, the curiosity to explore, and the responsibility to
                  apply their knowledge ethically to achieve social good.
                </p>
                <p className="font-inter font-normal text-sm/[25px] text-[#6C6A6B] tracking-normal align-middle">
                  Copyright © Xelaris Inc. {year}. All rights reserved. The
                  content on this website, including text, graphics, and other
                  digital materials, may not be copied, reproduced, published,
                  broadcast, modified, or distributed, in whole or in part,
                  without prior written consent from Xelaris.
                </p>
                <div className="w-full h-[32] max-w-[140px] flex gap-[30px]">
                  <Link
                    href="https://www.instagram.com/xelarisofficial/"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </Link>
                  <Link href="https://x.com/Xelarisofficial" target="_blank">
                    <XIcon />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/xelarisofficial/"
                    target="_blank"
                  >
                    <Linkedincon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
