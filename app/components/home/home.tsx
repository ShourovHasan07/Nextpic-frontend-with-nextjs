  "use client";




import Navbar from './components/Navbar';
import Filter from './components/Filter';

import { MovieGrid } from './components/MovieGrid';
import { SeriesGrid } from './components/SeriesGrid_3';
import { GameGrid } from './components/GameGrid';
import { BookGrid } from './components/BookGrid';
import { useState } from 'react';

export default function Home() {

  const [selectedMood, setSelectedMood] = useState<string>(""); // state to hold selected mood ID
   const [showSecondaryFilter, setShowSecondaryFilter] = useState(false);



  return (

       


    <div className="container_fluid md:pb-20 pb-10">
      <Navbar/>
       <Filter 
        onMoodSelect={setSelectedMood} 
        onToggleFilter={() => setShowSecondaryFilter(prev => !prev)}
      />
      <MovieGrid moodId={selectedMood} 
        showSecondaryFilter={showSecondaryFilter}  />


      <SeriesGrid moodId={selectedMood}
      
      showSecondaryFilter={showSecondaryFilter}/>

      <GameGrid/>
      <BookGrid/>
    </div>
  );
}
