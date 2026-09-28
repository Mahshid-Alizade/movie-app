import React from "react";

export default function MovieDetailsCard(params) {
  return (
    <div className="flex flex-col gap-8 items-start ">
      {/* title */}
      <div>
        <h2 className="text-3xl font-semibold">Brothers</h2>
      </div>
      {/* details */}
      <div>
        <div>
          <span>2026</span> |{" "}
          <span>
            <span className="font-bold text-[rgba(255,196,0,0.833)]">IMDb</span>{" "}
            <span className="font-bold fo">7.9</span>
            <span className="text-xs">/10</span>
          </span>
        </div>
        <span>subtitle</span> | <span>genre</span>
      </div>
      {/* summary */}
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
        necessitatibus consectetur est corporis sunt dolores laboriosam dicta
        quo, nam cumque vitae libero saepe veniam tempore asperiores molestiae,
        dignissimos accusantium dolorem quasi! Quo dolores, dolorum voluptatem
        minima earum necessitatibus fuga impedit cum nihil mollitia similique
        recusandae saepe eius quasi qui cumque!
      </div>
      <button>details and watch ...</button>
    </div>
  );
}
