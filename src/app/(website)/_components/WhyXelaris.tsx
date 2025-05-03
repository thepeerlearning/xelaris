import { Step1Icon, Step2Icon, Step3Icon } from "@/components/svgs"

const reasons = [
  {
    id: 1,
    icon: <Step1Icon />,
    title: "Exceptional\nInstructors",
    description:
      "We carefully select our instructors, choosing only the top 2% of applicants. This means your child learns from experts who are not only technically brilliant but also passionate about teaching and inspiring kids.",
  },
  {
    id: 2,
    icon: <Step2Icon />,
    title: "Personalized\nApproach",
    description:
      "Our approach is tailored to each student. When a new student signs up, they start with a placement class that goes beyond just assessing coding skills. It helps us understand their thought process, problem-solving strategies, and how they approach challenges.",
  },
  {
    id: 3,
    icon: <Step3Icon />,
    title: "Real-World\nProjects",
    description:
      "Instead of just coding for its own sake, our students develop real-world projects that bring their ideas to life. They build apps, interactive websites, and create AI projects using the same technologies that professionals uses every day.",
  },
]

export default function WhyXelarisSection() {
  return (
    <section className="w-full bg-[#FBF8E6] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[117px] flex justify-center items-center">
      <div className="w-full 3xl:w-[1308px] px-4 sm:px-6 lg:px-8 xl:px-[44px] flex flex-col gap-[45px]">
        <h2 className="font-normal text-[#202426] text-3xl sm:text-[30px]/[36.16px] md:text-4xl lg:text-[50px]/[72.32px] mb-8 sm:mb-10 lg:mb-12">
          why parents choose us
        </h2>

        <div className="w-full min-h-[576px] grid grid-cols-1 lg-md:grid-cols-2 2xl:grid-cols-3 gap-8 sm:gap-10 xl:gap-[50px] overflow-hidden">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              className="w-full xl:w-[402.66px] flex flex-col h-full"
            >
              <div className="h-[130px] w-[128px] mb-6 md:mb-8 xl:mb-[50px] bg-[#202426] rounded-full flex justify-center items-center font-inter font-normal text-[86.52px] text-[#FBF8E6]">
                {index + 1}
              </div>

              <div className="flex flex-col gap-4 xl:w-[402.66px] lg-md:max-w-none">
                <h3 className="w-full lg-md:w-[320px] xl:w-[402.66px] h-[124.4px] pt-[6.4px] pb-[32px] font-normal text-[#222222] text-2xl sm:text-[28px] md:text-[32px] leading-tight uppercase border-t border-[#AAAAAA] whitespace-pre-line">
                  {reason.title}
                </h3>

                <p className="w-full lg-md:w-[320px] xl:w-[403px] font-light text-[#202426] text-sm sm:text-base/[24.2px] -tracking-[0.66px]">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
