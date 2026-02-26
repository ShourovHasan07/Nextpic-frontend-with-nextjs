// import Navbar from "./components/Navbar";
// import Filter from "./components/Filter";
// import { MovieGrid } from "./components/MovieGrid";
// import { SeriesGrid } from "./components/SeriesGrid";
// import { GameGrid } from "./components/GameGrid";
// import { BookGrid } from "./components/BookGrid";
// import FilterSecondary from "./components/FilterSecondary";
import Navbar from './components/home/components/Navbar';
import Filter from './components/home/components/Filter';
import FilterSecondary from './components/home/components/FilterSecondary';
import { MovieGrid } from './components/home/components/MovieGrid';
import { SeriesGrid } from './components/home/components/SeriesGrid_3';
import { GameGrid } from './components/home/components/GameGrid';
import { BookGrid } from './components/home/components/BookGrid';

export default function Home() {
  return (
    <div className="container_fluid md:pb-20 pb-10">
      <Navbar/>
      <Filter/>
      <FilterSecondary/>
      <MovieGrid/>
      <SeriesGrid/>
      <GameGrid/>
      <BookGrid/>
    </div>
  );
}
