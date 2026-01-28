const ShippingPage = () => {
  return (
    <div>
      <h1>Shipping Page</h1>
    </div>
  );
};

export default ShippingPage;

// "use client";

// import Image from "next/image";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   firstName: Yup.string().required("First name is required"),
//   lastName: Yup.string().required("Last name is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   phone: Yup.string().required("Phone number is required"),
//   country: Yup.string().required("Country is required"),
//   state: Yup.string().required("State is required"),
//   city: Yup.string().required("City is required"),
//   postalCode: Yup.string().required("Postal code is required"),
//   address: Yup.string().required("Address is required"),
// });

// export default function ShippingPage() {
//   return (
//     <div className="max-w-[1440px] mx-auto mt-[45px] mb-[40px] px-[10px] md:px-[16px]">
//       <div
//         className="
//           flex gap-[80px]
//           lg:gap-[50px]
//           md:flex-col md:gap-[60px]
//         "
//       >
//         {/* LEFT : SHIPPING FORM */}
//         <div className="w-[60%] md:w-full">
//           <h1 className="text-[36px] lg:text-[32px] md:text-[28px] font-semibold text-foreground">
//             Shipping Address
//           </h1>
//           <p className="mt-[10px] text-[18px] md:text-[16px] text-foreground">
//             Please provide the relevant information for your order.
//           </p>

//           <Formik
//             initialValues={{
//               firstName: "",
//               lastName: "",
//               email: "",
//               phone: "",
//               country: "",
//               state: "",
//               city: "",
//               postalCode: "",
//               address: "",
//               addressDetails: "",
//             }}
//             validationSchema={validationSchema}
//             onSubmit={(values) => console.log(values)}
//           >
//             {({ errors, touched }) => (
//               <Form className="mt-[35px] space-y-[22px]">
//                 {/* First & Last Name */}
//                 <div className="grid grid-cols-2 md:grid-cols-1 gap-[20px]">
//                   <Field name="firstName">
//                     {({ field }: any) => (
//                       <Input
//                         {...field}
//                         label="First Name"
//                         placeholder="Enter your first name"
//                         radius="full"
//                         isInvalid={!!errors.firstName && touched.firstName}
//                         errorMessage={touched.firstName && errors.firstName}
//                       />
//                     )}
//                   </Field>

//                   <Field name="lastName">
//                     {({ field }: any) => (
//                       <Input
//                         {...field}
//                         label="Last Name"
//                         placeholder="Enter your last name"
//                         radius="full"
//                         isInvalid={!!errors.lastName && touched.lastName}
//                         errorMessage={touched.lastName && errors.lastName}
//                       />
//                     )}
//                   </Field>
//                 </div>

//                 {/* Email */}
//                 <Field name="email">
//                   {({ field }: any) => (
//                     <Input
//                       {...field}
//                       label="Email"
//                       placeholder="Enter your email"
//                       radius="full"
//                       isInvalid={!!errors.email && touched.email}
//                       errorMessage={touched.email && errors.email}
//                     />
//                   )}
//                 </Field>

//                 {/* Phone */}
//                 <Field name="phone">
//                   {({ field }: any) => (
//                     <Input
//                       {...field}
//                       label="Number Phone"
//                       placeholder="+1 (555) 000-0000"
//                       radius="full"
//                       isInvalid={!!errors.phone && touched.phone}
//                       errorMessage={touched.phone && errors.phone}
//                     />
//                   )}
//                 </Field>

//                 {/* Country / State */}
//                 <div className="grid grid-cols-2 md:grid-cols-1 gap-[20px]">
//                   <Field name="country">
//                     {({ field }: any) => (
//                       <Input
//                         {...field}
//                         label="Country"
//                         placeholder="Country"
//                         radius="full"
//                         isInvalid={!!errors.country && touched.country}
//                         errorMessage={touched.country && errors.country}
//                       />
//                     )}
//                   </Field>

//                   <Field name="state">
//                     {({ field }: any) => (
//                       <Input
//                         {...field}
//                         label="State or Province"
//                         placeholder="Enter your state"
//                         radius="full"
//                         isInvalid={!!errors.state && touched.state}
//                         errorMessage={touched.state && errors.state}
//                       />
//                     )}
//                   </Field>
//                 </div>

//                 {/* City / Postal */}
//                 <div className="grid grid-cols-2 md:grid-cols-1 gap-[20px]">
//                   <Field name="city">
//                     {({ field }: any) => (
//                       <Input
//                         {...field}
//                         label="City"
//                         placeholder="City"
//                         radius="full"
//                         isInvalid={!!errors.city && touched.city}
//                         errorMessage={touched.city && errors.city}
//                       />
//                     )}
//                   </Field>

//                   <Field name="postalCode">
//                     {({ field }: any) => (
//                       <Input
//                         {...field}
//                         label="Postal Code"
//                         placeholder="Postal Code"
//                         radius="full"
//                         isInvalid={!!errors.postalCode && touched.postalCode}
//                         errorMessage={touched.postalCode && errors.postalCode}
//                       />
//                     )}
//                   </Field>
//                 </div>

//                 {/* Address */}
//                 <Field name="address">
//                   {({ field }: any) => (
//                     <Input
//                       {...field}
//                       label="Your Address"
//                       placeholder="Enter your address"
//                       radius="full"
//                       isInvalid={!!errors.address && touched.address}
//                       errorMessage={touched.address && errors.address}
//                     />
//                   )}
//                 </Field>

//                 <Field name="addressDetails">
//                   {({ field }: any) => (
//                     <Input
//                       {...field}
//                       label="Your Address Details"
//                       placeholder="Enter your address details"
//                       radius="lg"
//                     />
//                   )}
//                 </Field>

//                 {/* Button */}
//                 <Button
//                   type="submit"
//                   radius="full"
//                   className="w-full h-[48px] bg-black text-white text-[16px]"
//                 >
//                   Continue Shipping
//                 </Button>
//               </Form>
//             )}
//           </Formik>
//         </div>

//         {/* RIGHT : ORDER SUMMARY */}
//         <div className="w-[40%] md:w-full">
//           <h2 className="text-[24px] font-semibold mb-[30px]">
//             Your Order
//           </h2>

//           {/* Product 1 */}
//           <div className="flex gap-[15px] mb-[25px]">
//             <Image src="/product1.png" alt="" width={60} height={60} />
//             <div className="text-[14px]">
//               <p className="font-medium">Drop Pendant</p>
//               <p className="text-[#777]">White Gold</p>
//               <p>Quantity : 2</p>
//             </div>
//             <p className="ml-auto font-medium">$1,178</p>
//           </div>

//           {/* Product 2 */}
//           <div className="flex gap-[15px] mb-[30px]">
//             <Image src="/product2.png" alt="" width={60} height={60} />
//             <div className="text-[14px]">
//               <p className="font-medium">Blue Diamond Ring</p>
//               <p className="text-[#777]">White Gold</p>
//               <p>Quantity : 1</p>
//             </div>
//             <p className="ml-auto font-medium">$10,159</p>
//           </div>

//           <h3 className="text-[18px] font-semibold mb-[15px]">
//             Order Summary
//           </h3>

//           <div className="text-[14px] space-y-[10px]">
//             <div className="flex justify-between">
//               <span>Subtotal Price</span>
//               <span>$11,337</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Price Delivery</span>
//               <span>Free</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Taxes</span>
//               <span>—</span>
//             </div>
//           </div>

//           <div className="flex justify-between font-semibold text-[18px] mt-[25px]">
//             <span>Total</span>
//             <span>$11,342</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
