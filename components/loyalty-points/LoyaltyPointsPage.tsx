'use client'

import { useState } from "react"
import LoyaltySummaryHeader from "./LoyaltySummaryHeader"
import LoyaltyTabs, { TabType } from "./LoyaltyTabs"
import LoyaltyHistoryList from "./LoyaltyHistoryList"

const data = [
  {
  id:1,
  title:"Drop Sapphire Pedant",
  imageSrc:"/productDemo/loyaltyImg1.svg",
  description:"Thank you for your feedback on the product you purchased!",
  date:"2025-12-12T00:00:00.000Z",
  points:"500"
},
{
  id:2,
  title:"Drop Sapphire Pedant",
  imageSrc:"/productDemo/loyaltyImg1.svg",
  description:"Thank you for your feedback on the product you purchased!",
  date:"2025-12-12T00:00:00.000Z",
  points:"500"
},
{
  id:3,
  title:"Drop Sapphire Pedant",
  imageSrc:"/productDemo/loyaltyImg1.svg",
  description:"Thank you for your feedback on the product you purchased!",
  date:"2025-12-12T00:00:00.000Z",
  points:"500"
},
{
  id:4,
  title:"Drop Sapphire Pedant",
  imageSrc:"/productDemo/loyaltyImg1.svg",
  description:"Thank you for your feedback on the product you purchased!",
  date:"2025-12-12T00:00:00.000Z",
  points:"500"
},
{
  id:5,
  title:"Drop Sapphire Pedant",
  imageSrc:"/productDemo/loyaltyImg1.svg",
  description:"Thank you for your feedback on the product you purchased!",
  date:"2025-12-12T00:00:00.000Z",
  points:"500"
},
{
  id:6,
  title:"Drop Sapphire Pedant",
  imageSrc:"/productDemo/loyaltyImg1.svg",
  description:"Thank you for your feedback on the product you purchased!",
  date:"2025-12-12T00:00:00.000Z",
  points:"500"
},
{  id:7,
  title:"Drop Sapphire Pedant",
  imageSrc:"/productDemo/loyaltyImg1.svg",
  description:"Thank you for your feedback on the product you purchased!",
  date:"2025-12-12T00:00:00.000Z",
  points:"500"
},
{  id:8,
  title:"Drop Sapphire Pedant",
  imageSrc:"/productDemo/loyaltyImg1.svg",
  description:"Thank you for your feedback on the product you purchased!",
  date:"2025-12-12T00:00:00.000Z",
  points:"500"
}
]

const LoyalityPointsPage = () => {
const [active,setAcitve]  = useState<TabType>('all')

  return (
    <div className="flex flex-col gap-13.5 px-20 mt-9 xl:px-16 lg:mt-8 md:px-6 xs:px-4">
      <div className="flex flex-col gap-8.5">
<LoyaltySummaryHeader
  points={1200}
  expiryPoints={1200}
  expiryDate="2025-12-12T00:00:00.000Z"
  tierLabel="Gold"
  tierBg="#FFCE49"
  pointsToNextTier={1200}
  nextTierLabel="Diamond"
  onAddMore={() => {}}
/>
<LoyaltyTabs activeTab={active} onTabChange={setAcitve}/>

  </div>

<LoyaltyHistoryList transactions={data}/>

    </div>
  )
}

export default LoyalityPointsPage
