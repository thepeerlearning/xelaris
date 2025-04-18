// components/StripeProvider.tsx
"use client"

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"

const nodeEnv: any = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
const stripePromise = loadStripe(nodeEnv)

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export default function StripeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <Elements stripe={stripePromise}>{children}</Elements>
}
