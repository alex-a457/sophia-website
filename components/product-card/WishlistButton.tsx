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
        'absolute top-1 right-1 z-10 h-8 w-8 border-input p-0 shadow-sm sm:top-3 sm:right-3 md:h-9 md:w-9 xl:h-12 xl:w-12',
        className,
      )}
    >
      {isActive ? (
        <IoHeart className="text-base text-destructive sm:text-base xl:text-xl" />
      ) : (
        <IoHeartOutline className="text-base text-muted-foreground sm:text-base xl:text-xl" />
      )}
    </AppButton>
  );
}
