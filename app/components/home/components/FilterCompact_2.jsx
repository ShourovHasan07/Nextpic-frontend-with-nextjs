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
        <div className='filter_div pt-0 '>
            <div className="filter_heading_div">
                <h2 className="filter_heading lg:hidden block pb-3 lg:pb-0">
                    <span>
                        Discover Your Next Favorite{" "}
                        <span className="inline-flex items-center">
                            Pick
                            <Image
                                src={header_img}
                                alt="header_img"
                                className="ml-2.5 inline-block w-5 min-[769px]:w-auto"
                            />
                        </span>
                    </span>
                </h2>
            </div>

            <p className='filter_subtitle pt-0'>Discover your next favorite movie, series, game, or book with AI-powered recommendations</p>
            <h4 className='filter_title_compact'>Start Exploring</h4>
            {/* filter options div */}
            <div className='filter_option_movies_div min-[769px]:gap-[24px] gap-4 pb-4'>
                {/* card 1 */}
                <div className='filter_option_movies_inner_div'>
                    <input
                        id="movie"
                        type="checkbox"
                        name="options"
                        className="movie"
                        value="movie"
                    />
                    <label htmlFor="movie" className="filter_option_movie_div py-4">
                        <div className='filter_option_img_div bg-[#8A38F5]'>
                            <Image src={movie_icon} alt='movie_icon' />
                        </div>
                        <h5 className='filter_option_title'>Movies</h5>
                    </label>
                </div>
                {/* card 2 */}
                <div className='filter_option_movies_inner_div'>
                    <input
                        id="series"
                        type="checkbox"
                        name="options"
                        className="series"
                        value="series"
                    />
                    <label htmlFor="series" className="filter_option_series_div py-4">
                        <div className='filter_option_img_div bg-[#F316B0]'>
                            <Image src={series} alt='series' />
                        </div>
                        <h5 className='filter_option_title'>Series</h5>
                    </label>
                </div>
                {/* card 4 */}
                <div className='filter_option_movies_inner_div'>
                    <input
                        id="book"
                        type="checkbox"
                        name="options"
                        className="book"
                        value="book"
                    />
                    <label htmlFor="book" className="filter_option_book_div py-4">
                        <div className='filter_option_img_div bg-[#0C8CE9]'>
                            <Image src={book} alt='book' />
                        </div>
                        <h5 className='filter_option_title'>Book</h5>
                    </label>
                </div>
            </div>


            {/* result div */}
            <div className='min-[769px]:flex justify-between'>
                <div>
                    <h5 className='text-white pb-2'>Top Suggest</h5>
                    <p className='result_text'>Showing results for: Movies, Series, Games, Books</p>
                </div>
                {/* <p className='result_text_right'>Showing results for: Movies, Series, Games, Books</p> */}
            </div>
        </div>
    )
}
