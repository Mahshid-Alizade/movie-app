import React from "react";
import MovieDetailsCard from "../component/MovieDetailsCard";
import monsterWallpaper from "../assets/Monster-Wallpaper-v4.jpg";

export default function HeroSection() {
  return (
    <div
      className="grid grid-cols-3 py-36 pr-16 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${monsterWallpaper})` }}
    >
      {/* hero section banners */}
      <section className="col-span-2">Banners</section>
      {/* banner titles */}
      <MovieDetailsCard />
    </div>
  );
}
