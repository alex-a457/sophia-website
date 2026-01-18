'use client'

import * as React from 'react'
import { AppButton } from '../ui/AppButton'

const formatDate = (d: Date | string) =>
  new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })
    .format(new Date(d));


type LoyaltySummaryHeaderProps = {
  points: number

  expiryPoints?: number
  expiryDate?: Date | string

  tierLabel?: string
  tierBg?: string

  pointsToNextTier?: number
  nextTierLabel?: string

  onAddMore?: () => void
}

const LoyaltySummaryHeader: React.FC<LoyaltySummaryHeaderProps> = ({
  points,
  expiryPoints,
  expiryDate,

  tierLabel = 'Gold',
  tierBg = '#FFCE49',

  pointsToNextTier,
  nextTierLabel = 'Diamond',

  onAddMore,
}) => {
  const expiryText =
    expiryPoints && expiryDate
      ? `${expiryPoints} coins will expire on ${formatDate(expiryDate)}`
      : null

  const nextTierText =
    pointsToNextTier
      ? `${pointsToNextTier} coins more to ${nextTierLabel}`
      : null

  return (
    <div>
      <div className="flex xs:flex-col items-start justify-between sm:gap-5">
        <div className="flex md:flex-col md:items-start items-end gap-4 md:gap-4.5 sm:gap-2.5">
          {/* Left */}
          <div className="flex flex-col gap-1 text-[#151515]">
            <p className="text-lg sm:text-base">You Have</p>

            <p className="text-[44px] lg:text-4xl sm:text-2xl font-semibold">
              {points} Loyalty Point{points !== 1 ? 's' : ''}
            </p>

            {expiryText && (
              <p className="text-lg sm:text-base text-[#AEAEAE]">
                {expiryText}
              </p>
            )}
          </div>

          {/* Tier */}
          <div>
            <span
              className="inline-flex rounded-[10px] text-sm text-[#151515] px-4 py-1.5 font-semibold mb-3"
              style={{ backgroundColor: tierBg }}
            >
              {tierLabel}
            </span>

            {nextTierText && (
              <p className="text-lg lg:text-base text-[#AEAEAE]">
                {nextTierText}
              </p>
            )}
          </div>
        </div>

        <AppButton
          variant="solid"
          size="md"
          onPress={onAddMore}
          className="font-semibold xs:mt-0 mt-8.5 sm:text-sm xs:w-full"
        >
          Add More Point
        </AppButton>
      </div>
    </div>
  )
}

export default LoyaltySummaryHeader
