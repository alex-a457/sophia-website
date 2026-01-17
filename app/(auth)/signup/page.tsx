"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Input, Checkbox } from "@heroui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  }, []);

  /* -------------------- Validation -------------------- */
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    terms: Yup.boolean().oneOf(
      [true],
      "You must accept Terms & Conditions"
    ),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  };

  const handleSubmit = (_values: any, { setSubmitting }: any) => {
    setSubmitting(false);
    router.push("/login");
  };

  return (
    <div className="w-full min-h-screen flex">
      {/* Left Image */}
      <div className="w-1/2 lg:hidden h-screen relative">
        <Image
          src="/auth/signup.png"
          alt="Signup Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-1/2 lg:w-full flex items-center justify-center h-screen overflow-auto">
        <div className="w-full max-w-md px-6">
          {/* Logo */}
          <div className="flex justify-center mb-[2.5rem]">
            <Image src="/logo.svg" width={160} height={32} alt="logo" />
          </div>

          {/* Heading */}
          <h1 className="text-[3rem] lg:text-[2.5rem] font-medium text-theme text-center mb-2">
            Create an account
          </h1>

          <p className="text-theme text-left mb-[3.5rem]">
            Don’t have an account?{" "}
            <Link href="/login" className="hover:underline font-semibold">
              Sign In
            </Link>
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting, values, setFieldValue }) => (
              <Form className="space-y-4">
                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-3">
                  <Field name="firstName">
                    {({ field }: any) => (
                      <Input
                        {...field}
                        placeholder="First name"
                        radius="full"
                        isInvalid={!!errors.firstName && !!touched.firstName}
                        errorMessage={touched.firstName && errors.firstName}
                        classNames={{
                          inputWrapper:
                            "border border-[#AEAEAE] !bg-transparent",
                          input:
                            "placeholder:text-[#AEAEAE] placeholder:text-[1rem]",
                        }}
                      />
                    )}
                  </Field>

                  <Field name="lastName">
                    {({ field }: any) => (
                      <Input
                        {...field}
                        placeholder="Last name"
                        radius="full"
                        isInvalid={!!errors.lastName && !!touched.lastName}
                        errorMessage={touched.lastName && errors.lastName}
                        classNames={{
                          inputWrapper:
                            "border border-[#AEAEAE] !bg-transparent",
                          input:
                            "placeholder:text-[#AEAEAE] placeholder:text-[1rem]",
                        }}
                      />
                    )}
                  </Field>
                </div>

                {/* Email */}
                <Field name="email">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email"
                      radius="full"
                      isInvalid={!!errors.email && !!touched.email}
                      errorMessage={touched.email && errors.email}
                      classNames={{
                        inputWrapper:
                          "border border-[#AEAEAE] !bg-transparent",
                        input:
                          "placeholder:text-[#AEAEAE] placeholder:text-[1rem]",
                      }}
                    />
                  )}
                </Field>

                {/* Password */}
                <Field name="password">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      radius="full"
                      isInvalid={!!errors.password && !!touched.password}
                      errorMessage={touched.password && errors.password}
                      classNames={{
                        inputWrapper:
                          "border border-[#AEAEAE] !bg-transparent !pr-2",
                        input:
                          "placeholder:text-[#AEAEAE] placeholder:text-[1rem] pr-8",
                      }}
                      endContent={
                        <button
                          type="button"
                          className="w-8 h-8 flex items-center justify-center cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="#AEAEAE"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          ) : (
                            <Image
                              src="/auth/eye-slash.svg"
                              alt="Hide password"
                              width={20}
                              height={20}
                            />
                          )}
                        </button>
                      }
                    />
                  )}
                </Field>

                {/* Terms */}
                <div className="flex items-center">
                  <Checkbox
                    isSelected={values.terms}
                    onValueChange={(val) =>
                      setFieldValue("terms", val)
                    }
                  >
                    <span className="text-[#AEAEAE]">
                      I agree to the{" "}
                      <span className="hover:!underline font-semibold text-theme">
                        Terms & Conditions
                      </span>
                    </span>
                  </Checkbox>
                </div>

                {errors.terms && touched.terms && (
                  <p className="text-red-500 text-xs">
                    {errors.terms}
                  </p>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  className="w-full bg-black text-white py-3 rounded-full mt-6"
                >
                  Create Account
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
