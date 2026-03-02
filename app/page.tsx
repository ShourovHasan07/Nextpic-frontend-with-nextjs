  "use client";




import Navbar from './components/home/components/Navbar';
import Filter from './components/home/components/Filter';
import FilterSecondary from './components/home/components/FilterSecondary';
import { MovieGrid } from './components/home/components/MovieGrid';
import { SeriesGrid } from './components/home/components/SeriesGrid_3';
import { GameGrid } from './components/home/components/GameGrid';
import { BookGrid } from './components/home/components/BookGrid';
import { useState } from 'react';

export default function Home() {

  const [selectedMood, setSelectedMood] = useState<string>(""); // state to hold selected mood ID


  return (

       


    <div className="container_fluid md:pb-20 pb-10">
      <Navbar/>
      <Filter onMoodSelect={setSelectedMood} />
      <MovieGrid moodId={selectedMood} />
      <SeriesGrid/>
      <GameGrid/>
      <BookGrid/>
    </div>
  );
}
