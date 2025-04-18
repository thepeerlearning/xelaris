"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { StepIndicator } from "./Stepper"
import { PersonalInfoStep } from "./steps/Information"
import { ClassSchedulingStep } from "./steps/Scheduling"
import { PaymentStep } from "./steps/Payment"
import Cookies from "js-cookie"

export function SignupForm() {
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    const step = Cookies.get("step")
    if (step === "account_created") {
      setCurrentStep(2)
    } else if (step === "class_schedule") {
      setCurrentStep(3)
    } else {
      setCurrentStep(1)
    }
  }, [])
  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  return (
    <Card className="w-full lg:w-[542px] rounded bg-[#FBF8E6] shadow-[0px_15px_35px_0px_#3C425714_0px_5px_15px_0px_#0000001F] pb-14 px-4">
      <div className="w-full flex flex-col gap-[60px] justify-center items-center">
        <StepIndicator currentStep={currentStep} totalSteps={3} />
        <div className="">
          {currentStep === 1 && <PersonalInfoStep nextStep={nextStep} />}

          {currentStep === 2 && (
            <ClassSchedulingStep nextStep={nextStep} prevStep={prevStep} />
          )}

          {currentStep === 3 && <PaymentStep />}
        </div>
      </div>
    </Card>
  )
}
