const API_KEY = "375292d7d2e446723f8108034727febd";
const BASE_URL = "https://api.themoviedb.org/3/";

import React from 'react'

export const getTrendingMovies = async () => {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data.results);
    return (data.results);
}
