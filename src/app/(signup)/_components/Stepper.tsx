interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  // Define step titles
  const stepTitles = ["Information", "Scheduling", "Payment"]

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[160px] xl:w-[274px] flex items-center justify-center">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1
          const isActive = stepNumber === currentStep
          const isCompleted = stepNumber < currentStep

          return (
            <div
              key={stepNumber}
              className="flex flex-col justify-center items-center gap-2"
            >
              <div className="flex items-center">
                {/* Step circle */}
                <div
                  className={`flex w-6 h-6 xl:h-8 xl:w-8 items-center justify-center rounded-full  ${
                    isActive
                      ? "bg-[#232426] text-[#FFFAF3]"
                      : isCompleted
                      ? "bg-[#232426] text-[#FFFAF3]"
                      : "bg-black/8 text-black/83"
                  }`}
                >
                  <span className="text-xs xl:text-[14px]/[18px] font-inter font-medium tracking-normal">
                    {stepNumber}
                  </span>
                </div>

                {/* Connector line */}
                {stepNumber < totalSteps && (
                  <div
                    className={`h-1 w-[91.33px] ${
                      stepNumber < currentStep
                        ? "bg-secondary"
                        : "bg-[linear-gradient(0deg,rgba(0,0,0,0.08),rgba(0,0,0,0.08)),linear-gradient(90deg,#2A2A2A_0%,rgba(0,0,0,0)_0%)]"
                    }`}
                  />
                )}
              </div>
              {/* Step title */}
              <p
                className={`w-full flex-shrink-0 font-inter font-medium tracking-normal text-xs xl:text-[14px]/[18px] text-black/83}`}
              >
                {stepTitles[index]}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
