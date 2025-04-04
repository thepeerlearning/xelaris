import Image from "next/image"
import TrialClassButton from "./TrialClassButton"

interface SchoolProps {
  id: number
  age: string
  prerequisite: boolean
  title: string
  img: string
}
const schools: SchoolProps[] = [
  {
    id: 1,
    age: "Ages 10-17",
    prerequisite: false,
    title: "School Of Software Development",
    img: "/images/school_card-img_1.webp",
  },
  {
    id: 2,
    age: "Ages 10-17",
    prerequisite: false,
    title: "School Of Product Design",
    img: "/images/school_card-img_2.webp",
  },
  {
    id: 3,
    age: "Ages 14-17",
    prerequisite: true,
    title: "School Of Artificial Intelligence",
    img: "/images/school_card-img_3.webp",
  },
  {
    id: 4,
    age: "Ages 14-17",
    prerequisite: true,
    title: "School Of Blockchain Technology",
    img: "/images/school_card-img_4.webp",
  },
]
export default function SchoolSection() {
  return (
    <div className="w-full min-h-[1026px] flex justify-center items-center bg-[#FBF8E6] py-20">
      <div
        className="w-full xl:w-[920px] 3xl:w-[1312px] flex flex-col gap-8 justify-center items-center"
        data-aos="fade-up"
      >
        <h2 className="w-full font-inter font-normal text-secondary text-center text-[30px]/[33.1px] xl:text-[50px]/[44px]">
          Explore our school of technology
        </h2>
        <div className="w-full 2xl:w-[912px] grid grid-cols-1 lg:grid-cols-2 gap-[21px] px-3 lg:px-4 xl:px-0 relative">
          {schools?.map((school) => (
            <div
              key={school.id}
              className="w-full xl:w-[440px] rounded-xl border border-solid border-[#DFE5E6] overflow-hidden bg-[#FBF8E6]"
            >
              {/* Image Section */}
              <div className="relative h-40 w-full hover:scale-[1.05] cursor-pointer transform transition-all duration-300">
                <Image
                  height={160}
                  width={440}
                  src={school.img}
                  alt={school.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-0 w-full h-[80px] flex items-end justify-between py-4 px-6"
                  style={{
                    background: `linear-gradient(360deg, #000000 37.25%, rgba(0, 0, 0, 0) 100%)`,
                  }}
                >
                  <p className="text-white font-inter font-normal text-xs leading-[17px] tracking-[1.8px] uppercase">
                    {school.age}
                  </p>
                  <p className="text-white font-inter font-normal text-xs leading-[17px] tracking-[1.8px] uppercase">
                    {school.prerequisite
                      ? "Prerequisite required"
                      : "No prerequisite required"}
                  </p>
                </div>
              </div>

              {/* Description Section */}
              <div className="h-[107px] border-b-[0.2px] border-solid border-[#242527] w-full py-3 px-6 flex gap-3 flex-col">
                <h4 className="font-inter font-normal fold:text-base text-lg xl:text-2xl leading-8    tracking-normal">
                  {school.title}
                </h4>
                {/* Additional Buttons Section */}
                <div className="flex gap-2 font-inter font-normal text-sm leading-5 tracking-normal">
                  <span className="rounded-full px-4 py-2 border border-secondary">
                    online
                  </span>
                  <span className="rounded-full px-4 py-2  border border-secondary">
                    1:1 Class
                  </span>
                </div>
              </div>
              {/* Action Section */}
              <div className="w-full px-6 py-4 h-[78px]">
                <TrialClassButton className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
