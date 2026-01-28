import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import { AppButton } from '../shared/AppButton';

type WishlistButtonProps = {
  isActive: boolean;
  onToggle?: () => void;
  className?: string;
};

export default function WishlistButton({
  isActive,
  onToggle,
  className,
}: WishlistButtonProps) {
  return (
    <AppButton
      type="button"
      variant="glass"
      iconOnly
      tone="light"
      radius="full"
      onClick={onToggle}
      aria-label={`${isActive ? 'Wishlist is Active' : 'Wishlist is Inactive'}`}
      className={cn(
        'absolute top-3 right-3 z-10 h-12 w-12 min-w-0 border-[#AEAEAE] p-0 shadow-sm md:top-2 md:right-2 md:h-10 md:w-10',
        isActive ? 'text-[#EA4335]' : 'text-[#AEAEAE]',
        className,
      )}
    >
      {isActive ? <IoHeart size={24} /> : <IoHeartOutline size={24} />}
    </AppButton>
  );
}
