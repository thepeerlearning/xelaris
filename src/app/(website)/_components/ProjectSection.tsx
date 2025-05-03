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
    author: "Brian",
    age: 11,
    title: "BookBuddy",
    img: "/images/student_project-img_2.webp",
    description: `Hi, I'm Brain, and I'm 10 years old. I really love reading. Sometimes when I'm reading a book, I forget how far I've gone or I lose interest halfway through. I noticed some of my friends have the same problem too.\n That's why I designed BookBuddy an app to help kids keep track of the books they've read and get rewards for finishing them. I used Figma to design it because I've been learning product design for the past six months, and I wanted to build something useful and fun for my project. With BookBuddy, you can earn badges like “Bookworm” or “Star Reader,” and it kind of turns reading into a game.`,
  },
  {
    id: 2,
    author: "Zoey",
    age: 11,
    img: "/images/student_project-img_1.webp",
    title: "ZoAI",
    description: `Zoey is a 15-year-old student learning Python programming and  Artificial Intelligence. Inspired by her love for animals and curiosity about how computers understand images, she built a computer vision program that can accurately tell the difference between cats and dogs in photos.\nUsing Python and a basic machine learning model, she trained her program to recognize pet features and classify them within seconds. This project is part of her early journey into AI, where she's learning how technology can solve real-world problems.`,
  },
  {
    id: 3,
    author: "Zoja",
    age: 10,
    img: "/images/student_project-img_3.webp",
    title: "Virus Rules",
    description: `Zoja, 10, is making learning about viruses fun with her game-based platform, "Virus Rule."\n Zoja is designing Virus Rule, a gamified learning platform that helps kids understand how viruses spread and how to protect themselves. Combining health education with interactive challenges, quizzes, and game-like activities, Zoja is using design thinking to make safety fun and memorable.\n “The problem I'm solving is that a lot of kids don't really know how viruses spread or how to stay safe,” she says. “I want to make it fun and easy to learn, so kids can protect themselves and others.” Zoja is learning product design and applying her creativity to build tools that empower young people with knowledge.`,
  },
  {
    id: 4,
    author: "Fedir",
    age: 10,
    img: "/images/student_project-img_3.webp",
    title: "Virus Rules",
    description: `Fedir, 12, is building a marketplace he calls 'Toy Cycle' to make toys affordable and accessible for kids.\n After noticing that he had tons of toys he no longer played with, most of them bought for him when he was younger, Fedir realized there was an opportunity to help others. At the same time, he knew there were kids who didn't have access to toys at all. So he came up with an idea: a digital marketplace where parents can buy and sell gently used toys.\n “Some families have extra toys just sitting at home,” Fedir says. “Others want to buy toys but can't always afford new ones. I'm building a place where both sides can help each other.”`,
  },
  {
    id: 5,
    author: "Zach",
    age: 10,
    img: "/images/student_project-img_3.webp",
    title: "Virus Rules",
    description: `Zach is building a custom online ordering platform for his school, where students can browse and purchase items like snacks, school supplies, or merchandise—all from their devices. His idea came from a simple observation: students often waste time in long queues or don't know what's available to buy. \n“I noticed that it can get really busy during breaks, and students don't always get what they need,” Zach says. “So I thought—what if we could just order what we want online and pick it up easily?” \nZach is currently learning web development and using his skills to build a solution tailored to the student experience. His project blends e-commerce with convenience, and he's already testing ideas with classmates.`,
  },
  {
    id: 6,
    author: "Brain",
    age: 10,
    img: "/images/student_project-img_3.webp",
    title: "Virus Rules",
    description: `Hi, I'm Brain, and I'm 10 years old. I really love reading. Sometimes when I'm reading a book, I forget how far I've gone or I lose interest halfway through. I noticed some of my friends have the same problem too. \n That's why I designed BookBuddy an app to help kids keep track of the books they've read and get rewards for finishing them. I used Figma to design it because I've been learning product design for the past four months, and I wanted to build something useful and fun for my project. With BookBuddy, you can earn badges like “Bookworm” or “Star Reader,” and it kind of turns reading into a game.`,
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
    <div className="w-full h-full bg-[#202426] pt-[40px] pb-[140px] 2xl:pt-[96px] md:pb-16 2xl:pb-[200px] flex justify-center items-center">
      <div className="w-full 3xl:w-[1312px] flex flex-col justify-center gap-[130.87px] xl:gap-10 px-3 sm:px-[19.3px] md:px-6 lg:px-12 2xl:px-16 relative z-1">
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
  return (
    <motion.div
      whileHover={{ scale: isMobile ? 1 : 1.02 }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 200,
        mass: 0.8,
      }}
      className="bg-[#FBF8E6] w-full h-full xl:h-[576px] flex flex-col xl:flex-row gap-2 sm:gap-4 rounded-[16px] overflow-hidden relative bg-no-repeat bg-cover bg-[url('/small-project-img.svg')] xl:bg-[url('/project-bg.svg')]"
      style={{
        boxShadow:
          "0px 0px 0px 2px #FCFCFC1A inset, 0px 32px 32px 0px #00000052",
      }}
    >
      <div className="w-full flex-1 pt-4 sm:pt-6 md:pt-8 xl:pt-[62px] pb-4 sm:pb-6 md:pb-8 xl:pb-10 px-4 sm:px-6 xl:pl-12 xl:pr-6 flex flex-col gap-3 sm:gap-4 xl:gap-8">
        {/* <div className="text-white font-inter font-normal text-sm sm:text-base md:text-lg leading-tight sm:leading-6">
          {`Built by ${project.author} (${project.age} years old)`}
        </div> */}
        <div className="w-full flex flex-col gap-2 sm:gap-3 md:gap-4">
          <h4 className="text-white font-inter font-semibold text-[20.8px]/[24.96px] sm:text-[35px]/[44px] md:text-[40px]/[48px] tracking-[0.2px]">
            {project.title}
          </h4>
          <p className="font-inter font-normal text-xs sm:text-sm xl:text-[15px]/[24px] text-white tracking-normal flex flex-col gap-4">
            {project?.description
              ?.replace(/\\n/g, "\n")
              .split("\n")
              .map((line, idx) => (
                <span key={idx} className="mt-b">
                  {line}
                  {idx < project?.description?.split("\n").length - 1 && <br />}
                </span>
              ))}
          </p>
        </div>
      </div>
      <div className="relative h-[204px] md:h-[619px] xl:h-auto xl:w-[518px] overflow-hidden">
        <Image
          src={project.img || "/placeholder.svg"}
          alt={`Screenshot of ${project.title} project by ${project.author}`}
          fill
          className={
            project.title == "Virus Rules"
              ? "w-full h-full object-cover absolute object-[80px_0px] xl:object-[55px_136px]"
              : "w-full h-[216.16px] xl:h-full object-contain absolute object-[123px_-4px] xl:object-center"
          }
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
