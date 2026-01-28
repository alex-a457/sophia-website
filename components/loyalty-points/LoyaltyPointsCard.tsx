import AppImage from '../shared/AppImage';

interface ProductInfoProps {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  date: string;
  points: string;
}

const formatDate = (d: Date | string) =>
  new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(d));

const LoyaltyPointsCard = ({
  productInfo,
}: {
  productInfo: ProductInfoProps;
}) => {
  return (
    <div className="w-full max-w-[884px]">
      {/* DESKTOP & TABLET: Horizontal layout (above 639px) */}
      <div className="flex items-start gap-4 sm:hidden lg:gap-5">
        {/* Image */}
        <div className="w-[140px] shrink-0">
          <AppImage
            src="/productDemo/loyaltyImg1.svg"
            alt="Product"
            aspectRatio={1}
            className={{
              wrapperClass: 'w-full rounded-2xl',
              imageClass: 'scale-[1.5] rounded-2xl object-cover',
            }}
          />
        </div>

        {/* Content - grows to fill */}
        <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch">
          <div className="flex flex-col gap-3 sm:gap-1">
            <h2 className="text-2xl leading-tight font-semibold text-foreground md:text-xl">
              {productInfo.title}
            </h2>

            <p className="text-lg leading-relaxed text-foreground md:text-sm">
              {productInfo.description}
            </p>
          </div>

          <p className="text-lg text-foreground md:text-sm">
            {formatDate(productInfo.date)}
          </p>
        </div>

        {/* Points - fixed width, top aligned */}
        <div className="flex w-[75px] shrink-0 flex-col items-end gap-2">
          <p className="text-right text-base text-foreground md:text-sm">
            Total Point
          </p>

          <p className="text-[28px] font-semibold text-foreground md:text-xl">
            +{productInfo.points}
          </p>
        </div>
      </div>

      {/* MOBILE: Different layout (≤639px) */}
      <div className="hidden flex-col sm:flex">
        {/* Image + Content Row */}
        <div className="flex items-start gap-5">
          <div className="w-[118px] shrink-0">
            <AppImage
              src="/productDemo/loyaltyImg1.svg"
              alt="Product"
              aspectRatio={1}
              className={{
                wrapperClass: 'w-full rounded-2xl',
                imageClass: 'scale-[1.5] rounded-2xl object-cover',
              }}
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="mb-2 flex flex-col gap-1">
              <h2 className="text-xl leading-tight font-semibold text-foreground">
                {productInfo.title}
              </h2>

              <p className="text-sm leading-relaxed text-foreground">
                {productInfo.description}
              </p>
            </div>

            <p className="text-sm text-foreground">
              {formatDate(productInfo.date)}
            </p>

            {/* Points Section - Separate row below */}
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-foreground">Total Points</p>
              <p className="text-xl font-semibold text-foreground">
                +{productInfo.points}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyPointsCard;
