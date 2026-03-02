
"use client";

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import header_img from "@/public/assets/header_img.svg";
import movie_icon from "@/public/assets/movie_icon.png";
import series from "@/public/assets/series.png";
import book from "@/public/assets/book.png";
import game from "@/public/assets/game.png";
import shuffle from "@/public/assets/shuffle.png";
import magic from "@/public/assets/magic.png";
import { FrontendApiHelper } from '@/app/utils/frontendApiHelper';
import filter from "@/public/assets/filter.png";



interface Mood  {
  _id: string;
  name: string;
}



interface FilterProps {
  onMoodSelect: (moodId: string) => void; // parent component will pass this function to receive selected mood ID
}


export default function Filter({ onMoodSelect }: FilterProps) {

 const [moods, setMoods] = useState<Mood[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");




  
  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const data = await FrontendApiHelper('/moods');

        console.log("Fetched moods:", data.items);

        setMoods(data.items);
      } catch (err) {
        console.error("Mood fetch error:", err);
        setError("Failed to load moods");
      } finally {
        setLoading(false);
      }
    };

    fetchMoods();
  }, []);

  if (loading) return <p>Loading moods...</p>;
  if (error) return <p>{error}</p>;


 // mood  click handler
  const handleMoodClick = (moodId: string) => {
    onMoodSelect(moodId); //  sent to  parent 
  };


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
           
            


             
         

                   <div className="filter2_option_movies_div mb-6 flex flex-wrap justify-center text-center mt-6">
  {moods.map((mood, index) => {
    const id = `mood${index + 1}`;
    return (
      <div key={mood._id}>
        <input
  id={id}
  type="radio"
  name="mood_options"
  value={mood._id}
  className="game-checkbox"
  onChange={() => handleMoodClick(mood._id)} 
/>
        <label htmlFor={id} className="filter2_option_book_div">
          <h5 className="filter2_option_title">{mood.name}</h5>
        </label>
      </div>
    );
  })}
</div>



           
        </div>
    )
}
