import MovieCard from "./Card"; // Ensure this matches your Card component file path

const dummyBooks = [
    {
        title: "Atomic Habits",
        year: "2008",
        genres: ["Self-Help"],
        rating: 8.9,
        description: "An easy way to build habits. Clear",
        image: "/assets/book1.png",
    },
    {
        title: "The Silent Patient",
        year: "2018",
        genres: ["Thriller"],
        rating: 8.9,
        description: "A shocking act of violence hides a chilling. More",
        image: "/assets/book2.png",
    },
    {
        title: "The Alchemist",
        year: "1988",
        genres: ["Fiction"],
        rating: 8.9,
        description: "A shepherd's journey to find treasure and. More",
        image: "/assets/book3.png",
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        year: "2011",
        genres: ["Non-Fiction"],
        rating: 8.9,
        description: "A compelling look at the evolution. More",
        image: "/assets/book4.png",
    },
    {
        title: "The Midnight Library",
        year: "2020",
        genres: ["Fantasy", "Fiction"],
        rating: 4.5,
        description: "One woman's explores infinite lives. More",
        image: "/assets/book5.png",
    },
    {
        title: "Educated",
        year: "2018",
        genres: ["Memoir"],
        rating: 4.5,
        description: "A woman's journey from isolation to. More",
        image: "/assets/book6.png",
    },
    {
        title: "The Alchemist",
        year: "1988",
        genres: ["Fiction"],
        rating: 8.9,
        description: "A shepherd's journey to find treasure and. More",
        image: "/assets/book3.png",
    },
    {
        title: "The Silent Patient",
        year: "2018",
        genres: ["Thriller"],
        rating: 8.9,
        description: "A shocking act of violence hides a chilling. More",
        image: "/assets/book2.png",
    },
];

export function BookGrid() {
    return (
        <div className="min-[769px]:px-12 px-4">
            <h3 className="cards_section_title pt-0">Book</h3>

            {/* Responsive Container */}
            <div className="pb-6">
                <div
                    className="cards_grid_section min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr"
                >
                    {dummyBooks.map((book, index) => (
                        <div className="min-w-[207px] flex-shrink-0 md:flex-shrink min-[769px]:min-w-0" key={index}>
                            <MovieCard item={book} type="book" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Show More Button */}
            <div className="item_center min-[769px]:mb-12 mb-2">
                <button className="book_show_more_btn">
                    Show More
                </button>
            </div>
        </div>
    );
}

export default dummyBooks;