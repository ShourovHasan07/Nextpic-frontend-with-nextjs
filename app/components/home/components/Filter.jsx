import React from 'react'
import Image from "next/image";
import header_img from "@/public/assets/header_img.svg";
import movie_icon from "@/public/assets/movie_icon.png";
import series from "@/public/assets/series.png";
import book from "@/public/assets/book.png";
import game from "@/public/assets/game.png";
import shuffle from "@/public/assets/shuffle.png";
import magic from "@/public/assets/magic.png";

export default function Filter() {
    return (
        <div className='filter_div'>
            <div className="filter_heading_div">
                <h2 className="filter_heading">
                    <span>
                        Discover Your Next Favorite{" "}
                        <span className="inline-flex items-center ">
                            Pick
                            <Image
                                src={header_img}
                                alt="header_img"
                                className="ml-2.5 inline-block w-5 md:w-auto"
                            />
                        </span>
                    </span>
                </h2>
            </div>

            <p className='filter_subtitle'>Discover your next favorite movie, series, game, or book with AI-powered recommendations</p>
            <h2 className='text-4xl text-white text-center mt-8'>Pick a Mood , if you want a fun touch</h2>
             
         

                    {/* Mood filter */}
                    <div className="filter2_option_movies_div mb-6 flex flex-wrap justify-center text-center mt-6">
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

           
        </div>
    )
}
