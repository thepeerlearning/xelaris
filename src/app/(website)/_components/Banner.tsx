"use client"

import Image from "next/image"

export default function Banner() {
  return (
    <div
      className="w-full bg-black bg-cover bg-center bg-no-repeat relative pt-[50px] pb-[95px] xl:pt-[38px] xl:pb-[58px] px-8 lg-md:px-[70px] xl:px-0 3xl:px-[70px]"
      style={{
        backgroundImage: `url('/banner-img.gif')`,
      }}
    >
      <div className="w-full flex justify-center items-center">
        <div className="w-full 3xl:w-[1298px] flex flex-col lg-md:flex-row justify-between gap-0">
          {/* Left section - Trusted by parents */}
          <div className="xl:w-[820px]">
            <h4 className="font-inter font-normal  text-white text-xl text-center mb-6">
              Trusted By Parents From
            </h4>

            <div className="hidden xl:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0">
              {/* First column */}
              <div className="h-[124px] flex flex-col justify-between items-center py-4">
                <Image
                  src="/logo_amazon.svg"
                  alt="Amazon logo"
                  width={160}
                  height={48}
                  className="w-auto h-auto object-contain"
                />
                <Image
                  src="/logo_deloitte.svg"
                  alt="Deloitte logo"
                  width={160}
                  height={48}
                  className="w-auto h-auto object-contain"
                />
              </div>

              {/* Middle column with borders */}
              <div className="flex flex-col items-center border-x border-white py-4">
                <div className="h-[124px] flex flex-col justify-between">
                  <Image
                    src="/logo_tesla.svg"
                    alt="Tesla logo"
                    width={160}
                    height={48}
                    className="w-auto h-auto object-contain"
                  />
                  <Image
                    src="/logo_mckinsey.svg"
                    alt="McKinsey logo"
                    width={160}
                    height={48}
                    className="w-auto h-auto object-contain"
                  />
                </div>
              </div>

              {/* Third column */}
              <div className="flex flex-col justify-between items-center py-4 border-r border-white">
                <div className="h-[115.11px] flex flex-col justify-between">
                  <Image
                    src="/logo_mastercard.svg"
                    alt="Mastercard logo"
                    width={160}
                    height={48}
                    className="w-auto h-auto object-contain"
                  />
                  <Image
                    src="/logo_microsoft.svg"
                    alt="Microsoft logo"
                    width={160}
                    height={48}
                    className="w-auto h-auto object-contain"
                  />
                </div>
              </div>
              {/* Third column */}
              <div className="h-[147.58px] flex flex-col justify-between items-center py-4">
                <Image
                  src="/logo_duolingo.svg"
                  alt="Duolingo logo"
                  width={160}
                  height={48}
                  className="w-auto h-auto object-contain"
                />
                <Image
                  src="/logo_intel.svg"
                  alt="Intel logo"
                  width={160}
                  height={48}
                  className="w-auto h-auto object-contain"
                />
              </div>
            </div>
            <div className="grid xl:hidden grid-cols-2 gap-0 mb-12">
              {/* First column */}
              <div className="flex flex-col justify-between items-start border-r border-white gap-4 pr-4">
                <Image
                  src="/logo_amazon.svg"
                  alt="Amazon logo"
                  width={94.16}
                  height={28.28}
                />

                <Image
                  src="/logo_tesla.svg"
                  alt="Tesla logo"
                  width={108.18}
                  height={14.08}
                />
                <Image
                  src="/logo_mastercard.svg"
                  alt="Mastercard logo"
                  width={132}
                  height={24}
                />
                <Image
                  src="/logo_duolingo.svg"
                  alt="Duolingo logo"
                  width={121}
                  height={28}
                />
              </div>
              {/* Second column */}
              <div className="flex flex-col justify-between gap-4 pl-4">
                <Image
                  src="/logo_deloitte.svg"
                  alt="Deloitte logo"
                  width={102.17}
                  height={19.07}
                />
                <Image
                  src="/logo_mckinsey.svg"
                  alt="McKinsey logo"
                  width={107.18}
                  height={33.29}
                />

                <Image
                  src="/logo_microsoft.svg"
                  alt="Microsoft logo"
                  width={117.24}
                  height={25}
                  className="w-auto h-auto object-contain"
                />
                <Image
                  src="/logo_intel.svg"
                  alt="Intel logo"
                  width={56.09}
                  height={36.93}
                />
              </div>
            </div>
          </div>

          {/* Right section - Founded by */}
          <div className="w-full  sm:w-[321px]">
            <h4 className="hidden xl:flex items-end font-inter text-white text-xl leading-[120%] font-normal text-right xl:mb-4">
              Founded by former
              <br />
              Educators from
            </h4>
            <h4 className="fle items-center xl:hidden font-inter text-white text-base leading-[120%] font-normal align-middle text-center mb-4">
              {" "}
              Founded by ex-Synthesis and <br /> Springboard educators
            </h4>
            <div className="w-full h-[24.53px] xl:h-[106px] flex flex-row xl:flex-col justify-between items-center xl:items-start gap-2">
              <Image
                src="/logo_synthesis.svg"
                alt="Synthesis logo"
                width={180}
                height={48}
                className="w-[151px] h-[21.03px] xl:w-auto xl:h-auto xl:object-contain"
              />

              <Image
                src="/logo_springboard.svg"
                alt="Springboard logo"
                width={180}
                height={48}
                className="w-[127px] h-[19.53px] xl:w-auto xl:h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
