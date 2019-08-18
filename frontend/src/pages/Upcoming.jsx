import React, { useState } from "react";
import MovieCardList from "../components/MovieCardList";
import Header from "../components/Header";
import api from "../services/api";

function Upcoming() {
  const [movies, setMovies] = useState([]);

  async function loadData(page) {
    const response = await api.get(`/movies/upcoming/${page}`);

    setMovies(movies.concat(response.data.results));
  }

  return (
    <div>
      <Header />
      <MovieCardList movies={movies} loadData={loadData} initialLoad={true}/>
    </div>
  );
}

export default Upcoming;
