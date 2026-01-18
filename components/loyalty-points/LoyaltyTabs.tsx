'use client'

import { memo } from 'react'
import { AppButton } from '../ui/AppButton'

export type TabType = 'all' | 'earnings' | 'deductions'

interface LoyaltyTabsProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

const TABS = [
  { id: 'all' as const, label: 'All History' },
  { id: 'earnings' as const, label: 'Earnings' },
  { id: 'deductions' as const, label: 'Deductions' },
]

const LoyaltyTabs = ({ activeTab, onTabChange }: LoyaltyTabsProps) => {
  return (
    <div className="flex gap-6">
      {TABS.map(tab => (
        <AppButton
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          variant={`${activeTab === tab.id ? 'solid' : 'outline'}`}
          radius="full"
          fullWidth
          tone={`${activeTab === tab.id ? 'dark' : 'muted'}`}
        >
          {tab.label}
        </AppButton>
      ))}
    </div>
  )
}

export default memo(LoyaltyTabs)