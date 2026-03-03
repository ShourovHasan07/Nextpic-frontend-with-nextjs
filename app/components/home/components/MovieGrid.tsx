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

interface MovieGridProps {
  moodId: string;

   showSecondaryFilter: boolean;

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



const moviePlatforms = [
    { name: "Netflix", img: "/assets/netflix.png" },
    { name: "Prime Video", img: "/assets/prime.png" },
    { name: "Disney+", img: "/assets/disney.png" },
    { name: "Apple TV+", img: "/assets/apple.png" },
    { name: "HBO Max", img: "/assets/hbo.png" }
];







// MovieGrid Component
export function MovieGrid ({ moodId, showSecondaryFilter }: MovieGridProps) {

  console.log("Mood ID:", moodId);
  console.log("Show Secondary Filter:", showSecondaryFilter);


  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const [page, setPage] = useState(1); // page for Show More
  const [hasMore, setHasMore] = useState(true); // check if more movies available
  


const getMovies = async (pageNumber = 1) => {
  setLoading(true); // loading start
  try {
    // URL Build  debug log
    let url = "";

    if (!moodId || moodId === "") {
      // Home page call
      url = `/home?page=${pageNumber}`;
    } else {
      // Mood-specific call
      url = `/moods/${moodId}/movies?page=${pageNumber}`;
    }

    // Debug: final URL
    const finalUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`;
    console.log("Calling API URL:", finalUrl);

    // API call
    const data = await FrontendApiHelper(url);

    if (!data) {
      console.warn("API returned null or undefined!");
      setHasMore(false);
      setMovies([]);
      return;
    }

    console.log("Raw API Response:", data);

    //  Mood API return array directly or data.movies
    const movieList: any[] = Array.isArray(data)
      ? data
      : data.movies || data.popularMovies || [];

    console.log("Parsed movieList:", movieList);

    if (!movieList.length) {
      setHasMore(false);
      setMovies([]);
      return;
    }

    // Map API data to Movie interface
    const mapped: Movie[] = movieList.map((m: any) => ({
      id: m.id,
      title: m.title,
      year: m.release_date?.split("-")[0] || "Unknown",
      rating: m.vote_average || 0,
      description: m.overview || "No description",
      image: m.poster_path
        ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
        : "/assets/default.png",
      genres: (m.genre_ids || []).map((id: number) => genreMap[id] || "Unknown"),
    }));

    // Pagination: first page replace, next pages append
    if (pageNumber === 1) {
      setMovies(mapped);
    } else {
      setMovies(mapped);
    }

    // Show More button logic: check if less than 8 items fetched → no more
    setHasMore(mapped.length === 8);

  } catch (err) {
    console.error("Fetch error:", err);
    setHasMore(false);
  } finally {
    setLoading(false); // loading end
  }
};
  //  initial load
  useEffect(() => {
    getMovies(1);
  }, []);

  //  mood change
  useEffect(() => {
    if (!moodId) return;
    setPage(1);
    getMovies(1);
  }, [moodId]);

  const handleShowMore = async () => {
    setButtonLoading(true);
    const nextPage = page + 1;
    setPage(nextPage);
    await getMovies(nextPage);
    setButtonLoading(false);
  };

  if (loading && movies.length === 0) return <p>Loading movies...</p>;
  if (!loading && !movies.length) return <p>No movies found</p>;
  //if mood  change ? than  fetch 


  

 

  if (!movies.length) {
    return <p className="text-white text-center py-4">No movies found</p>;
  }
  return (
    <div className="min-[769px]:px-12 px-4">
      <h3 className="cards_section_title">Movie</h3>

        {showSecondaryFilter &&

       <div    >
                <div  className="movie_reset_2_div">
                    <p className="movie_reset_2_text">Genres (Choose a Genre)</p>
                    <button className="movie_reset_2_btn">Reset All</button>
                </div>
                {/* movie filter */}
                <div className="filter2_option_movies_div pb-2 md:mb-3 mb-2 pt-0 min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr">
                    {[
                        "Action",
                        "Comedy",
                        "Drama",
                        "Horror",
                        "Romance",
                        "Thriller",
                        "Sci-Fi",
                        "Adventure",
                        "Mystery",
                        "Fantasy",
                        "Crime",
                        "Animated",
                        "Historical",
                    ].map((genre, index) => {
                        const id = `movie${index + 1}`;
                        return (
                            <div key={id} className="flex-shrink-0 min-[769px]:flex-shrink min-[769px]:min-w-0">
                                <input
                                    id={id}
                                    type="checkbox"
                                    name="movie_options"
                                    value={id}
                                    className="movie-checkbox"
                                />
                                <label htmlFor={id} className="filter2_option_book_div">
                                    <h5 className="filter2_option_title">{genre}</h5>
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div className="movie_reset_2_div">
                    <p className="movie_reset_2_text">Platform (Select your services)</p>
                    <button className="movie_reset_2_btn">Reset All</button>
                </div>
                {/* platform filter */}
                <div className="filter2_movies_platform_div pb-2 mb-4 gap-2.5 flex min-[769px]:flex-wrap pt-0 min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr">
                    {moviePlatforms.map((platform, index) => {
                        const id = `movie_platform${index + 1}`;
                        return (
                            <div key={id} className="flex-shrink-0 min-[769px]:flex-shrink min-[769px]:min-w-0">
                                <input
                                    id={id}
                                    type="checkbox"
                                    name="movie_platform"
                                    value={platform.name}
                                    className="movie-platform-checkbox"
                                />
                                <label htmlFor={id} className="filter2_platform_option_div_2">
                                    <div className="bg-white rounded-full p-2 h-[40px] w-[40px] mx-auto">
                                        <img
                                            src={platform.img}
                                            alt={platform.name}
                                            className="mx-auto w-[24px] h-[24px]"
                                        />
                                    </div>
                                </label>
                            </div>
                        );
                    })}
                </div>
                <p className="card_pass_message">Click pass to remove already watched/unwanted items</p>
            </div>}



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
          <button
           className="movie_show_more_btn"
            onClick={handleShowMore}

            disabled={buttonLoading}
          
          > Show More

    {buttonLoading ? (
        <>
          <span className="loading loading-spinner text-secondary"></span>
        
        </>
      ) : (
        ""
      )}
          </button>
        </div>
      )}
    </div>
  );
}