import React from "react";
import HeroMovieDetailsCard from "../component/HeroMovieDetailsCard";
import monsterWallpaper from "../assets/Monster-Wallpaper-v4.jpg";
import HeroMovieCard from "../component/HeroMovieCard";
import { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/api";

export default function HeroSection() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeMovieIndex, setActiveMovieIndex] = useState(2);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies.slice(0, 5));
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMovieIndex((prev) => (prev < 4 ? prev + 1 : 0));
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="grid grid-cols-3 py-36 pr-16 text-white bg-cover bg-center bg-no-repeat gap-16 min-h-screen"
      style={{ backgroundImage: `url(${monsterWallpaper})` }}
    >
      {/* banner slider */}
      <div className="col-span-2 flex items-center overflow-x-auto scrollbar-none mask-[linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        {/* group */}
        <div className="flex h-1/2 w-max animate-slide gap-5">
          <div className="flex shrink-0 gap-5">
            {trendingMovies.map((movie) => (
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
            {trendingMovies.map((movie) => (
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
      <div className="col-span-1 flex items-center ">
        {trendingMovies[activeMovieIndex] && (
          <HeroMovieDetailsCard
            title={trendingMovies[activeMovieIndex].title}
            score={trendingMovies[activeMovieIndex].vote_average.toFixed(1)}
            year={trendingMovies[activeMovieIndex].release_date.split("-")[0]}
            genre={"action"}
            details={trendingMovies[activeMovieIndex].overview}
          />
        )}
      </div>
    </div>
  );
}
