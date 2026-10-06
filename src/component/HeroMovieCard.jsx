import React from "react";
import monsterWallpaper from "../assets/Monster-Wallpaper-v4.jpg";
import Score from "./Score";

export default function HeroMovieCard({ title, url, score, year, type }) {
  return (
    <div className="relative overflow-hidden flex flex-col w-[140px] justify-end p-2 rounded-md bg-cover bg-center bg-no-repeat content group">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${url})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="font-bold text-[#e1bf77]">{title}</h2>

        <p className="flex gap-1 text-xs">
          <Score score={score} company={""} />|<span>{year}</span>|
          <span>{type}</span>
        </p>
      </div>
    </div>
  );
}
