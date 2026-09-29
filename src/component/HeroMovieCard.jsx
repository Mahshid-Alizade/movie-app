import React from "react";
import monsterWallpaper from "../assets/Monster-Wallpaper-v4.jpg";
import Score from "./Score";

export default function HeroMovieCard({ url, score, year, type }) {
  return (
    <div
      className="overflow-hidden relative flex flex-col justify-end p-4 w-1/5 h-1/2 rounded-md bg-cover bg-center bg-no-repeat content group"
      style={{ backgroundImage: `url(${url})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="font-bold text-[#e1bf77]">Brothers</h2>
        <p className="flex gap-1 text-xs">
          <Score score={score} company={""} />|<span>{year}</span>|
          <span>{type}</span>
        </p>
      </div>
    </div>
  );
}
