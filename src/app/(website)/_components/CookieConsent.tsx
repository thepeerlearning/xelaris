"use client"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if cookie consent has been accepted
    const consentAccepted = localStorage.getItem("cookieConsentAccepted")
    if (!consentAccepted) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    // Store consent acceptance in localStorage and hide the popup
    localStorage.setItem("cookieConsentAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="w-full max-w-[355px] sm:max-w-[375px] bg-[#FBF8E6] fixed bottom-10 left-2 text-[#000000] py-6 px-6 flex flex-col gap-8 justify-between items-center z-50 shadow-[0px_0px_18px_0px_#00000033]">
      <p className="text-sm text-[13.01px] leading-[19.51px] font-inter font-normal">
        To give you the best possible experience, We use cookies and other
        tracking technologies to analyze our traffic, understand how you use our
        site and create a smooth user experience.
      </p>
      <Button onClick={acceptCookies}>Accept and Close</Button>
    </div>
  )
}

export default CookieConsent
