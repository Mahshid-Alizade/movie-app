import React from "react";
import Score from "./Score";

export default function HeroMovieDetailsCard(params) {
  return (
    <div className="flex flex-col gap-8 items-start ">
      {/* title */}
      <div>
        <h2 className="text-3xl font-semibold">Brothers</h2>
      </div>
      {/* details */}
      <div className="text-[#dbdbdb]">
        <div>
          <span>2026</span> | <Score score={7.9} company={"IMDb"} />
        </div>
        <span>subtitle</span> | <span>genre</span>
      </div>
      {/* summary */}
      <div className="text-[#c4c4c4]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        necessitatibus consectetur est corporis sunt dolores laboriosam dicta
        quo, nam cumque vitae libero saepe veniam tempore asperiores molestiae,
        dignissimos accusantium dolorem quasi! Quo dolores, dolorum voluptatem
        minima earum necessitatibus fuga impedit cum nihil mollitia similique
        recusandae saepe eius quasi qui cumque!
      </div>
      <button className="text-[#dbdbdb]">details and watch ...</button>
    </div>
  );
}
