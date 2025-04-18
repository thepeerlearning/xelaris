import Image from "next/image"

export default function CoreValues() {
  const values = [
    {
      icon: "/innovative.svg",
      title: "Innovative Mind",
      description:
        "We embrace curiosity and creativity to think beyond boundaries and deliver groundbreaking solutions.",
    },
    {
      icon: "/driven-heart.svg",
      title: "Driven Heart",
      description:
        "Passion fuels everything we do. We approach our work with enthusiasm and a commitment to excellence.",
    },
    {
      icon: "/unwavering.svg",
      title: "Unwavering Integrity",
      description:
        "Honesty and accountability are non-negotiable. We hold ourselves to the highest standards in everything we do.",
    },
    {
      icon: "/resilient.svg",
      title: "Resilient Spirit",
      description:
        "Challenges are opportunities for growth. We persevere with determination and adaptability.",
    },
    {
      icon: "/purpose-led.svg",
      title: "Purpose-Led Impact",
      description:
        "We build with intention. Every lesson, every product, every conversation is anchored in the desire to make a difference.",
    },
  ]

  return (
    <div className="w-full bg-secondary py-10 md:py-16 lg:py-20 xl:pt-[117px] xl:pb-[87px]">
      <div className="w-full max-w-[1302px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-[35px] 2xl:px-[38px] mb-8 md:mb-12 lg:mb-16">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6 md:gap-8 xl:gap-[120px]">
          <h2 className="font-inter font-normal text-[#FBF8E6] text-[30px]/[36px] sm:text-[40px]/[48px] 2xl:text-[50px]/[72px] tracking-normal">
            Our Values
          </h2>
          <p className="font-inter font-normal text-[#FBF8E6] text-[14.13px]/[22.4px] tracking-normal max-w-[625px]">
            Our core values are the foundation of who we are and what we strive
            to achieve. They guide our actions, inspire our creativity, and
            shape the way we work together as a team.
          </p>
        </div>
      </div>

      {/* Scrollable Cards Section */}
      <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-[35px] 2xl:px-[38px]">
        {/* Scroll Container */}
        <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex flex-nowrap gap-4 md:gap-5 lg:gap-[13px] min-w-min">
            {values?.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-[#FBF8E6] rounded-[12px] flex flex-col justify-between
                  w-[280px] min-w-[280px] xs:w-[300px] xs:min-w-[300px] sm:w-[320px] sm:min-w-[320px] 
                  md:w-[350px] md:min-w-[350px] lg:w-[380px] lg:min-w-[380px] xl:w-[416px] xl:min-w-[416px]
                  h-[380px] sm:h-[400px] md:h-[416px]"
              >
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-[50px] p-4 sm:p-5 md:p-6">
                  <div className="flex justify-center md:justify-start">
                    <Image
                      src={item.icon || "/placeholder.svg"}
                      alt={`${item.title} icon`}
                      width={120}
                      height={120}
                      className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[178px] xl:h-[178px] object-contain"
                    />
                  </div>
                  <h4 className="text-[#202426] font-inter font-normal text-[22px]/[28px] sm:text-[24px]/[32px] md:text-[26px]/[40px] lg:text-[28.5px]/[40px] tracking-normal uppercase">
                    {item.title}
                  </h4>
                </div>
                <div className="py-4 sm:py-5 md:py-[25px] px-4 sm:px-5 md:px-6 border-t-[0.5px] border-[#202426]">
                  <p className="text-[#202426] font-inter font-normal text-[12px]/[18px] sm:text-[12.47px]/[20px] tracking-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
