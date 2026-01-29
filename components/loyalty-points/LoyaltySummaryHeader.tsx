'use client';

import * as React from 'react';
import { AppButton } from '../shared/AppButton';

const formatDate = (d: Date | string) =>
  new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(d));

type LoyaltySummaryHeaderProps = {
  points: number;

  expiryPoints?: number;
  expiryDate?: Date | string;

  tierLabel?: string;
  tierBg?: string;

  pointsToNextTier?: number;
  nextTierLabel?: string;

  onAddMore?: () => void;
};

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
      : null;

  const nextTierText = pointsToNextTier
    ? `${pointsToNextTier} coins more to ${nextTierLabel}`
    : null;

  return (
    <div>
      <div className="xs:flex-col flex items-start justify-between sm:gap-5">
        <div className="flex items-end gap-4 sm:gap-2.5 md:flex-col md:items-start md:gap-4.5">
          {/* Left */}
          <div className="flex flex-col gap-1 text-foreground">
            <p className="text-lg sm:text-base">You Have</p>

            <p className="text-[44px] font-semibold sm:text-2xl lg:text-4xl">
              {points} Loyalty Point{points !== 1 ? 's' : ''}
            </p>

            {expiryText && (
              <p className="text-lg text-[#AEAEAE] sm:text-base">
                {expiryText}
              </p>
            )}
          </div>

          {/* Tier */}
          <div>
            <span
              className="mb-3 inline-flex rounded-[10px] px-4 py-1.5 text-sm font-semibold text-foreground"
              style={{ backgroundColor: tierBg }}
            >
              {tierLabel}
            </span>

            {nextTierText && (
              <p className="text-lg text-[#AEAEAE] lg:text-base">
                {nextTierText}
              </p>
            )}
          </div>
        </div>

        <AppButton
          variant="solid"
          size="md"
          onClick={onAddMore}
          className="xs:mt-0 xs:w-full mt-8.5 font-semibold sm:text-sm"
        >
          Add More Point
        </AppButton>
      </div>
    </div>
  );
};

export default LoyaltySummaryHeader;
