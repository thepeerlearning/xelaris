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
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { countries } from "@/lib/data"
import { adminSignup } from "@/lib/redux"
import { useAppDispatch } from "@/lib/redux/hooks"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const infoSchema = z.object({
  name: z
    .string({ required_error: "Please enter your full name" })
    .min(2, {
      message: "Please enter your full name (at least 2 characters)",
    })
    .max(50, {
      message: "Name is too long (maximum 50 characters)",
    })
    .refine((name) => /^[a-zA-Z\s'-]+$/.test(name), {
      message:
        "Name should only contain letters, spaces, hyphens, and apostrophes",
    }),

  email: z.string({ required_error: "Please enter your email address" }).email({
    message: "Please enter a valid email address",
  }),

  countryCode: z
    .string({
      required_error: "Please select your country code from the dropdown",
    })
    .min(1, { message: "Please select your country code from the dropdown" }),

  phoneNumber: z
    .string({ required_error: "Please enter your phone number" })
    .min(6, { message: "Phone number is too short (minimum 6 digits)" })
    .max(15, { message: "Phone number is too long (maximum 15 digits)" })
    .refine((phone) => /^[0-9\-$$$$\s]+$/.test(phone), {
      message:
        "Phone number can only contain digits, spaces, hyphens, and parentheses",
    }),

  password: z
    .string({ required_error: "Please enter a password" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Password must contain at least one number",
    })
    .refine((password) => /[^A-Za-z0-9]/.test(password), {
      message: "Password must contain at least one special character",
    }),
})
// Define the type from the schema
type PersonalInfoValues = z.infer<typeof infoSchema>

export function AdminInformation() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dispatch = useAppDispatch()

  // Initialize the form with React Hook Form and Zod validation
  const form = useForm<PersonalInfoValues>({
    resolver: zodResolver(infoSchema),
    defaultValues: {
      email: "",
      password: "",
      phoneNumber: "",
      name: "",
      countryCode: "",
    },
    mode: "onBlur", // Validate on blur for better user experience
  })

  const { formState } = form
  const { isValid } = formState

  // Handle form submission
  function onSubmit(values: PersonalInfoValues) {
    const { email, password, phoneNumber, name, countryCode } = values

    const country = countries.find((c) => c.code === countryCode)!
    const fullPhoneNumber = `+${country.phone}${phoneNumber}`.replace(
      /\s+/g,
      ""
    )
    const inputData = {
      name: name?.trim(),
      email: email?.trim(),
      password: password?.trim(),
      phone: fullPhoneNumber,
    }

    setIsSubmitting(true)
    dispatch(adminSignup({ inputData }))
      .unwrap()
      .then(() => {
        setIsSubmitting(false)
        router.push("/login/admin")
      })
      .catch(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <Card className="w-full lg:w-[542px] rounded bg-[#FBF8E6] shadow-[0px_15px_35px_0px_#3C425714_0px_5px_15px_0px_#0000001F] pb-14">
      <div className="w-full flex flex-col gap-[60px] justify-center items-center space-y-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full xl:w-[420px] grid grid-cols-1 gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      id="name"
                      placeholder="John Doe"
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
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <div className="mt-1 flex flex-col gap-[2px] w-full">
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <div className="relative">
                        <Select
                          onValueChange={field.onChange}
                          value={field.value || ""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="United states" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {countries.map((country, index) => (
                              <SelectItem
                                key={`${country.code}-${index}`}
                                value={country.code}
                              >
                                {country.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field, fieldState }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          placeholder="123-456-7890"
                          className={cn(
                            "w-full",
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
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel htmlFor="password">Password</FormLabel>
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
