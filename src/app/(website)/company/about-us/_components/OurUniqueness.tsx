import React from "react"

export default function OurUniqueness() {
  return (
    <div className="w-full min-h-[790px] bg-[#FBF8E6] flex justify-center items-center relative pb-24">
      <div className="w-full min-h-[480px] flex justify-center items-center">
        <div className="w-full h-full 3xl:w-[1440px] px-4 sm:px-7 lg:pl-8 xl:pl-15 3xl:pl-20 lg:pr-5 relative">
          <h2 className="w-full font-inter font-normal text-[#2F2F2F] text-[40px]/[60px] lg:text-[80px]/[76px] xl:text-[78px]/[76px] 2xl:text-[96px]/[96px]  tracking-normal align-middle mb-[56px]">
            What Makes Us Different
          </h2>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 gap-[38px] 3xl:gap-[61px]">
            {/* Value 1 */}
            <div className="w-full 3xl:w-[300px] flex flex-col gap-6">
              <h2 className="font-inter font-normal text-[#2F2F2F] text-[22.13px]/[32px] tracking-normal align-middle">
                [1]
              </h2>
              <h4 className="font-inter font-normal text-[#2F2F2F] text-[35px]/[40px] tracking-normal align-middle uppercase">
                Exceptional
                <br className="hidden lg:block" /> Instructors
              </h4>
              <p className="font-inter font-light text-[#202426] text-[16px]/[24px] align-middle -tracking-[0.66px]">
                We carefully select our instructors, choosing only the top 2% of
                applicants. This means your child learns from experts who are
                not only technically brilliant but also passionate about
                teaching and inspiring kids.
              </p>
            </div>
            {/* Value 2 */}
            <div className="w-full 3xl:w-[300px] flex flex-col gap-6">
              <h2 className="font-inter font-normal text-[#2F2F2F] text-[22.13px]/[32px] tracking-normal align-middle">
                [2]
              </h2>
              <h4 className="font-inter font-normal text-[#2F2F2F] text-[35px]/[40px] tracking-normal align-middle uppercase">
                Real-World <br className="hidden lg:block" /> Skills
              </h4>
              <p className="font-inter font-light text-[#202426] text-[16px]/[24px] align-middle -tracking-[0.66px]">
                Success in the future isn&apos;t just about tech skills;
                it&apos;s about developing qualities that transcend any career
                path. That&apos;s why we focus on grit, leadership, critical
                thinking, and problem-solving. Skills that matter no matter
                which path they choose.
              </p>
            </div>
            {/* Value 3 */}
            <div className="w-full 3xl:w-[300px] flex flex-col gap-6">
              <h2 className="font-inter font-normal text-[#2F2F2F] text-[22.13px]/[32px] tracking-normal align-middle">
                [3]
              </h2>
              <h4 className="font-inter font-normal text-[#2F2F2F] text-[35px]/[40px] tracking-normal align-middle uppercase">
                First <br className="hidden lg:block" />
                Principles
              </h4>
              <p className="font-inter font-light text-[#202426] text-[16px]/[24px] align-middle -tracking-[0.66px]">
                We didn&apos;t follow the crowd or replicate what other programs
                were doing. Instead, we built Xelaris from scratch using first
                principles thinking, the same approach innovative companies use
                to solve problems.
              </p>
            </div>
            {/* Value 4 */}
            <div className="w-full 3xl:w-[300px] flex flex-col gap-6">
              <h2 className="font-inter font-normal text-[#2F2F2F] text-[22.13px]/[32px] tracking-normal align-middle">
                [4]
              </h2>
              <h4 className="font-inter font-normal text-[#2F2F2F] text-[35px]/[40px] tracking-normal align-middle uppercase">
                Driven by <br className="hidden lg:block" />
                Passion
              </h4>
              <p className="font-inter font-light text-[#202426] text-[16px]/[24px] align-middle -tracking-[0.66px]">
                Everything we do is focused on one thing: equipping kids with
                the skills to build, the curiosity to explore, and the
                responsibility to apply their knowledge ethically for social
                good.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
