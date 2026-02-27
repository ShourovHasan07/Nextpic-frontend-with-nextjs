"use client"; // must for useEffect and useState

import { useEffect, useState } from "react";
import { FrontendApiHelper } from "@/app/utils/frontendApiHelper";
import MovieCard from "./Card";

// Movie interface
export interface Movie {
  id?: number;
  title: string;
  year: string | number;
  genres: string[];
  rating: number;
  description: string;
  image: string;
}


// TMDb genre mapping
const genreMap: Record<number, string> = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};





// MovieGrid Component
export function MovieGrid() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1); // page for Show More
  const [hasMore, setHasMore] = useState(true); // check if more movies available



  const getMovies = async (pageNumber = 1) => {
    try {
      const data = await FrontendApiHelper(`/home?page=${pageNumber}`);
      if (!data?.popularMovies || data.popularMovies.length === 0) {
        setHasMore(false);
        return;
      }

      const mappedMovies: Movie[] = data.popularMovies.map((m: any) => ({
        id: m.id,
        title: m.title,
        year: m.release_date?.split("-")[0] || "Unknown",
        rating: m.vote_average,
        description: m.overview,
        image: m.poster_path
          ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
          : "/assets/default.png",
        genres: (m.genre_ids || []).map((id: number) => genreMap[id] || "Unknown"),
      }));

      // append new movies
      setMovies((prev) => [...prev, ...mappedMovies]);

      // check if next page exists
      if (mappedMovies.length < 8) setHasMore(false);
    } catch (error) {
      console.error("Fetch error:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // initial fetch
  useEffect(() => {
    getMovies();
  }, []);

  const handleShowMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    getMovies(nextPage);
  };

  if (loading && movies.length === 0) {
    return <p className="text-white text-center py-4">Loading movies...</p>;
  }

  if (!movies.length) {
    return <p className="text-white text-center py-4">No movies found</p>;
  }
  return (
    <div className="min-[769px]:px-12 px-4">
      <h3 className="cards_section_title">Movie</h3>

      {/* Responsive Container */}
      <div className="pb-6">
        <div className="cards_grid_section min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr">
          {movies.map((movie, index) => (
            <div
              className="min-w-[207px] flex-shrink-0 md:flex-shrink min-[769px]:min-w-0"
              key={movie.id ?? index}
            >
              <MovieCard item={movie} type="movie" />
            </div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      {hasMore && (
        <div className="item_center min-[769px]:mb-12 mb-2">
          <button className="movie_show_more_btn" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
}