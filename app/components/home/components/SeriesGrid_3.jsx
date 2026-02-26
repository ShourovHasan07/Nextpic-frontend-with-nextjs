import SeriesCard from "./CardCompact";

const dummySeries = [
    {
        title: "Stranger Things",
        year: "2008",
        genres: ["Action", "Action"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series1.png",
    },
    {
        title: "Breaking Bad",
        year: "2008",
        genres: ["Action", "Action"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series2.png",
    },
    {
        title: "Game of Thrones",
        year: "2008",
        genres: ["Fantasy", "Drama"],
        rating: 9.2,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series3.png",
    },
    {
        title: "The Witcher",
        year: "2019",
        genres: ["Adventure", "Fantasy"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series4.png",
    },
    {
        title: "Peaky Blinders",
        year: "2008",
        genres: ["Action", "Action"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series5.png",
    },
    {
        title: "Money Heist",
        year: "2008",
        genres: ["Action", "Action"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series6.png",
    },
    {
        title: "Breaking Bad",
        year: "2008",
        genres: ["Action", "Drama"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series2.png",
    },
    {
        title: "The Witcher",
        year: "2019",
        genres: ["Adventure", "Fantasy"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series4.png",
    },
];

const moviePlatforms = [
    { name: "Netflix", img: "/assets/netflix.png" },
    { name: "Prime Video", img: "/assets/prime.png" },
    { name: "Disney+", img: "/assets/disney.png" },
    { name: "Apple TV+", img: "/assets/apple.png" },
    { name: "HBO Max", img: "/assets/hbo.png" }
];

export function SeriesGrid() {
    return (
        <div className="min-[769px]:px-12 px-4">
            <h3 className="cards_section_title_compact_2 pt-0">Series</h3>
            {/* compact filter */}
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

            {/* Responsive Container */}
            <div className="pb-4">
                <div
                    className="cards_grid_section_compact min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr pb-2"
                >
                    {dummySeries.map((series, index) => (
                        <div className="min-w-[207px] flex-shrink-0 md:flex-shrink min-[769px]:min-w-0" key={index}>
                            <SeriesCard item={series} type="series" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Show More Button */}
            <div className="item_center md:mb-12 mb-2">
                <button className="series_show_more_btn">
                    Show More
                </button>
            </div>
        </div>
    );
}

export default dummySeries;