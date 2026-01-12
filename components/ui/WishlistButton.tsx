import { cn } from "@/lib/utils";
import { AppButton } from "./AppButton";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

type WishlistButtonProps = {
  isActive:boolean
  onToggle?: () => void
  className?:string
}


export default function WishlistButton({isActive ,onToggle,className}:WishlistButtonProps){
  return <AppButton
   type="button"
   variant="glass"
   iconOnly
   tone="light"
   radius='full'
   onPress={onToggle}
   aria-label={`${isActive ? "Wishlist is Active" :"Wishlist is Inactive"}`}
   className={cn(
   "absolute  right-3 top-3 h-12 w-12 min-w-0 p-0 shadow-sm border-[#AEAEAE]", 
   isActive ? "text-[#EA4335]" : "text-[#AEAEAE]",
   className
      )}
      >
 {isActive ? <IoHeart size={24}/> : <IoHeartOutline size={24}/>}
  </AppButton>
}