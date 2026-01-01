import React from "react";
import { CiStar } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";

const RatingStars = (data: any) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) =>
        index < data.rating ? (
          <TiStarFullOutline
            key={index}
            className="w-[1.1rem] h-[1.1rem] text-black"
          />
        ) : (
          <CiStar key={index} className="w-[1.1rem] h-[1.1rem] text-black" />
        ),
      )}
    </div>
  );
};

export default RatingStars;
