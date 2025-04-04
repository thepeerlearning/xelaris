"use client"

import type { Metadata } from "next"
import React, { useEffect } from "react"
import { Header } from "./_components/Header"
import CookieConsent from "./_components/CookieConsent"
import Footer from "./_components/FooterSection"
import AOS from "aos"

export const metadata: Metadata = {
  title: "Home | xelaris",
  description: "Welcome to xelaris online learning platform",
}

export default function LandingRootLayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 200,
      delay: 200,
      mirror: false,
      anchorPlacement: "top-bottom",
    })
    // Cleanup function to refresh AOS
    return () => {
      AOS.refresh()
    }
  }, [])
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
