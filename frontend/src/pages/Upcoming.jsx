import React, { useState } from "react";
import MovieCardList from "../components/MovieCardList";
import Header from "../components/Header";
import movieService from "../services/MovieService";

function Upcoming() {
  const [movies, setMovies] = useState([]);

  async function loadData(page) {
    const response = await movieService.getUpcomingMovies(page);
    setMovies([...movies, ...response]);
  }

  return (
    <div>
      <Header />
      <MovieCardList movies={movies} loadData={loadData} initialLoad={true} />
    </div>
  );
}

export default Upcoming;
