"use client"

import { Button } from "@/components/ui/button"
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
import { signup, updateUserData } from "@/lib/redux"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const personalInfoSchema = z.object({
  parentFullName: z
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

  childFullName: z
    .string({ required_error: "Please enter your child's full name" })
    .min(2, {
      message: "Please enter your child's full name (at least 2 characters)",
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
type PersonalInfoValues = z.infer<typeof personalInfoSchema>

interface PersonalInfoStepProps {
  nextStep: () => void
}

export function PersonalInfoStep({ nextStep }: PersonalInfoStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { userData }: any = useAppSelector((state) => state.signup)
  const dispatch = useAppDispatch()

  // Initialize the form with React Hook Form and Zod validation
  const form = useForm<PersonalInfoValues>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      parentFullName: userData?.parent_full_name ?? "",
      childFullName: userData?.child_full_name ?? "",
      email: userData?.email ?? "",
      password: userData?.password ?? "",
      phoneNumber: userData?.phone ?? "",
    },
    mode: "onBlur", // Validate on blur for better user experience
  })

  const { formState } = form
  const { isValid } = formState

  // Get suggested countries first, then sort the rest alphabetically
  const sortedCountries = [...countries].sort((a, b) => {
    if (a.suggested && !b.suggested) return -1
    if (!a.suggested && b.suggested) return 1
    return a.label.localeCompare(b.label)
  })

  // Watch for changes to the countryCode field
  const selectedCountryCode = form.watch("countryCode")
  const selectedCountryPhone = selectedCountryCode
    ? countries.find((c) => c.code === selectedCountryCode)?.phone || ""
    : ""
  // Use React.useEffect to update the phone number when country changes
  useEffect(() => {
    if (selectedCountryCode) {
      const currentPhoneNumber = form.getValues("phoneNumber")
      // Only prefill if the field is empty or doesn't start with the country code
      if (
        !currentPhoneNumber ||
        !currentPhoneNumber.startsWith(selectedCountryPhone)
      ) {
        form.setValue("phoneNumber", selectedCountryPhone)
      }
    }
  }, [selectedCountryCode, selectedCountryPhone, form])

  // Handle form submission
  function onSubmit(values: PersonalInfoValues) {
    const {
      email,
      password,
      phoneNumber,
      parentFullName,
      childFullName,
      countryCode,
    } = values
    const country = countries.find((c) => c.code === countryCode)!
    const fullPhoneNumber = `${country.phone}${phoneNumber}`.replace(/\s+/g, "")
    const inputData = {
      child_full_name: childFullName,
      parent_full_name: parentFullName,
      email: email?.trim(),
      username: childFullName.split(" ")?.[0]?.trim(),
      password: password?.trim(),
      phone: fullPhoneNumber,
    }

    setIsSubmitting(true)
    dispatch(signup({ inputData }))
      .unwrap()
      .then(() => {
        dispatch(updateUserData({ data: inputData }))
        setIsSubmitting(false)
        nextStep()
      })
      .catch(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="w-full h-full space-y-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full xl:w-[420px] grid grid-cols-1 gap-[10px]"
        >
          <FormField
            control={form.control}
            name="parentFullName"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel htmlFor="parentFullName">Parent Full Name</FormLabel>
                <FormControl>
                  <Input
                    id="parentFullName"
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
            name="childFullName"
            render={({ field, fieldState }) => {
              return (
                <FormItem>
                  <FormLabel htmlFor="childFullName">Child Full Name</FormLabel>
                  <FormControl>
                    <Input
                      id="childFullName"
                      placeholder="Jane Doe"
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
              )
            }}
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
              {/* <FormField
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
                            <SelectItem key={index} value={country.code}>
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
              /> */}
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="relative">
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value)
                          // Get the selected country's phone code
                          const country = countries.find(
                            (c) => c.code === value
                          )
                          if (country) {
                            // Update the phone number field with the country code
                            const currentPhone =
                              form.getValues("phoneNumber") || ""
                            if (
                              !currentPhone ||
                              !currentPhone.startsWith(country.phone)
                            ) {
                              form.setValue("phoneNumber", country.phone)
                            }
                          }
                        }}
                        value={field.value || ""}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-[300px] overflow-y-auto">
                          {sortedCountries.map((country, index) => (
                            <SelectItem key={index} value={country.code}>
                              {country.label} ({country.phone})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {form.formState.errors.countryCode && (
                      <ErrorMessage>
                        {form.formState.errors.countryCode.message}
                      </ErrorMessage>
                    )}
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

          <p className="text-[13.34px]/[18px] tracking-normal text-secondary my-4">
            By clicking &apos;Continue&apos;, you agree to Xelaris&apos;s{" "}
            <Link href="/privacy-policy" className="text-primary">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="text-primary hover:underline underline-offset-4"
            >
              Terms Of Service.
            </Link>
          </p>
          <Button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="w-full h-[46px] py-[9px] px-[13px] flex gap-1 font-inter font-normal text-[17px]/[24px] text-[#FFFAF3] tracking-normal"
          >
            {isSubmitting ? "Processing..." : "Continue"}{" "}
            {!isSubmitting && <ArrowRight />}
          </Button>
        </form>
      </Form>
    </div>
  )
}
