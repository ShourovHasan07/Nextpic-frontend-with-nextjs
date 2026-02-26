import MovieCard from "./Card";

const dummyGames = [
    {
        title: "The Witcher 3: Wild Hunt",
        year: "2015",
        genres: ["RPG"],
        rating: 9.3,
        description: "Hunt monsters and battle the Wild Hunt.",
        image: "/assets/game1.png",
    },
    {
        title: "God of War: Ragnarök",
        year: "2022",
        genres: ["Action", "Adventure"],
        rating: 9.4,
        description: "Kratos battles the Norse gods.",
        image: "/assets/game2.png",
    },
    {
        title: "Red Dead Redemption 2",
        year: "2018",
        genres: ["Action", "Adventure"],
        rating: 9.7,
        description: "Arthur Morgan's epic journey.",
        image: "/assets/game3.png",
    },
    {
        title: "Elden Ring",
        year: "2022",
        genres: ["RPG", "Action"],
        rating: 9.4,
        description: "Explore a vast open world.",
        image: "/assets/game4.png",
    },
    {
        title: "Cyberpunk 2077",
        year: "2020",
        genres: ["RPG"],
        rating: 8.2,
        description: "Live in a dystopian future.",
        image: "/assets/game5.png",
    },
    {
        title: "Horizon Forbidden West",
        year: "2022",
        genres: ["RPG", "Action"],
        rating: 9.0,
        description: "Aloy battles new machines.",
        image: "/assets/game6.png",
    },
    {
        title: "Red Dead Redemption",
        year: "2010",
        genres: ["Action"],
        rating: 9.3,
        description: "John Marston's redemption arc.",
        image: "/assets/game3.png",
    },
    {
        title: "Elden Ring",
        year: "2022",
        genres: ["RPG", "Action"],
        rating: 9.4,
        description: "Explore a vast open world.",
        image: "/assets/game4.png",
    },
];

export function GameGrid() {
    return (
        <div className="min-[769px]:px-12 px-4">
            <h3 className="cards_section_title pt-0">Game</h3>

            {/* Responsive Container */}
            <div className="pb-6">
                <div
                    className="cards_grid_section min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr"
                >
                    {dummyGames.map((game, index) => (
                        <div className="min-w-[207px] flex-shrink-0 md:flex-shrink min-[769px]:min-w-0" key={index}>
                            <MovieCard item={game} type="game" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Show More Button */}
            <div className="item_center min-[769px]:mb-12 mb-2">
                <button className="game_show_more_btn">
                    Show More
                </button>
            </div>
        </div>
    );
}