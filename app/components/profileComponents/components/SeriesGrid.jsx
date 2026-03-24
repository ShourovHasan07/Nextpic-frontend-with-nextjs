import SeriesCard from "./Card";

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

export function SeriesGrid() {
    return (
        <div className="min-[769px]:px-12 px-4">
            <h3 className="cards_section_title pt-0">Series</h3>

            {/* Responsive Container */}
            <div className="pb-6">
                <div
                    className="cards_grid_section min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr"
                >
                    {dummySeries.map((series, index) => (
                        <div className="min-w-[207px] flex-shrink-0 md:flex-shrink min-[769px]:min-w-0" key={index}>
                            <SeriesCard item={series} type="series" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Show More Button */}
            <div className="item_center min-[769px]:mb-12 mb-2">
                <button className="series_show_more_btn">
                    Show More
                </button>
            </div>
        </div>
    );
}

export default dummySeries;