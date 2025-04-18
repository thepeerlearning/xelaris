"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ErrorMessage,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { forgotpassword } from "@/lib/redux/features/auth/authSlice"
import { useAppDispatch } from "@/lib/redux/hooks"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const infoSchema = z.object({
  email: z.string({ required_error: "Please enter your email address" }).email({
    message: "Please enter a valid email address",
  }),
})
// Define the type from the schema
type infoValues = z.infer<typeof infoSchema>

export default function ParentInformation() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dispatch = useAppDispatch()

  // Initialize the form with React Hook Form and Zod validation
  const form = useForm<infoValues>({
    resolver: zodResolver(infoSchema),
    defaultValues: {
      email: "",
    },
    mode: "onBlur", // Validate on blur for better user experience
  })

  const { formState } = form
  const { isValid } = formState

  // Handle form submission
  function onSubmit(values: infoValues) {
    setIsSubmitting(true)
    dispatch(forgotpassword({ email: values?.email?.trim() }))
      .unwrap()
      .then(() => {
        setIsSubmitting(false)
        router.push(`/email-confirmation?email=${values?.email}`)
      })
      .catch(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <Card className="w-ful xl:w-[542px] rounded bg-[#FBF8E6] shadow-[0px_15px_35px_0px_#3C425714_0px_5px_15px_0px_#0000001F] pb-14 flex justify-center items-center">
      <div className="w-full md:w-[419px] flex flex-col px-6 pt-8 gap-8">
        <div className="w-full xl:w-[420px] flex flex-col gap-2">
          <h2 className="font-normal font-inter text-[24px]/[100%] tracking-normal text-[#232426]">
            Forgot your password?
          </h2>
          <p className="font-inter font-normal text-sm xl:text-[15.63px]/[22px] tracking-normal text-[#232426]">
            No worries! We&apos;ll send you password reset instructions.Please
            enter your email address below.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full xl:w-[420px] grid grid-cols-1 gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className={cn(
                        fieldState.error &&
                          "border-[#E23353] focus-visible:ring-[#E23353]"
                      )}
                      {...field}
                    />
                  </FormControl>

                  {fieldState.error && (
                    <ErrorMessage>{fieldState.error.message}</ErrorMessage>
                  )}
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="w-full h-[46px] py-[9px] px-[13px] flex gap-1 font-inter font-normal text-[17px]/[24px] text-[#FFFAF3] tracking-normal mt-6"
            >
              {isSubmitting ? "Processing..." : "Send instructions"}{" "}
              {!isSubmitting && <ArrowRight />}
            </Button>
          </form>
        </Form>
      </div>
    </Card>
  )
}
