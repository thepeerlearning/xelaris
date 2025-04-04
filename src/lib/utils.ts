import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { isEmpty } from "lodash"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function updateKey(str: string) {
  if (typeof str !== "string") return ""
  const regex = / /g
  const newStr = str.toLowerCase()
  const update = newStr.replace(regex, "-")
  return update
}

export function getInitials(name: string) {
  if (isEmpty(name)) return ""
  const namesArray = name.split(" ")
  const initials = namesArray?.map((n) => n?.[0]?.toUpperCase()).join("")
  return initials
}
export function convert24To12(time: any) {
  if (time) {
    let [hours, minutes] = time?.split(":")
    hours = parseInt(hours, 10)
    const period = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12 // Convert 0 to 12 for midnight
    minutes = minutes.padStart(2, "0")

    return `${hours}:${minutes} ${period}`
  }
  return null
}
export function convertDayToShortForm(day: string) {
  const dayMapping: any = {
    monday: "Mon",
    tuesday: "Tue",
    wednesday: "Wed",
    thursday: "Thu",
    friday: "Fri",
    saturday: "Sat",
    sunday: "Sun",
  }

  return dayMapping[day] || day
}
