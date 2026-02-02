const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
};

export default LoginPage;

// "use client";

// import React, { useEffect, useState } from "react";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// export default function LoginPage() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.clear();
//     }
//   }, []);

//   /* -------------------- Validation -------------------- */
//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//     rememberMe: Yup.boolean(),
//   });

//   const initialValues = {
//     email: "",
//     password: "",
//     rememberMe: false,
//   };

//   const handleSubmit = (values: any, { setSubmitting }: any) => {
//     console.log(values);
//     setSubmitting(false);
//     router.push("/");
//   };

//   return (
//     <div className="w-full min-h-screen flex">
//       {/* Left Image */}
//       <div className="w-1/2 lg:hidden h-screen">
//         <img
//           src="/login-left-banner.png"
//           alt="Login Banner"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Right Content */}
//       <div className="w-1/2 lg:w-full flex items-center justify-center h-screen overflow-auto">
//         <div className="w-full max-w-md px-6">
//           <div className="flex justify-center mb-[1.7rem]">
//             <Image
//               src='/logo.svg'
//               width={160}
//               height={32}
//               alt="logo"
//             />
//           </div>

//           <h1 className="text-[3rem] lg:text-[2.5rem] font-medium text-foreground text-center mb-2">
//             Welcome back
//           </h1>

//           <p className="text-foreground text-center mb-[4.125rem]">
//             Please enter your email
//           </p>

//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ errors, touched, isSubmitting, values, setFieldValue }) => (
//               <Form className="space-y-4">
//                 {/* Email */}
//                 <div>
//                   <Field name="email">
//                     {({ field }: any) => (
//                       <Input
//                         {...field}
//                         type="email"
//                         placeholder="Enter your email"
//                         radius="full"
//                         isInvalid={!!errors.email && !!touched.email}
//                         errorMessage={touched.email && errors.email}
//                         classNames={{
//                           inputWrapper: [
//                             "border",
//                             "!bg-transparent",
//                             "border-[#AEAEAE]",
//                             "hover:border-[#AEAEAE]",
//                             "focus-within:border-[#AEAEAE]",
//                           ].join(" "),
//                           input: [
//                             "placeholder:text-[#AEAEAE]",
//                             "placeholder:text-[1rem]",
//                             "text-base",
//                             "pr-8", // space for icon consistency
//                           ].join(" "),
//                         }}
//                       />
//                     )}
//                   </Field>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <Field name="password">
//                     {({ field }: any) => (
//                       <Input
//                         {...field}
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Enter your password"
//                         radius="full"
//                         isInvalid={!!errors.password && !!touched.password}
//                         errorMessage={touched.password && errors.password}
//                         classNames={{
//                           inputWrapper: [
//                             "border",
//                             "border-[#AEAEAE]",
//                             "!bg-transparent",
//                             "hover:border-[#AEAEAE]",
//                             "focus-within:border-[#AEAEAE]",
//                             "!pr-2"
//                           ].join(" "),
//                           input: [
//                             "placeholder:text-[#AEAEAE]",
//                             "placeholder:text-[1rem]",
//                             "text-base",
//                             "pr-8", // ✅ IMPORTANT
//                           ].join(" "),
//                         }}
//                         endContent={
//                           <div
//                             className="w-8 h-8 flex items-center justify-center cursor-pointer"
//                             onClick={() => setShowPassword(!showPassword)}
//                           >
//                             {showPassword ? (
//                               <svg
//                                 className="w-5 h-5"
//                                 fill="none"
//                                 stroke="#AEAEAE"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                                 />
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                                 />
//                               </svg>
//                             ) : (
//                               <Image
//                                 src="/auth/eye-slash.svg"
//                                 alt="Hide password"
//                                 width={20}
//                                 height={20}
//                               />
//                             )}
//                           </div>
//                         }
//                       />
//                     )}
//                   </Field>

//                 </div>

//                 {/* Remember + Forgot */}
//                 <div className="flex items-center justify-between text-foreground mb-[2rem]">
//                   <Checkbox
//                     isSelected={values.rememberMe}
//                     onValueChange={(val) =>
//                       setFieldValue("rememberMe", val)
//                     }
//                   >
//                     <div className="text-[#AEAEAE]">Remember me</div>
//                   </Checkbox>

//                   <Link
//                     href="/forgot-password"
//                     className="text-[#AEAEAE] cursor-pointer hover:underline"
//                   >
//                     Forgot password?
//                   </Link>
//                 </div>

//                 {/* Submit */}
//                 <Button
//                   type="submit"
//                   isLoading={isSubmitting}
//                   className="w-full bg-black text-white py-3 rounded-full mb-[5rem]"
//                 >
//                   Submit
//                 </Button>
//               </Form>
//             )}
//           </Formik>

//           <p className="text-center text-sm mt-6">
//             Don&apos;t have an account?{" "}
//             <Link href="/signup" className="font-semibold">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
