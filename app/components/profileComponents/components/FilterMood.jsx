import React from "react";
import Image from "next/image";
import header_img from "@/public/assets/header_img.svg";
import filter from "@/public/assets/filter.png";

export default function Filter() {
  return (
    <div className="filter_div pt-0 ">
      <div className="filter_heading_div">
        <h2 className="filter_heading lg:hidden block pb-3 lg:pb-0">
          <span>
            Discover Your Next Favorite{" "}
            <span className="inline-flex items-center ">
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

      <p className="filter_subtitle pt-0">
        Discover your next favorite movie, series, game, or book with AI-powered
        recommendations
      </p>
      <h2 className="filter_title_compact_2">
        <span>
          Pick a Mood , if you want a fun
          <span className="inline-flex items-center gap-3 filter_compact_parent">
            touch
            {/* filter_compact_btn_active */}
            <div className="filter_compact_btn tooltip" data-tip="Customize Your Picks">
              <Image src={filter} alt="filter" />
            </div>
          </span>
        </span>
      </h2>

      {/* Mood filter */}
      <div className="filter2_option_movies_div pb-2 md:mb-3 mb-2 pt-0 min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr min-[769px]:justify-center">
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
            <div
              key={id}
              className="flex-shrink-0 min-[769px]:flex-shrink min-[769px]:min-w-0"
            >
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
  );
}
