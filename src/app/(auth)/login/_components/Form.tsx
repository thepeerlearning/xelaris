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
import { adminLogin } from "@/lib/redux/features/auth/authSlice"
import { useAppDispatch } from "@/lib/redux/hooks"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const infoSchema = z.object({
  email: z.string({ required_error: "Please enter your email address" }).email({
    message: "Please enter a valid email address",
  }),
  password: z.string({ required_error: "Please enter a password" }),
})
// Define the type from the schema
type infoValues = z.infer<typeof infoSchema>

export function ParentInformation() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dispatch = useAppDispatch()

  // Initialize the form with React Hook Form and Zod validation
  const form = useForm<infoValues>({
    resolver: zodResolver(infoSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur", // Validate on blur for better user experience
  })

  const { formState } = form
  const { isValid } = formState

  // Handle form submission
  function onSubmit(values: infoValues) {
    const { email, password } = values

    const inputData = {
      email: email?.trim(),
      password: password?.trim(),
    }

    setIsSubmitting(true)
    dispatch(adminLogin({ inputData }))
      .unwrap()
      .then(() => {
        setIsSubmitting(false)
        router.push("/admin/dashboard")
      })
      .catch(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <Card className="w-ful xl:w-[542px] rounded bg-[#FBF8E6] shadow-[0px_15px_35px_0px_#3C425714_0px_5px_15px_0px_#0000001F] pb-14 flex justify-center items-center">
      <div className="w-full  md:w-[419px] flex flex-col px-6 pt-8 gap-8">
        <h2 className="font-inter font-normal text-[24px]/[100%] tracking-normal align-middle text-[#232426]">
          Sign in to your account
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full h-[296px] grid grid-cols-1 gap-4"
          >
            <div className="w-full h-[198px] grid grid-cols-1 gap-4">
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
              <div className="w-full flex flex-col gap-1">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <div className="w-full h-[14px] flex justify-between items-center">
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Link
                          href="/forgot-password"
                          className="font-inter font-normal text-[13.34px]/[18px] tracking-normal text-secondary underline hover:text-primary"
                        >
                          Forgot Password
                        </Link>
                      </div>

                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
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
              </div>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="w-full h-[46px] py-[9px] px-[13px] flex gap-1 font-inter font-normal text-[17px]/[24px] text-[#FFFAF3] tracking-normal mt-6"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}{" "}
              {!isSubmitting && <ArrowRight />}
            </Button>
          </form>
        </Form>
      </div>
    </Card>
  )
}
