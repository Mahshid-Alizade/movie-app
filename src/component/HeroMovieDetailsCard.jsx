import React from "react";
import Score from "./Score";

export default function HeroMovieDetailsCard({
  title,
  score,
  year,
  genre,
  details,
}) {
  return (
    <div className="h-[300px] flex flex-col gap-4 justify-items-start h-[70%]">
      {/* title */}
      <div>
        <h2 className="text-3xl font-semibold">{title}</h2>
      </div>
      {/* details */}
      <div className="text-[#dbdbdb]">
        <div>
          <span>{year}</span> | <Score score={score} company={"IMDb"} />
        </div>
        <span>{genre}</span>
      </div>
      {/* summary */}
      <div className="text-[#c4c4c4] line-clamp-4">{details}</div>
      <button className="text-[#dbdbdb] text-left mt-auto">
        details and watch
      </button>
    </div>
  );
}
