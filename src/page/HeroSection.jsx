import React from "react";
import HeroMovieDetailsCard from "../component/HeroMovieDetailsCard";
import monsterWallpaper from "../assets/Monster-Wallpaper-v4.jpg";
import HeroMovieCard from "../component/HeroMovieCard";
import { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/api";

export default function HeroSection() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    setTrendingMovies(getTrendingMovies());
  }, []);

  return (
    <div
      className="grid grid-cols-3 py-36 pr-16 text-white bg-cover bg-center bg-no-repeat gap-16"
      style={{ backgroundImage: `url(${monsterWallpaper})` }}
    >
      {/* hero section banners */}
      <section className="col-span-2 flex items-center justify-end gap-6 overflow-hidden mask-[linear-gradient(to_right,transparent_0%,black_15%,black_100%)]">
        <HeroMovieCard
          url={monsterWallpaper}
          score={6.9}
          year={2025}
          type={"Series"}
        />
        <HeroMovieCard
          url={monsterWallpaper}
          score={6.9}
          year={2025}
          type={"Series"}
        />
        <HeroMovieCard
          url={monsterWallpaper}
          score={6.9}
          year={2025}
          type={"Series"}
        />
        <HeroMovieCard
          url={monsterWallpaper}
          score={6.9}
          year={2025}
          type={"Series"}
        />
        <HeroMovieCard
          url={monsterWallpaper}
          score={6.9}
          year={2025}
          type={"Series"}
        />
      </section>

      {/* banner titles */}
      <HeroMovieDetailsCard />
    </div>
  );
}
