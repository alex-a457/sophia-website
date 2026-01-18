'use client'

import { memo } from 'react'
import LoyaltyPointsCard from './LoyaltyPointsCard'

interface LoyaltyHistoryListProps {
  transactions: any[]
  isLoading?: boolean
  emptyMessage?: string
}

const LoyaltyHistoryList = ({ 
  transactions, 
  isLoading = false,
  emptyMessage = "No transactions found"
}: LoyaltyHistoryListProps) => {
  
  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>
  }

  if (transactions.length === 0) {
    return <div className="text-center py-8 text-gray-500">{emptyMessage}</div>
  }

  return (
    <div className="space-y-6">
      {transactions.map(transaction => (
        <>
        <LoyaltyPointsCard 
          key={transaction.id}
          productInfo={transaction}
        />
        <div className="h-[1px] border-b border-[#E5E5E5]"/>
        </>
      ))}
    </div>
  )
}

export default memo(LoyaltyHistoryList)