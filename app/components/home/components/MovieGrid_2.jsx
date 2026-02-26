import Image from "next/image";
import MovieCard from "./Card";
import shuffle from "@/public/assets/shuffle.png";
import magic from "@/public/assets/magic.png";
import not_found_movie from "@/public/assets/not_found_movie.svg";

const dummyMovies = [
    {
        title: "The Dark Knight",
        year: "2008",
        genres: ["Action", "Crime", "Sci-Fi", "Adventure"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/movie1.png",
    },
    {
        //  "Space Sci-Fic", "Super Hero", "Time Travel", "Adventure"
        title: "Avengers: Endgame",
        year: "2019",
        genres: ["Action", "Sci-Fi",],
        rating: 8.6,
        description: "Earth's mightiest heroes unite to fight...",
        image: "/assets/movie2.png",
    },
    {
        title: "Interstellar",
        year: "2014",
        genres: ["Sci-Fi"],
        rating: 8.6,
        description: "A journey through space and time...",
        image: "/assets/movie4.png",
    },
    {
        title: "The Shawshank Redemption",
        year: "1994",
        genres: ["Drama", "Adventure"],
        rating: 9.3,
        description: "A story of hope and friendship with...",
        image: "/assets/movie3.png",
    },
    {
        id: 5,
        title: "Inception",
        year: 2010,
        rating: 8.9,
        image: "/assets/movie5.png",
        genres: ["Action", "Sci-Fi"],
        description: "A thief who steals corporate secrets through dream-sharing...",
    },
    {
        id: 6,
        title: "Gladiator",
        year: 2000,
        rating: 8.5,
        image: "/assets/movie6.png",
        genres: ["Action", "Drama"],
        description: "A Roman general seeks vengeance after betrayal...",
    },
    {
        title: "The Dark Knight",
        year: "2008",
        genres: ["Action", "Crime"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/movie1.png",
    },
    {
        title: "Interstellar",
        year: "2014",
        genres: ["Adventure", "Drama", "Sci-Fi"],
        rating: 8.6,
        description: "A journey through space and time...",
        image: "/assets/movie4.png",
    },
];

const moviePlatforms = [
    { name: "Netflix", img: "/assets/netflix.png" },
    { name: "Prime Video", img: "/assets/prime.png" },
    { name: "Disney+", img: "/assets/disney.png" },
    { name: "Apple TV+", img: "/assets/apple.png" },
    { name: "HBO Max", img: "/assets/hbo.png" }
];

export function MovieGrid() {
    return (
        <div className="min-[769px]:px-12 px-4">
            <h3 className="cards_section_title_compact_2">Movie</h3>
            {/* compact filter */}
            <div>
                {/* btn div */}
                <div className="filter_btn_div_flex_compact_2">
                    {/* Random Pick */}
                    <div className=''>
                        <input
                            type="radio"
                            id="random_movies"
                            name="filter"
                            value="random"
                            className="hidden peer random"
                            defaultChecked
                        />
                        <label
                            htmlFor="random_movies"
                            className="py-3 md:px-6 px-3 rounded-[10px] flex gap-2.5 items-center text-white font-medium w-full md:w-auto md:mb-0 justify-center cursor-pointer border-1 border-[#444444] hover:bg-transparent"
                        >
                            <Image src={shuffle} alt="shuffle" className="h-4 w-4" />
                            <span>Random Pick</span>
                        </label>
                    </div>

                    {/* Get My Picks */}
                    <div>
                        <input
                            type="radio"
                            id="mypicks_movie"
                            name="filter"
                            value="mypick"
                            className="hidden peer mypick"
                        />
                        <label
                            htmlFor="mypicks_movie"
                            className="py-3 md:px-6 px-3 rounded-[10px] flex gap-2.5 items-center text-white font-medium w-full md:w-auto md:mb-0 justify-center cursor-pointer border-1 border-[#444444] hover:bg-transparent"
                        >
                            <Image src={magic} alt="magic" className="h-4 w-4" />
                            <span>Get My Picks</span>
                        </label>
                    </div>
                </div>
                <div className="movie_reset_2_div">
                    <p className="movie_reset_2_text">Mood (Choose a Mood)</p>
                    <button className="movie_reset_2_btn">Reset All</button>
                </div>
                {/* Mood filter */}
                <div className="filter2_option_movies_div pb-2 md:mb-3 mb-2 pt-0 min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr">
                    {[
                        "Feel-Good",
                        "Thrilling",
                        "Romantic",
                        "Chill",
                        "Mind-Bending",
                        "Epic",
                        "Funny",
                        "Heartwarming",
                        "Inspiring",
                    ].map((genre, index) => {
                        const id = `mood${index + 1}`;
                        return (
                            <div key={id} className="flex-shrink-0 min-[769px]:flex-shrink min-[769px]:min-w-0">
                                <input
                                    id={id}
                                    type="radio"
                                    name="mood_options"
                                    value={id}
                                    className="game-checkbox"
                                />
                                <label htmlFor={id} className="filter2_option_book_div">
                                    <h5 className="filter2_option_title">{genre}</h5>
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div className="movie_reset_2_div">
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
                <p className="card_pass_message hidden">Click pass to remove already watched/unwanted items</p>
            </div>

            {/* Responsive Container */}
            <div className="pb-4 hidden">
                <div
                    className="cards_grid_section_compact min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr pb-2"
                >
                    {dummyMovies.map((movie, index) => (
                        <div className="min-w-[207px] flex-shrink-0 md:flex-shrink min-[769px]:min-w-0" key={index}>
                            <MovieCard item={movie} type="movie" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Show More Button */}
            <div className="item_center md:mb-12 mb-2 hidden">
                <button className="movie_show_more_btn">
                    Show More
                </button>
            </div>
            {/* not found div */}
            <div className="not_found_div">
                <div className="item_center">
                    <Image src={not_found_movie} alt="not_found_movie" />
                </div>
                <h2 className="not_found_text">Ups!... no results found!</h2>
                <p className="not_found_text_sm">Please try a different mood or genre</p>
            </div>
        </div>
    );
}

export default dummyMovies;