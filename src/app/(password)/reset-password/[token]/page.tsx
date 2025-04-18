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
import { resetpassword } from "@/lib/redux/features/auth/authSlice"
import { useAppDispatch } from "@/lib/redux/hooks"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const infoSchema = z
  .object({
    password: z
      .string({ required_error: "Please enter a password" })
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string({
      required_error: "Please confirm your password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

// Define the type from the schema
type infoValues = z.infer<typeof infoSchema>

export default function ParentInformation() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const dispatch = useAppDispatch()

  // Initialize the form with React Hook Form and Zod validation
  const form = useForm<infoValues>({
    resolver: zodResolver(infoSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur", // Validate on blur for better user experience
  })

  const { formState } = form
  const { isValid } = formState

  // Handle form submission
  function onSubmit(values: infoValues) {
    const { confirmPassword, password } = values
    const inputData = {
      password: password?.trim(),
      confirmPassword: confirmPassword?.trim(),
    }

    setIsSubmitting(true)
    dispatch(resetpassword({ inputData }))
      .unwrap()
      .then(() => {
        setIsSubmitting(false)
        router.push("/reset-password/success")
      })
      .catch(() => {
        setIsSubmitting(false)
      })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <Card className="w-full rounded bg-[#FBF8E6] shadow-[0px_15px_35px_0px_#3C425714_0px_5px_15px_0px_#0000001F] pb-14">
      <div className="w-full flex flex-col gap-6 justify-center items-center p-6">
        <div className="w-full xl:w-[420px] flex flex-col gap-2">
          <h2 className="font-normal font-inter text-[24px]/[100%] tracking-normal text-[#232426]">
            Set new password
          </h2>
          <p className="font-inter font-normal text-sm xl:text-[15.63px]/[22px] tracking-normal text-[#232426]">
            Your new password must be different to previously used passwords.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full xl:w-[420px] grid grid-cols-1 gap-4"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel htmlFor="password">New password</FormLabel>

                  <FormControl>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className={cn(
                          "pr-10",
                          fieldState.error &&
                            "border-[#E23353] focus-visible:ring-[#E23353]"
                        )}
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-0 h-full px-3 py-2 text-[#404452] hover:bg-transparent hover:text-[#404452] cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </Button>
                    </div>
                  </FormControl>
                  {fieldState.error && (
                    <ErrorMessage>{fieldState.error.message}</ErrorMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field, fieldState }) => (
                <FormItem>
                  <div className="w-full h-[14px] flex justify-between items-center">
                    <FormLabel htmlFor="confirmPassword">
                      Confirm new password
                    </FormLabel>
                  </div>

                  <FormControl>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className={cn(
                          "pr-10",
                          fieldState.error &&
                            "border-[#E23353] focus-visible:ring-[#E23353]"
                        )}
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-0 h-full px-3 py-2 text-[#404452] hover:bg-transparent hover:text-[#404452] cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                        <span className="sr-only">
                          {showConfirmPassword
                            ? "Hide password"
                            : "Show password"}
                        </span>
                      </Button>
                    </div>
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
              {isSubmitting ? "Processing..." : "Continue"}{" "}
              {!isSubmitting && <ArrowRight />}
            </Button>
          </form>
        </Form>
      </div>
    </Card>
  )
}
