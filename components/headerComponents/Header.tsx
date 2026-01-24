// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { IoClose } from "react-icons/io5";

// const Header = () => {
//   const [showOfferBar, setShowOfferBar] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // ✅ MENU ITEMS WITH ROUTES
//   const menuItems = [
//     { label: "Home", href: "/" },
//     { label: "Shop", href: "/" },
//     { label: "Collections", href: "/" },
//     { label: "Gems of the World", href: "/" },
//     { label: "Signature Collection", href: "/" },
//     { label: "Engagement Collections", href: "/" },
//     { label: "Blog", href: "/blog" },
//     { label: "About Us", href: "/" },
//     { label: "Contact Us", href: "/" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowOfferBar(window.scrollY <= 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b border-[#E5E5E5]">

//       {/* ================= OFFER BAR ================= */}
//       <div
//         className={`bg-[#151515] text-white text-center text-[0.875rem] md:text-[0.75rem] px-3 transition-all duration-300 ${
//           showOfferBar ? "opacity-100 h-auto py-3" : "opacity-0 h-0 overflow-hidden"
//         }`}
//       >
//         Exclusive Offer: Enjoy Complimentary Engraving and Worldwide Shipping on All Orders
//       </div>

//       {/* ================= MAIN HEADER ================= */}
//       <div className="px-4 pt-7 pb-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex items-center justify-between lg:flex-row-reverse">

//             {/* MOBILE MENU BUTTON */}
//             <button
//               className="hidden lg:block cursor-pointer"
//               onClick={() => setIsMenuOpen(true)}
//             >
//               <Image src="/menu.svg" alt="menu" width={42} height={42} />
//             </button>

//             {/* SEARCH (DESKTOP) */}
//             <div className="lg:hidden">
//               <div className="relative w-[15.938rem]">
//                 <div className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer">
//                   {searchTerm ? (
//                     <IoClose size={18} onClick={() => setSearchTerm("")} />
//                   ) : (
//                     <Image src="/search-icon.svg" alt="search" width={16} height={16} />
//                   )}
//                 </div>

//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full h-11 border-b-2 border-[#cecece7a] pl-12 pr-4 focus:outline-none focus:border-[#151515]"
//                 />
//               </div>
//             </div>

//             {/* LOGO */}
//             <Link href="/">
//               <Image
//                 src="/logo.svg"
//                 alt="Sophia Fiori"
//                 width={171}
//                 height={34}
//                 className="md:w-[170px] cursor-pointer"
//               />
//             </Link>

//             {/* DESKTOP ACTIONS */}
//             <div className="flex items-center gap-5 lg:hidden">
//               <div className="text-[#151515]">Cart (0)</div>
//               <Button className="border border-[#151515] rounded-full bg-transparent px-8 py-2 text-[#151515]">
//                 Sign up
//               </Button>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ================= DESKTOP NAV ================= */}
//       <nav className="flex justify-center gap-5 pb-4 text-[0.95rem] text-[#151515] lg:hidden">
//         {menuItems.map((item) => (
//           <Link
//             key={item.label}
//             href={item.href}
//             className="cursor-pointer hover:underline"
//           >
//             {item.label}
//           </Link>
//         ))}
//       </nav>

//       {/* ================= MOBILE DRAWER ================= */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-white hidden lg:block w-[80vw]">
//           <div className="p-6">

//             {/* DRAWER HEADER */}
//             <div className="flex items-center justify-between mb-8">
//               <Image src="/logo.svg" alt="logo" width={130} height={30} />
//               <IoClose
//                 size={26}
//                 className="cursor-pointer"
//                 onClick={() => setIsMenuOpen(false)}
//               />
//             </div>

//             {/* MOBILE SEARCH */}
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full border-b-2 border-[#cecece7a] pb-2 mb-6 focus:outline-none"
//             />

//             {/* MOBILE MENU */}
//             <div className="h-[70vh] overflow-auto">
//               <div className="flex flex-col gap-4 text-lg">
//                 {menuItems.map((item) => (
//                   <Link
//                     key={item.label}
//                     href={item.href}
//                     onClick={() => setIsMenuOpen(false)}
//                     className="relative py-2 cursor-pointer hover:underline"
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* MOBILE CTA */}
//             <Button className="mt-8 w-full border border-[#151515] rounded-full bg-transparent py-3 text-[#151515]">
//               Sign up
//             </Button>

//           </div>
//         </div>
//       )}

//     </header>
//   );
// };

// export default Header;
