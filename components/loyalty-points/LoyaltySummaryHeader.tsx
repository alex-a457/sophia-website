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
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:gap-0">
        <div className="flex flex-col items-start gap-2.5 sm:gap-4.5 md:flex-row md:items-end md:gap-4">
          {/* Left */}
          <div className="flex flex-col gap-1 text-foreground">
            <p className="text-base sm:text-lg">You Have</p>

            <p className="text-32 font-semibold md:text-4xl xl:text-[44px]">
              {points} Loyalty Point{points !== 1 ? 's' : ''}
            </p>

            {expiryText && (
              <p className="text-base text-muted-foreground sm:text-lg">
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
              <p className="text-base text-muted-foreground lg:text-lg">
                {nextTierText}
              </p>
            )}
          </div>
        </div>

        <AppButton
          variant="solid"
          size="md"
          radius="full"
          onClick={onAddMore}
          className="mt-0 w-full font-semibold sm:mt-8.5 sm:w-auto sm:text-sm"
        >
          Add More Point
        </AppButton>
      </div>
    </div>
  );
};

export default LoyaltySummaryHeader;
