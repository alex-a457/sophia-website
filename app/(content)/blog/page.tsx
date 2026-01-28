const BlogPage = () => {
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
};

export default BlogPage;

// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// export default function BlogPage() {
//     const blogs = [];
//     const blogTags = ['All', 'Trends', 'Styling Tips', 'Seasonal Looks', 'Celebrity Jewelry'];
//     const [activeTag, setActiveTag] = useState('All');
//     const blogPosts = [
//         {
//             id: 1,
//             type: 'Styling Tips',
//             post_name: 'How to Mix Metals Like a Pro: Gold, Silver & More',
//             date: 'Jun 14, 2025',
//             blog_image: '/blog/blog-1.png',
//         },
//         {
//             id: 2,
//             type: 'Seasonal Looks',
//             post_name: 'Spring Sparkle: Fresh Jewelry Styles for the New Season',
//             date: 'Jun 14, 2025',
//             blog_image: '/blog/blog-2.png'
//         },
//         {
//             id: 3,
//             type: 'Celebrity Jewelry',
//             post_name: 'Red Carpet Radiance: Iconic Celebrity Jewelry Moments',
//             date: 'Jun 14, 2025',
//             blog_image: '/blog/blog-3.png'
//         },
//         {
//             id: 4,
//             type: 'Trends',
//             post_name: 'Layered Luxury: Why Stacking Jewelry Is the Trend Everyone Loves',
//             date: 'Jun 14, 2025',
//             blog_image: '/blog/blog-4.png'
//         },
//         {
//             id: 5,
//             type: 'Styling Tips',
//             post_name: 'The Art of Layering Necklaces Without Tangling',
//             date: 'Jun 14, 2025',
//             blog_image: '/blog/blog-5.png'
//         },
//         {
//             id: 6,
//             type: 'Seasonal Looks',
//             post_name: 'Summer Glow: Beach-Ready Jewelry That Elevates Every Outfit',
//             date: 'Jun 14, 2025',
//             blog_image: '/blog/blog-6.png'
//         },
//         {
//             id: 7,
//             type: 'Celebrity Jewelry',
//             post_name: 'Everyday Glam: Jewelry Worn by Celebrities Off-Duty',
//             date: 'Jun 14, 2025',
//             blog_image: '/blog/blog-7.png'
//         },
//         {
//             id: 8,
//             type: 'Styling Tips',
//             post_name: 'Choosing the Right Jewelry for Your Neckline',
//             date: 'Jun 14, 2025',
//             blog_image: '/blog/blog-8.png'
//         },
//         {
//             id: 9,
//             type: 'Seasonal Looks',
//             post_name: 'Autumn Elegance: Warm-Tone Jewelry for Fall Fashion',
//             date: 'Jun 14, 2025',
//             blog_image: '/blog/blog-9.png'
//         }
//     ];

//     const POSTS_PER_PAGE = 5;
//     const [currentPage, setCurrentPage] = useState(1);
//     const filteredPosts =
//         activeTag === 'All'
//             ? blogPosts
//             : blogPosts.filter(post => post.type === activeTag);

//     const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

//     const paginatedPosts = filteredPosts.slice(
//         (currentPage - 1) * POSTS_PER_PAGE,
//         currentPage * POSTS_PER_PAGE
//     );

//     return (
//         <div className="max-w-7xl mx-auto text-center mt-[2.813rem] mb-[2.5rem] lg:px-[10px] px-[5px]">
//             <h1 className="text-[5rem] md:text-[4rem] mb-[1.5rem] md:mb-[1rem]">
//                 Blog
//             </h1>

//             <div className="text-foreground mb-[3.25rem]">
//                 Discover the stories, craftsmanship, and style behind every sparkle.
//             </div>

//             <div className="w-full p-[0.5rem] flex flex-row flex-wrap gap-x-1 gap-y-1 mb-[2.5rem]">
//                 {blogTags.map((tag, ind) => (
//                     <div key={ind}
//                         onClick={() => {
//                             setActiveTag(tag);
//                             setCurrentPage(1);
//                         }}>
//                         <Button
//                             className={`${activeTag === tag
//                                 ? 'bg-[#151515] text-white border-transparent'
//                                 : 'text-[#AEAEAE] border-[#AEAEAE] bg-transparent'
//                                 } px-[1.5rem] py-[0.5rem] rounded-[2.5rem] cursor-pointer border  hover:bg-[#151515] hover:text-white`} onClick={() => setActiveTag(tag)}
//                         >
//                             {tag}
//                         </Button>
//                     </div>
//                 ))}
//             </div>

//             <div className="w-full p-[0.5rem] flex flex-row flex-wrap gap-x-1 gap-y-1">
//                 <div className="grid grid-cols-3 lg:grid-cols-2 sm:!grid-cols-1 gap-6 w-full justify-items-center">
//                     {paginatedPosts.map((post) => (
//                         <div key={post.id} className="max-w-[25rem] xl:w-[20rem] sm:!w-full sm:!max-w-full">
//                             <div className="xl:w-[20rem] sm:!w-full">
//                                 <Image
//                                     src={post.blog_image}
//                                     width={400}
//                                     height={226}
//                                     alt=''
//                                     className="object-cover rounded-[0.75rem] mb-[1rem] sm:w-full" />
//                             </div>

//                             <div className="flex flex-col gap-[0.25rem] text-left">
//                                 <div className="text-[0.875rem] text-[#AEAEAE]">
//                                     {post.type}
//                                 </div>

//                                 <h2 className="text-foreground text-[1.5rem]">
//                                     {post.post_name}
//                                 </h2>

//                                 <div className="text-[0.875rem] text-[#AEAEAE]">
//                                     {post.date}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="flex justify-center items-center gap-3 mt-12 mb-[3.375rem]">
//                 <button
//                     disabled={currentPage === 1}
//                     onClick={() => setCurrentPage(p => p - 1)}
//                     className={`w-[2rem] h-[2rem] rounded-full border flex justify-center items-center cursor-pointer ${currentPage === 1
//                         ? 'text-[#AEAEAE] '
//                         : 'text-foreground'}`}
//                 >
//                     <FaArrowLeft />
//                 </button>

//                 {Array.from({ length: totalPages }).map((_, i) => (
//                     <button
//                         key={i}
//                         onClick={() => setCurrentPage(i + 1)}
//                         className={`w-[2rem] h-[2rem] text-sm text-foreground cursor-pointer ${currentPage === i + 1
//                             ? ''
//                             : 'opacity-30'}`}
//                     >
//                         {i + 1}
//                     </button>
//                 ))}

//                 <button
//                     disabled={currentPage === totalPages}
//                     onClick={() => setCurrentPage(p => p + 1)}
//                     className={`w-[2rem] h-[2rem] rounded-full border flex justify-center items-center cursor-pointer ${currentPage === totalPages
//                         ? 'text-[#AEAEAE] '
//                         : 'text-foreground'}`}
//                 >
//                     <FaArrowRight />
//                 </button>
//             </div>

//             {/* 7. Celebrate the Season with Tanzanite Gems */}
//             <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-[5px]">
//                 <div className="relative w-full h-[32.625rem] mb-[1.5rem]"> {/* height must */}
//                     <Image
//                         src="/celebrate-the-season.png"
//                         alt="Banner"
//                         fill
//                         className="object-cover rounded-[0.75rem]"
//                         priority
//                     />

//                     <div className="absolute text-white w-full flex flex-col items-center justify-center bg-[#00000052] mt-[7rem] px-[20px]">
//                         <h2 className="mb-[1.25rem] text-[3rem] font-medium md:text-[2rem]">
//                             Celebrate the Season with Tanzanite Gems
//                         </h2>

//                         <div className="max-w-[59.688rem] text-center mb-[1.5rem]">
//                             This festive season, we invite you to indulge in the magic of the holidays with our limited-edition Tanzanite Collection. Each piece has been carefully crafted to bring warmth, joy, and a touch of sparkle to your celebrations.
//                         </div>

//                         <div>
//                             <Button className="text-white border-1 border-white p-[0.75rem] rounded-[2.5rem] backdrop-blur-sm bg-transparent">
//                                 See Collection
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }
