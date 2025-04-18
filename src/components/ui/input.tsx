import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-secondary selection:bg-primary selection:text-secondary rounded flex h-10 w-full min-w-0 border border-[#D9DCE1] bg-transparent px-4 py-1 text-base transition-[color] outline-none placeholder:text-[#BDC1CA] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-[15px]/[22px] file:font-normal disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-[15px]/[22px]",
        "focus-visible:border-secondary/30 focus-visible:ring-none focus-visible:ring-0",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
