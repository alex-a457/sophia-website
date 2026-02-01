import { CiStar } from 'react-icons/ci';
import { TiStarFullOutline } from 'react-icons/ti';

type RatingStarsProps = {
  rating: number;
};

const RatingStars = ({ rating }: RatingStarsProps) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <TiStarFullOutline
            key={index}
            className="h-[1.1rem] w-[1.1rem] text-foreground"
          />
        ) : (
          <CiStar
            key={index}
            className="h-[1.1rem] w-[1.1rem] text-foreground"
          />
        ),
      )}
    </div>
  );
};

export default RatingStars;
