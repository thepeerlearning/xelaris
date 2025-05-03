import Image from "next/image"

export default function OurTeam() {
  const team = [
    {
      img: "/images/jasmine.webp",
      name: "Jasmine Ryan",
      role: "Customer Success Specialist",
    },
    {
      img: "/images/isabela.webp",
      name: "Isabella Morgan",
      role: "Scheduling Coordinator",
    },
    {
      img: "/images/sophie.webp",
      name: "Sophia Bennett",
      role: "Blockchain Instructor",
    },
    {
      img: "/images/sushi.webp",
      name: "Sushi Uji",
      role: "Software Development Instructor",
    },
    {
      img: "/images/aisha.webp",
      name: "Aisha Abdulkadir",
      role: "Software Development Instructor",
    },
    {
      img: "/images/ethan.webp",
      name: "Ethan Miller",
      role: "Curriculum Developer",
    },
    {
      img: "/images/isabela.webp",
      name: "Isabella Thompson",
      role: "Instructional Supervisor",
    },
    {
      img: "/images/william.webp",
      name: "William Scote",
      role: "Software Development Instructor",
    },
    {
      img: "/images/emily.webp",
      name: "Emily Catherine",
      role: "Product Design Instructor",
    },
    {
      img: "/images/malik.webp",
      name: "Malik Gwandu",
      role: "Co-Founder",
    },
    {
      img: "/images/sam.webp",
      name: "Sam Eseyin",
      role: "Founder",
    },
    {
      img: "/images/russell.webp",
      name: "Russell Gerald",
      role: "AI Instructor",
    },
    {
      img: "/images/richard.webp",
      name: "Richard Brian",
      role: "AI Instructor",
    },
    {
      img: "/images/brandon.webp",
      name: "Brandon Jason",
      role: "Blockchain Instructor",
    },
    {
      img: "/images/harold.webp",
      name: "Harold Roy",
      role: "Product Design Instructor",
    },
  ]

  // Calculate the number of columns at different breakpoints
  const columnsXl = 3
  const columnsMd = 2

  return (
    <div className="w-full bg-[#FBF8E6] pt-10 lg:pt-16 xl:pt-[117px]">
      <div className="w-full max-w-[1302px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-[35px] 2xl:px-[38px] flex flex-col gap-8 lg:gap-12">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6 lg:gap-8 xl:gap-[120px]">
          <h2 className="font-inter font-normal text-secondary text-[30px]/[36px] sm:text-[40px]/[48px] 2xl:text-[50px]/[72px] tracking-normal">
            Our Team
          </h2>
          <p className="font-inter font-normal text-secondary text-[14.13px]/[22.4px] lg:text-[16px]/[24px] tracking-normal max-w-[625px]">
            We&apos;re a small team of fun, passionate software engineers, AI
            builders, product designers, and Web3 developers, dedicated to
            helping kids and teens learn the skills of the future.
          </p>
        </div>

        {/* Team Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {team.map((member, index) => {
            // Calculate if this is in the first row
            const isFirstRowXl = index < columnsXl
            const isFirstRowMd = index < columnsMd

            // Calculate if this is the first item in its row (leftmost)
            const isFirstInRowXl = index % columnsXl === 0
            const isFirstInRowMd = index % columnsMd === 0

            // Calculate if this is the last item in its row
            const isLastInRowXl = (index + 1) % columnsXl === 0
            const isLastInRowMd = (index + 1) % columnsMd === 0

            // Calculate if this is in the last row
            const isLastRowXl =
              index >= team.length - (team.length % columnsXl || columnsXl)
            const isLastRowMd =
              index >= team.length - (team.length % columnsMd || columnsMd)
            const isLastItem = index === team.length - 1

            return (
              <div
                key={index}
                className={`relative flex xl:flex-col items-center xl:items-start justify-start gap-4 p-6 lg:p-8
                  border-b border-secondary
                  ${isLastItem ? "border-b-0 lg:border-b" : ""}
                  
                  lg:border-r lg:border-t lg:border-l
                  ${isFirstRowMd ? "md:border-t-0" : ""}
                  ${isFirstInRowMd ? "md:border-l-0" : ""}
                  ${isLastInRowMd ? "md:border-r-0" : ""}
                  ${isLastRowMd ? "md:border-b-0" : ""}
                  
                  xl:border-r xl:border-t xl:border-l
                  ${isFirstRowXl ? "xl:border-t-0" : ""}
                  ${isFirstInRowXl ? "xl:border-l-0" : ""}
                  ${isLastInRowXl ? "xl:border-r-0" : ""}
                  ${isLastRowXl ? "xl:border-b-0" : ""}
                `}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={member.img || "/placeholder.svg"}
                    alt={`${member.name}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-secondary font-inter font-normal text-left text-[22px]/[28px] lg:text-[26px]/[40px] 2xl:text-[29.63px]/[40px] tracking-normal">
                    {member.name}
                  </h4>
                  <p className="text-[#202426] font-inter font-normal text-left text-[12px]/[18px] lg:text-[14.25px]/[20px] tracking-normal mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
