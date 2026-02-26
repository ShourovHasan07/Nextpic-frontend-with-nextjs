import MovieCard from "./Card";
import Image from "next/image";
import shuffle from "@/public/assets/shuffle.png";
import magic from "@/public/assets/magic.png";
import not_found_book from "@/public/assets/not_found_book.svg";

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

const bookPlatforms = [
    { name: "Kindle", img: "/assets/kindle.png" },
    { name: "Audible", img: "/assets/audible.png" },
    { name: "Google Books", img: "/assets/gbook.png" },
    { name: "Apple Books", img: "/assets/abook.png" },
    { name: "Kobo", img: "/assets/kobo.png" },
    { name: "Scribd", img: "/assets/scribd.png" }
];

export function BookGrid() {
    return (
        <div className="min-[769px]:px-12 px-4">
            <h3 className="cards_section_title_compact_2 pt-0">Books</h3>
            {/* compact filter */}
            <div>
                {/* btn div */}
                <div className="filter_btn_div_flex_compact_2">
                    {/* Random Pick */}
                    <div className=''>
                        <input
                            type="radio"
                            id="random"
                            name="filter"
                            value="random"
                            className="hidden peer"
                            defaultChecked
                        />
                        <label
                            htmlFor="random"
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
                            id="mypicks"
                            name="filter"
                            value="mypicks"
                            className="hidden peer"
                        />
                        <label
                            htmlFor="mypicks"
                            className="py-3 md:px-6 px-3 rounded-[10px] flex gap-2.5 items-center text-white font-medium w-full md:w-auto md:mb-0 justify-center cursor-pointer border-1 border-[#444444] hover:bg-transparent"
                        >
                            <Image src={magic} alt="magic" className="h-4 w-4" />
                            <span>Get My Picks</span>
                        </label>
                    </div>
                </div>
                <div className="movie_reset_2_div">
                    <p className="movie_reset_2_text">Mood (Choose a Mood)</p>
                    <button className="books_reset_2_btn">Reset All</button>
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
                    <button className="books_reset_2_btn">Reset All</button>
                </div>
                {/* genres filter */}
                <div className="filter2_option_movies_div pb-2 md:mb-3 mb-2 pt-0 min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr">
                    {[
                        "Fiction",
                        "Non-fiction",
                        "Mystery",
                        "Romance",
                        "Contemporary Fiction",
                        "Sci-Fic",
                        "Self-Help",
                        "Business & Finance",
                        "Psychology",
                        "History",
                        "Philosophy",
                        "Science & Technology",
                        "Travel & Adventure",
                    ].map((genre, index) => {
                        const id = `book${index + 1}`;
                        return (
                            <div key={id} className="flex-shrink-0 min-[769px]:flex-shrink min-[769px]:min-w-0">
                                <input
                                    id={id}
                                    type="checkbox"
                                    name="book_options"
                                    value={id}
                                    className="book-checkbox"
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
                    <button className="books_reset_2_btn">Reset All</button>
                </div>
                {/* platform filter */}
                {/* platform filter */}
                <div className="filter2_movies_platform_div pb-2 mb-4 gap-2.5 flex min-[769px]:flex-wrap pt-0 min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr">
                    {bookPlatforms.map((platform, index) => {
                        const id = `movie_platform${index + 1}`;
                        return (
                            <div key={id} className="flex-shrink-0 md:flex-shrink min-[769px]:min-w-0">
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
                <p className="card_pass_message ">Click pass to remove already watched/unwanted items</p>
            </div>

            {/* Responsive Container */}
            <div className="pb-4">
                <div
                    className="cards_grid_section_compact min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr pb-2"
                >
                    {dummyBooks.map((book, index) => (
                        <div className="min-w-[207px] flex-shrink-0 md:flex-shrink min-[769px]:min-w-0" key={index}>
                            <MovieCard item={book} type="book" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Show More Button */}
            <div className="item_center md:mb-12 mb-2">
                <button className="book_show_more_btn">
                    Show More
                </button>
            </div>
            {/* not found div */}
            <div className="not_found_div hidden">
                <div className="item_center">
                    <Image src={not_found_book} alt="not_found_book" />
                </div>
                <h2 className="not_found_text">Ups!... no results found!</h2>
                <p className="not_found_text_sm">Please try a different mood or genre</p>
            </div>
        </div>
    );
}

export default dummyBooks;