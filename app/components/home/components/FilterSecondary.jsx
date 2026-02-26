"use client"
import React, { useState } from "react";
import Image from "next/image";
import filter from "@/public/assets/filter.png";
import netflix from "@/public/assets/netflix.png";


export default function FilterSecondary() {
    const [showFilter, setShowFilter] = useState(false);

    const moviePlatforms = [
        { name: "Netflix", img: "/assets/netflix.png" },
        { name: "Prime Video", img: "/assets/prime.png" },
        { name: "Disney+", img: "/assets/disney.png" },
        { name: "Apple TV+", img: "/assets/apple.png" },
        { name: "HBO Max", img: "/assets/hbo.png" }
    ];
    const gamePlatforms = [
        { name: "Steam", img: "/assets/steam.png" },
        { name: "Epic Games", img: "/assets/epic.png" },
        { name: "PlayStation Store", img: "/assets/ps.png" },
        { name: "Xbox Store", img: "/assets/xbox.png" },
        { name: "EA Store", img: "/assets/ea.png" }
    ];
    const bookPlatforms = [
        { name: "Kindle", img: "/assets/kindle.png" },
        { name: "Audible", img: "/assets/audible.png" },
        { name: "Google Books", img: "/assets/gbook.png" },
        { name: "Apple Books", img: "/assets/abook.png" },
        { name: "Kobo", img: "/assets/kobo.png" },
        { name: "Scribd", img: "/assets/scribd.png" }
    ];


    return (
        <div className="filter_div">
            {/* result div */}
            <div className="md:flex justify-between items-center">
                <div>
                    <h5 className="text-white pb-2">
                        Recommendations (11 results)
                    </h5>
                    <p className="result_text">
                        Showing results for: Movies, Series, Games, Books
                    </p>
                </div>

                {/* Toggle Button */}
                <div className={`mt-4 md:mt-0 ${showFilter ? "inline-block p-[1px] rounded-[10px] bg-gradient-to-r from-[#FF4F6D] to-[#6C3DF0]":"inline-block p-[1px] rounded-[10px] bg-gradient-to-r hover:from-[#FF4F6D] hover:to-[#6C3DF0]"}`}>
                    <button
                        onClick={() => setShowFilter((prev) => !prev)}
                        className={`py-3 md:px-6 px-3 rounded-[10px] flex gap-2.5 items-center text-white font-medium w-full md:w-auto md:mb-0 justify-center transition-transform relative cursor-pointer overflow-hidden hover:shadow-lg ${showFilter ? "waved-btn bg-gradient-to-r from-[#FF4F6D]/10 to-[#6C3DF0]/10 bg-[#10172A] border-1 border-transparent":"border-1 border-[#7B808F] hover:border-transparent bg-gradient-to-r hover:from-[#FF4F6D]/10 hover:to-[#6C3DF0]/10 bg-[#10172A]"}`}
                    >
                        <Image
                            src={filter}
                            alt="filter"
                            className="h-4 w-4"
                        />
                        <span>{showFilter ? "Hide Filter" : "Show Filter"}</span>
                    </button>
                </div>
            </div>

            {/* Filter Content */}
            <div
                className={` transition-all duration-300 ease-in-out overflow-hidden transform
    ${showFilter ? "opacity-100 max-h-[3000px] translate-y-0" : "opacity-0 max-h-0 -translate-y-2"}`}
            >
                <div
                    className={`mt-6 md:p-[25px] p-4 border-1 border-[#394056] rounded-[20px]`}
                >
                    <p className="text-white">Filter by Mood</p>

                    {/* Mood filter */}
                    <div className="filter2_option_movies_div mb-6 flex-wrap">
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
                                <div key={id}>
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
                    <p className="text-white">Filter by Genres</p>

                    {/* Movies filter */}
                    <p className="text-white md:pt-6 pt-4">Movies</p>
                    <div className="filter2_option_movies_div flex-wrap">
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
                                <div key={id}>
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

                    {/* Series filter */}
                    <p className="text-white md:pt-6 pt-4">Series</p>
                    <div className="filter2_option_movies_div flex-wrap">
                        {["Crime", "Comedy", "Drama", "Fantasy", "Reality", "Documentary", "Mystery"].map(
                            (genre, index) => {
                                const id = `series${index + 1}`;
                                return (
                                    <div key={id}>
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

                    {/* Games filter */}
                    <p className="text-white md:pt-6 pt-4">Games</p>
                    <div className="filter2_option_movies_div flex-wrap">
                        {[
                            "RPG",
                            "FPS",
                            "Adventure",
                            "Strategy",
                            "Tactical",
                            "Battleground",
                            "Racing",
                            "Puzzle",
                            "Sports",
                        ].map((genre, index) => {
                            const id = `game${index + 1}`;
                            return (
                                <div key={id}>
                                    <input
                                        id={id}
                                        type="checkbox"
                                        name="game_options"
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

                    {/* Books filter */}
                    <p className="text-white md:pt-6 pt-4">Books</p>
                    <div className="filter2_option_movies_div flex-wrap">
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
                                <div key={id}>
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

                    {/* Platform filter section */}
                    <p className="text-white pt-[46px] pb-6">
                        Choose Your Preferred Platform
                    </p>

                    {/* Movie platform */}
                    <p className="text-white">Movies Platform</p>
                    <div className="filter2_movies_platform_div">
                        {moviePlatforms.map((platform, index) => {
                            const id = `movie_platform${index + 1}`;
                            return (
                                <div key={id}>
                                    <input
                                        id={id}
                                        type="checkbox"
                                        name="movie_platform"
                                        value={platform.name}
                                        className="movie-platform-checkbox"
                                    />
                                    <label htmlFor={id} className="filter2_platform_option_div">
                                        <div className="bg-white rounded-full p-3 h-[54px] w-[54px] mx-auto">
                                            <img
                                                src={platform.img}
                                                alt={platform.name}
                                                className="mx-auto w-[30px] h-[30px]"
                                            />
                                        </div>
                                        <h5 className="filter2_option_title pt-[6px]">
                                            {platform.name}
                                        </h5>
                                    </label>
                                </div>
                            );
                        })}
                    </div>

                    {/* Series platform */}
                    <p className="text-white md:pt-6 pt-4">Series</p>
                    <div className="filter2_movies_platform_div">
                        {moviePlatforms.map((platform, index) => {
                            const id = `series_platform${index + 1}`;
                            return (
                                <div key={id}>
                                    <input
                                        id={id}
                                        type="checkbox"
                                        name="series_platform"
                                        value={platform.name}
                                        className="series-platform-checkbox"
                                    />
                                    <label htmlFor={id} className="filter2_platform_option_div">
                                        <div className="bg-white rounded-full p-3 h-[54px] w-[54px] mx-auto">
                                            <img
                                                src={platform.img}
                                                alt={platform.name}
                                                className="mx-auto w-[30px] h-[30px]"
                                            />
                                        </div>
                                        <h5 className="filter2_option_title pt-[6px]">
                                            {platform.name}
                                        </h5>
                                    </label>
                                </div>
                            );
                        })}
                    </div>

                    {/* Game platform */}
                    <p className="text-white md:pt-6 pt-4">Game</p>
                    <div className="filter2_movies_platform_div">
                        {gamePlatforms.map((platform, index) => {
                            const id = `game_platform${index + 1}`;
                            return (
                                <div key={id}>
                                    <input
                                        id={id}
                                        type="checkbox"
                                        name="game_platform"
                                        value={platform.name}
                                        className="game-platform-checkbox"
                                    />
                                    <label htmlFor={id} className="filter2_platform_option_div">
                                        <div className="bg-white rounded-full p-3 h-[54px] w-[54px] mx-auto">
                                            <img
                                                src={platform.img}
                                                alt={platform.name}
                                                className="mx-auto w-[30px] h-[30px]"
                                            />
                                        </div>
                                        <h5 className="filter2_option_title pt-[6px]">
                                            {platform.name}
                                        </h5>
                                    </label>
                                </div>
                            );
                        })}
                    </div>

                    {/* Book platform */}
                    <p className="text-white md:pt-6 pt-4">Book</p>
                    <div className="filter2_movies_platform_div">
                        {bookPlatforms.map((platform, index) => {
                            const id = `book_platform${index + 1}`;
                            return (
                                <div key={id}>
                                    <input
                                        id={id}
                                        type="checkbox"
                                        name="book_platform"
                                        value={platform.name}
                                        className="book-platform-checkbox"
                                    />
                                    <label htmlFor={id} className="filter2_platform_option_div">
                                        <div className="bg-white rounded-full p-3 h-[54px] w-[54px] mx-auto">
                                            <img
                                                src={platform.img}
                                                alt={platform.name}
                                                className="mx-auto w-[30px] h-[30px]"
                                            />
                                        </div>
                                        <h5 className="filter2_option_title pt-[6px]">
                                            {platform.name}
                                        </h5>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
}
