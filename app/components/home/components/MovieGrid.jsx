import MovieCard from "./Card";

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

export function MovieGrid() {
    return (
        <div className="min-[769px]:px-12 px-4">
            <h3 className="cards_section_title">Movie</h3>

            {/* Responsive Container */}
            <div className="pb-6">
                <div
                    className="cards_grid_section min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr"
                >
                    {dummyMovies.map((movie, index) => (
                        <div className="min-w-[207px] flex-shrink-0 md:flex-shrink min-[769px]:min-w-0" key={index}>
                            <MovieCard item={movie} type="movie" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Show More Button */}
            <div className="item_center min-[769px]:mb-12 mb-2">
                <button className="movie_show_more_btn">
                    Show More
                </button>
            </div>
        </div>
    );
}

export default dummyMovies;