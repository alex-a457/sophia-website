import React from 'react'
import AppImage from '../ui/AppImage'

const formatDate = (d: Date | string) =>
  new Intl.DateTimeFormat("en-GB", { 
    day: "2-digit", 
    month: "2-digit", 
    year: "numeric" 
  }).format(new Date(d));

const LoyaltyPointsCard = ({productInfo}: {productInfo: any}) => {
  return (
    <div className="w-full max-w-[884px]">
      
      {/* DESKTOP & TABLET: Horizontal layout (above 639px) */}
      <div className="flex items-start gap-4 lg:gap-5 sm:hidden">
        
        {/* Image */}
        <div className="flex-shrink-0 w-[140px]">
          <AppImage
            src="/productDemo/loyaltyImg1.svg"
            alt="Product"
            aspectRatio={1}
            className={{
              wrapperClass: "w-full rounded-2xl",
              imageClass: "rounded-2xl object-cover scale-[1.5]",
            }}
          />
        </div>

        {/* Content - grows to fill */}
        <div className="flex-1 self-stretch justify-between  min-w-0 flex flex-col">

        <div className="flex flex-col gap-3 sm:gap-1">
          <h2 className="text-2xl md:text-xl font-semibold text-[#151515] leading-tight">
            {productInfo.title}
          </h2>
          
          <p className="text-lg md:text-sm text-[#151515] leading-relaxed">
            {productInfo.description}
          </p>
          </div>

          <p className="text-lg md:text-sm text-[#151515]">
            {formatDate(productInfo.date)}
          </p>

        </div>

        {/* Points - fixed width, top aligned */}
        <div className="flex-shrink-0 w-[75px] flex flex-col items-end gap-2">

          <p className="text-base md:text-sm  text-[#151515] text-right">Total Point</p>

          <p className="text-[28px] md:text-xl font-semibold text-[#151515]">
            +{productInfo.points}
          </p>
        </div>
        
      </div>

      {/* MOBILE: Different layout (≤639px) */}
      <div className="hidden sm:flex flex-col">
        
        {/* Image + Content Row */}
        <div className="flex items-start gap-5">
          <div className="flex-shrink-0 w-[118px]">
            <AppImage
              src="/productDemo/loyaltyImg1.svg"
              alt="Product" 
              aspectRatio={1}
              className={{
                wrapperClass: "w-full rounded-2xl",
                imageClass: "rounded-2xl object-cover scale-[1.5]",
              }}
            />
          </div>

          <div className="flex-1 min-w-0 flex flex-col">

      <div className="flex flex-col gap-1 mb-2">
            <h2 className="text-xl font-semibold text-[#151515] leading-tight">
              {productInfo.title}
            </h2>
            
            <p className="text-sm text-[#151515] leading-relaxed">
              {productInfo.description}
            </p>

            </div>

            <p className="text-sm text-[#151515]">
              {formatDate(productInfo.date)}
            </p>

   {/* Points Section - Separate row below */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-sm text-[#151515]">Total Points</p>
          <p className="text-xl font-semibold text-[#151515]">
            +{productInfo.points}
          </p>
          
        </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default LoyaltyPointsCard