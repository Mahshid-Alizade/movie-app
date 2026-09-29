import React from "react";
import monsterWallpaper from "../assets/Monster-Wallpaper-v4.jpg";
import Score from "./Score";

export default function HeroMovieCard({ url, score, year, type }) {
  return (
    <div
      className="flex flex-col justify-end p-4 w-1/5 h-1/2 rounded-md bg-cover bg-center bg-no-repeat content"
      style={{ backgroundImage: `url(${url})` }}
    >
      <h2 className="font-bold text-[#e1bf77]">Brothers</h2>
      <p className="flex gap-1 text-xs">
        <Score score={score} company={""} />|<span>{year}</span>|
        <span>{type}</span>
      </p>
    </div>
  );
}
