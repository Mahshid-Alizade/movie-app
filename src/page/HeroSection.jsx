import React from "react";
import HeroMovieDetailsCard from "../component/HeroMovieDetailsCard";
import monsterWallpaper from "../assets/Monster-Wallpaper-v4.jpg";
import HeroMovieCard from "../component/HeroMovieCard";
import { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/api";

export default function HeroSection() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies.slice(0, 6));
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="grid grid-cols-3 py-36 pr-16 text-white bg-cover bg-center bg-no-repeat gap-16"
      style={{ backgroundImage: `url(${monsterWallpaper})` }}
    >
      <div className="col-span-2 flex items-center overflow-x-auto scrollbar-none mask-[linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        {/* group */}
        <div className="flex h-1/2 w-max animate-slide gap-5">
          <div className="flex shrink-0 gap-5">
            {trendingMovies.slice(0, 5).map((movie) => (
              <HeroMovieCard
                key={movie.id}
                title={movie.title}
                url={movie.poster_path}
                score={movie.vote_average.toFixed(1)}
                year={movie.release_date.split("-")[0]}
                type={movie.media_type}
              />
            ))}
          </div>
          <div className="flex shrink-0 gap-5" aria-hidden="true">
            {trendingMovies.slice(0, 5).map((movie) => (
              <HeroMovieCard
                key={movie.id}
                title={movie.title}
                url={movie.poster_path}
                score={movie.vote_average.toFixed(1)}
                year={movie.release_date.split("-")[0]}
                type={movie.media_type}
              />
            ))}
          </div>
        </div>
      </div>

      {/* banner titles */}
      <div className="col-span-1">
        <HeroMovieDetailsCard />
      </div>
    </div>
  );
}
