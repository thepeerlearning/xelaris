import React from "react"

export default function CoreValues() {
  return (
    <div className="w-full h-[1642px] sm:h-[1484.27px] md:h-[1564.27px] lg:h-[1444.27px] lg-md:h-[1414.27px] xl:h-[1319.25px] 2xl:h-[1079.25px] bg-[#FBF8E6] flex justify-center items-center relative">
      <div
        className="block md:hidden w-full h-[96.27px] absolute top-20 md:top-0 left-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/small-top_core-value_bg.svg)` }}
      />
      <div
        className="block md:hidden w-full h-[96.27px] absolute bottom-0 right-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(/small-bottom_core-value_bg.svg)`,
        }}
      />
      <div
        className="hidden md:block w-full h-[232.03px] absolute top-0 left-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/big-top_core-value_bg.svg)` }}
      />
      <div
        className="hidden md:block w-full h-[119.25px] absolute bottom-0 right-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/big-bottom_core-value_bg.svg)` }}
      />
      <div className="w-full flex justify-center items-center bg-secondary py-8 sm:py-10 md:pt-10 lg:pt-5 md:pb-26 xl:py-18 relative top-10 lg:top-14 xl:top-10">
        <div className="w-full 3xl:w-[1440px] bg-secondary px-4 md:px-6 lg:px-10 xl:px-[35px] 2xl:px-[48px] 3xl:px-[100px] relative">
          <div className="max-w-[1245px] mx-auto">
            <h2 className="w-full font-inter font-normal text-[#ECECEC] text-[30px]/[36px] sm:text-[40px]/[55px] lg:text-[60px]/[96px] tracking-normal align-middle mb-12">
              Core Values
            </h2>

            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-[23px] lg:gap-8">
              {/* Value 1 */}
              <div className="w-full xl:w-[395px] flex flex-col gap-[10px] lg:gap-6">
                <h4 className="w-full font-inter font-normal text-[#FBF8E6] text-[24px]/[37.13px] lg:text-[32px]/[35px] xl:text-[30px]/[40px] tracking-normal align-middle uppercase">
                  Future-First Thinking
                </h4>
                <p className="flex flex-col gap-[21px] font-inter font-light text-[#FBF8E6] text-[16px]/[24px] tracking-normal align-middle">
                  The best way to prepare kids for the future? Introduce them to
                  the technologies shaping it today. we focus on what&apos;s
                  transforming. From AI to Web3 and beyond, we&apos;re not just
                  keeping up - we&apos;re helping kids lead the way.
                </p>
              </div>
              {/* Value 2 */}
              <div className="w-full xl:w-[395px] flex flex-col gap-[10px] lg:gap-6">
                <h4 className="w-full font-inter font-normal text-[#FBF8E6] text-[24px]/[37.13px] lg:text-[32px]/[35px] xl:text-[30px]/[40px] tracking-normal align-middle uppercase">
                  Empower Ambition
                </h4>
                <p className="flex flex-col gap-[21px] font-inter font-light text-[#FBF8E6] text-[16px]/[28px] tracking-normal align-middle">
                  We don&apos;t just teach coding or tech skills, we help kids
                  think big, dream bold, and see themselves as problem-solvers.
                  Our goal is to inspire them to tackle real-world challenges
                  and make an impact.
                </p>
              </div>
              {/* Value 3 */}
              <div className="w-full xl:w-[395px] flex flex-col gap-[10px] lg:gap-6">
                <h4 className="w-full font-inter font-normal text-[#FBF8E6] text-[24px]/[37.13px] lg:text-[32px]/[35px] xl:text-[30px]/[40px] tracking-normal align-middle uppercase">
                  Build with Curiosity
                </h4>
                <p className="flex flex-col gap-[21px] font-inter font-light text-[#FBF8E6] text-[16px]/[28px] tracking-normal align-middle">
                  Curiosity isn&apos;t just encouraged; it&apos;s our
                  superpower. We challenge kids to ask &quot;why,&quot; explore
                  new ideas, and question the status quo. It&apos;s not about
                  following a pre-set path. It&apos;s about forging their own,
                  driven by their unique insights and passions.
                </p>
              </div>
              {/* Value 4 */}
              <div className="w-full xl:w-[395px] flex flex-col gap-[10px] lg:gap-6">
                <h4 className="font-inter font-normal text-[#FBF8E6] text-[24px]/[37.13px] lg:text-[32px]/[35px] xl:text-[32.5px]/[40px] tracking-normal align-middle uppercase">
                  Excellence Through <br /> Experimentation
                </h4>
                <p className="flex flex-col gap-[21px] font-inter font-light text-[#FBF8E6] text-[16px]/[28px] tracking-normal align-middle">
                  Perfection is the enemy of progress. We celebrate
                  experimentation, creating a safe space where kids can make
                  mistakes, learn from them, and figure things out along the
                  way. It&apos;s about progress, not perfection.
                </p>
              </div>
              {/* Value 5 */}
              <div className="w-full xl:w-[395px] flex flex-col gap-[10px] lg:gap-6">
                <h4 className="w-full font-inter font-normal text-[#FBF8E6] text-[24px]/[37.13px] lg:text-[32px]/[35px] xl:text-[30px]/[40px] tracking-normal align-middle uppercase">
                  Community & Mentorship
                </h4>
                <p className="flex flex-col gap-[21px] font-inter font-light text-[#FBF8E6] text-[16px]/[28px] tracking-normal align-middle">
                  No one thrives in isolation. That&apos;s why we&apos;ve built
                  a vibrant community where kids collaborate, share ideas, and
                  connect with mentors who believe in their potential. Learning
                  is a team sport - and we&apos;re all in this together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
