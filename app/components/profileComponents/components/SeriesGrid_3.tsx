"use client"
import { useEffect, useState } from "react";
import { FrontendApiHelper } from "@/app/utils/frontendApiHelper";




import SeriesCard from "./CardCompact";
import { getRegion } from "@/app/utils/getRegion";




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

  interface SeriesGridProps {
  moodId: string;
  showSecondaryFilter: boolean;
}


export interface SeriesDetails {
  id: number;
  title: string;
  description: string;
  image: string;
  backdrop: string;
  release_date: string;
  release_year: string;
  runtime: number;
  rating: number;
  percentage: number;
  genres: string[];

  top_cast: {
    id: number;
    name: string;
    character: string;
    image: string;
  }[];

  certification: string;
}





  const genreMap: Record<number, string> = {
    10759: "Action & Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "Kids",
    9648: "Mystery",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
    37: "Western",
  };




const moviePlatforms = [
    { name: "Netflix", img: "/assets/netflix.png" },
    { name: "Prime Video", img: "/assets/prime.png" },
    { name: "Disney+", img: "/assets/disney.png" },
    { name: "Apple TV+", img: "/assets/apple.png" },
    { name: "HBO Max", img: "/assets/hbo.png" }
];

export function SeriesGrid({ moodId,showSecondaryFilter }: SeriesGridProps) {







    const [Seriess, setSeries] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const [buttonLoading, setButtonLoading] = useState(false);

  const [page, setPage] = useState(1); // page for Show More
  const [hasMore, setHasMore] = useState(true);

   const [selectedSeriesDetails, setSelectedSeriesDetails] =
    useState<SeriesDetails | null>(null);
  
  
  // check if more movies available



 const getSeries = async (pageNumber = 1) => {
   setLoading(true); // loading start
   try {
     // URL Build  debug log
     let url = "";
 
     if (!moodId || moodId === "") {
       // Home page call
       url = `/home?page=${pageNumber}`;
     } else {
       // Mood-specific call
       url = `/moods/${moodId}/series?page=${pageNumber}`;
     }
 
     // Debug: final URL
     const finalUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`;
     console.log("Calling API URL:", finalUrl);
 
     // API call
     const data = await FrontendApiHelper(url);
 
     if (!data) {
       console.warn("API returned null or undefined!");
       setHasMore(false);
       setSeries([]);
       return;
     }
 
     console.log("Raw API Response:", data);
 
     //  Mood API return array directly or data.movies
     const seriesList: any[] = Array.isArray(data)
       ? data
       : data.movies || data.popularSeries || [];
 
     console.log("Parsed seriesList:", seriesList);
 
     if (!seriesList.length) {
       setHasMore(false);
       setSeries([]);
       return;
     }
 
     // Map API data to Movie interface
     const mapped: Movie[] = seriesList.map((m: any) => ({
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
       setSeries(mapped);
     } else {
       setSeries(mapped);
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


 
 const getSeriesDetails = async (id: number) => {
     try {
     const region = getRegion(); // automatically detect region
 
      console.log("Detected region:", region);
     const res = await FrontendApiHelper(`/details/series/${id}?type=1`);
       if (res && res.success) {
         setSelectedSeriesDetails(res.data); //  set state to send to Card
         return res.data;
       }
     } catch (err) {
       console.error("series details fetch error:", err);
     }
     return null;
   };





   //  initial load
  useEffect(() => {
    getSeries(1);
  }, []);

  //  mood change
  useEffect(() => {
    if (!moodId) return;
    setPage(1);
    getSeries(1);
  }, [moodId]);

  const handleShowMore = async () => {
    setButtonLoading(true);
    const nextPage = page + 1;
    setPage(nextPage);
    await getSeries(nextPage);
    setButtonLoading(false);
  };

  if (loading && Seriess.length === 0) return <p>Loading series...</p>;
  if (!loading && !Seriess.length) return <p>No series found</p>;
  //if mood  change ? than  fetch 
  

  if (!Seriess.length) {
    return <p className="text-white text-center py-4">No series found</p>;
  }









    return (
        <div className="min-[769px]:px-12 px-4">
            <h3 className="cards_section_title_compact_2 pt-0">Series</h3>

             {/* secondary filters */}
      {showSecondaryFilter && (


          
            <div>
                <div className="movie_reset_2_div">
                    <p className="movie_reset_2_text">Genres (Choose a Genre)</p>
                    <button className="series_reset_2_btn">Reset All</button>
                </div>
                {/* series filter */}
                <div className="filter2_option_movies_div pb-2 md:mb-3 mb-2 pt-0 min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr">
                    {["Crime", "Comedy", "Drama", "Fantasy", "Reality", "Documentary", "Mystery"].map(
                        (genre, index) => {
                            const id = `series${index + 1}`;
                            return (
                                <div key={id} className="flex-shrink-0 min-[769px]:flex-shrink min-[769px]:min-w-0">
                                    <input
                                        id={id}
                                        type="checkbox"
                                        name="series_options"
                                        value={id}
                                        className="series-checkbox"
                                    />
                                    <label htmlFor={id} className="filter2_option_book_div">
                                        <h5 className="filter2_option_title">{genre}</h5>
                                    </label>
                                </div>
                            );
                        }
                    )}
                </div>
                <div className="movie_reset_2_div">
                    <p className="movie_reset_2_text">Platform (Select your services)</p>
                    <button className="series_reset_2_btn">Reset All</button>
                </div>
                {/* platform filter */}
                <div className="filter2_movies_platform_div pb-2 mb-4 gap-2.5 flex min-[769px]:flex-wrap pt-0 min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr">
                    {moviePlatforms.map((platform, index) => {
                        const id = `series_platform${index + 1}`;
                        return (
                            <div key={id} className="flex-shrink-0 min-[769px]:flex-shrink min-[769px]:min-w-0">
                                <input
                                    id={id}
                                    type="checkbox"
                                    name="movie_platform"
                                    value={platform.name}
                                    className="series-platform-checkbox"
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
            </div>

             )}

            {/* series Cards */}
            <div className="pb-4">
                <div
                    className="cards_grid_section_compact min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr pb-2"
                >
                    {Seriess.map((series, index) => (
                        <div className="min-w-[207px] flex-shrink-0 md:flex-shrink min-[769px]:min-w-0" key={index}>

                          
                            <SeriesCard 
                            
                            
                            
                             key={series.id}
  item={series}
  type="series"
  details={
    selectedSeriesDetails?.id === series.id
      ? selectedSeriesDetails
      : null
  }
  onClick={() => getSeriesDetails(series.id!)}
                            
                            
                            />
                        </div>
                    ))}
                </div>
            </div>

           {/* Show More Button */}
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

//export default dummySeries;