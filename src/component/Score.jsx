import React from "react";

export default function Score({ score, company }) {
  return (
    <span>
      <span className="font-bold text-[#e1bf77]">{company}</span>{" "}
      <span className="font-bold fo">{score}</span>
      <span className="text-xs">/10</span>
    </span>
  );
}
