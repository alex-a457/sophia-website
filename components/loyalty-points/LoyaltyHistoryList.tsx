'use client';

import React, { memo } from 'react';
import LoyaltyPointsCard from './LoyaltyPointsCard';

interface LoyaltyTransaction {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  date: string;
  points: string;
}

interface LoyaltyHistoryListProps {
  transactions: LoyaltyTransaction[];
  isLoading?: boolean;
  emptyMessage?: string;
}

const LoyaltyHistoryList = ({
  transactions,
  isLoading = false,
  emptyMessage = 'No transactions found',
}: LoyaltyHistoryListProps) => {
  if (isLoading) {
    return <div className="py-8 text-center">Loading...</div>;
  }

  if (transactions.length === 0) {
    return <div className="py-8 text-center text-gray-500">{emptyMessage}</div>;
  }

  return (
    <div className="space-y-6">
      {transactions.map((transaction) => (
        <React.Fragment key={transaction.id}>
          <LoyaltyPointsCard productInfo={transaction} />
          <div className="h-px border-b border-[#E5E5E5]" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default memo(LoyaltyHistoryList);
