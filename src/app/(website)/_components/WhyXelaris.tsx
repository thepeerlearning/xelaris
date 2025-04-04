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
    <section className="w-full bg-[#FBF8E6] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[117px]">
      <div className="w-full 4xl:w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-[44px] flex flex-col gap-[45px]">
        <h2 className="font-semibold text-[#202426] text-3xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight mb-8 sm:mb-10 lg:mb-12">
          why parents choose us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 xl:gap-[50px]">
          {reasons.map((reason) => (
            <div key={reason.id} className="flex flex-col h-full">
              <div className="h-[120px] sm:h-[150px] md:h-[180px] xl:h-[200px] w-[100px] sm:w-[120px] xl:w-[131px] mb-6 md:mb-8 xl:mb-[50px]">
                {reason.icon}
              </div>

              <div className="flex flex-col gap-4 sm:gap-6 xl:gap-[32px] max-w-full sm:max-w-[500px] xl:max-w-none">
                <h3 className="font-normal text-[#222222] text-2xl sm:text-[28px] md:text-[32px] leading-tight uppercase border-t border-[#AAAAAA] pt-3 sm:pt-4 whitespace-pre-line">
                  {reason.title}
                </h3>

                <p className="font-light text-[#202426] text-sm sm:text-base/[24.2px] -tracking-[0.66px]">
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
