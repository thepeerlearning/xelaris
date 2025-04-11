"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

interface ProjectItemProps {
  id: number
  author: string
  age: number
  img: string
  title: string
  description: string
}

const projects: ProjectItemProps[] = [
  {
    id: 1,
    author: "Owen",
    age: 11,
    title: "PetSnap AI",
    img: "/images/student_project-img_1.webp",
    description: `Zoey created this cool computer program that can recognise pets in photos! Using Python and AI, her program can tell the difference between cats and dogs in just seconds.\n It's a simple but smart way to make identifying pets easier and faster.`,
  },
  {
    id: 2,
    author: "Nikolas",
    age: 11,
    img: "/images/student_project-img_2.webp",
    title: "Everlane",
    description: `Nikolas just pulled off something pretty cool! He built a replica of the Everlane store using only HTML and CSS. The result is super sleek and modern, and it's amazing how closely it matches the real thing. You can tell he put in a ton of effort to get every detail just right.\n Replicating a big brand's website isn't easy. It takes a solid grasp of design and some serious coding chops.`,
  },
  {
    id: 3,
    author: "Zoja",
    age: 10,
    img: "/images/student_project-img_3.webp",
    title: "Virus Rules",
    description: `Zoja came up with an idea to create a platform where kids can learn about viruses. She called it Virus Rules, a fun and interactive way to educate kids about viruses. Her platform combines engaging quizzes with information about different types of viruses, how they spread, and, most importantly, how to stay safe.\n She keeps improving her platform, adding more quizzes and features to make it even better!`,
  },
]

// Function to determine scroll height based on screen size
function useScrollHeight() {
  const [scrollHeight, setScrollHeight] = useState("300vh")

  useEffect(() => {
    // Function to update height based on screen width
    const updateHeight = () => {
      if (window.innerWidth >= 1536) {
        // 2xl breakpoint
        setScrollHeight("180vh")
      } else if (window.innerWidth >= 1280) {
        // xl breakpoint
        setScrollHeight("185vh")
      } else if (window.innerWidth >= 768) {
        // md breakpoint
        setScrollHeight("280vh")
      } else {
        setScrollHeight("300vh")
      }
    }

    // Set initial height
    updateHeight()

    // Add event listener for window resize
    window.addEventListener("resize", updateHeight)

    // Clean up event listener
    return () => window.removeEventListener("resize", updateHeight)
  }, [])

  return scrollHeight
}

export default function ProjectSection() {
  const containerRef = useRef(null)
  // Scroll section height (3x viewport for 3 cards)
  const SCROLL_HEIGHT = useScrollHeight()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Smoother spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20, // Reduced from 25 for smoother motion
    stiffness: 70, // Reduced from 90 for less rigidity
    mass: 0.5, // Reduced from 0.7 for lighter feel
    restDelta: 0.001, // Smaller rest delta for smoother finish
  })

  // First card animations - more gradual transitions
  const firstCardY = useTransform(
    smoothProgress,
    [0, 0.15, 0.4],
    ["0%", "-2%", "-5%"]
  )
  const firstCardScale = useTransform(
    smoothProgress,
    [0, 0.15, 0.4],
    [1, 0.98, 0.95]
  )
  const firstCardOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.4],
    [1, 0.9, 0.7]
  )

  // Second card animations - smoother entry and exit
  const secondCardY = useTransform(
    smoothProgress,
    [0.05, 0.25, 0.4, 0.55, 0.7],
    ["100%", "50%", "0%", "-2%", "-5%"]
  )
  const secondCardScale = useTransform(
    smoothProgress,
    [0.4, 0.55, 0.7],
    [1, 0.98, 0.95]
  )
  const secondCardOpacity = useTransform(
    smoothProgress,
    [0.05, 0.25, 0.4, 0.6, 0.8],
    [0, 0.7, 1, 0.9, 0.7]
  )

  // Third card animations - smoother entry
  const thirdCardY = useTransform(
    smoothProgress,
    [0.45, 0.65, 0.8],
    ["100%", "50%", "0%"]
  )
  const thirdCardOpacity = useTransform(
    smoothProgress,
    [0.45, 0.65, 0.8],
    [0, 0.7, 1]
  )

  return (
    <div className="w-full h-full bg-[#202426] pt-[92px] 2xl:pt-[96px] md:pb-16 2xl:pb-[138px] flex justify-center items-center">
      <div className="w-full 3xl:w-[1312px] flex flex-col justify-center gap-[30.87px] xl:gap-10 px-3 sm:px-[19.3px] md:px-6 lg:px-12 2xl:px-16 relative z-1">
        <h4 className="w-full font-inter font-normal text-[#FBF8E6] text-[30px]/[33.3px] md:text-[40px]/[44px] xl:text-[50px]/[44.8px] text-center">
          See what our students are building
        </h4>
        {/* Scroll Container */}
        <div
          ref={containerRef}
          style={{ height: SCROLL_HEIGHT }}
          className="relative w-full h-full flex flex-col gap-6 2xl:gap-12"
        >
          {/* First Card */}
          <motion.div
            style={{
              y: firstCardY,
              scale: firstCardScale,
              opacity: firstCardOpacity,
              zIndex: 5,
            }}
            transition={{ duration: 0.1 }}
            className="sticky top-[5%] sm:top-[10%] h-[70vh] xl:h-[85vh] w-full flex items-center justify-center"
          >
            <ProjectCard project={projects[0]} />
          </motion.div>

          {/* Second Card */}
          <motion.div
            style={{
              y: secondCardY,
              opacity: secondCardOpacity,
              scale: secondCardScale,
              zIndex: 80,
            }}
            transition={{ duration: 0.1 }}
            className="sticky top-[5%] sm:top-[10%] h-[85vh] sm:h-[85vh] w-full flex items-center justify-center"
          >
            <ProjectCard project={projects[1]} />
          </motion.div>

          {/* Third Card */}
          <motion.div
            style={{
              y: thirdCardY,
              opacity: thirdCardOpacity,
              zIndex: 100,
            }}
            transition={{ duration: 0.1 }}
            className="sticky top-[5%] sm:top-[10%] h-[85vh] sm:h-[85vh] w-full flex items-center justify-center"
          >
            <ProjectCard project={projects[2]} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: ProjectItemProps }) {
  const isMobile = useMobile()

  // Split the description by newline characters to create paragraphs
  const descriptionParagraphs = project.description.split("\n").filter(Boolean)

  return (
    <motion.div
      whileHover={{ scale: isMobile ? 1 : 1.02 }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 200,
        mass: 0.8,
      }}
      className="bg-[#FBF8E6] w-full h-[420px] sm:h-[500px] md:h-[700px] lg:h-[650px] xl:h-[467px] flex flex-col xl:flex-row gap-2 sm:gap-4 rounded-[6px] overflow-hidden shadow-xl"
    >
      <div className="w-full flex-1 pt-4 sm:pt-6 md:pt-8 xl:pt-[62px] pb-4 sm:pb-6 md:pb-8 xl:pb-10 px-4 sm:px-6 xl:pl-12 xl:pr-6 flex flex-col gap-3 sm:gap-4 xl:gap-8">
        <div className="text-[#1B1F23] font-inter font-normal text-sm sm:text-base md:text-lg leading-tight sm:leading-6">
          {`Built by ${project.author} (${project.age} years old)`}
        </div>
        <div className="w-full flex flex-col gap-2 sm:gap-3 md:gap-4">
          <h4 className="text-secondary font-inter font-semibold text-xl sm:text-2xl md:text-3xl xl:text-[35px] leading-tight xl:leading-[44px] tracking-[0.2px]">
            {project.title}
          </h4>
          <p className="font-inter font-normal text-xs sm:text-sm md:text-base xl:text-lg leading-normal md:leading-7 text-[#494C4F] tracking-normal">
            {descriptionParagraphs.map((paragraph, index) => (
              <span key={index} className="mb-4 last:mb-0">
                {paragraph.trim()}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] xl:h-auto xl:w-1/2 overflow-hidden">
        <Image
          src={project.img || "/placeholder.svg"}
          alt={`Screenshot of ${project.title} project by ${project.author}`}
          fill
          unoptimized={project.img.endsWith(".gif")}
          className="w-full h-[216.16px] xl:h-full rounded-tr-[6px] rounded-br-[6px] object-cover"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/images/placeholder.webp"
          }}
        />
      </div>
    </motion.div>
  )
}
