import React, { useState } from "react";
import MovieCardList from "../components/MovieCardList";
import Header from "../components/Header";
import Search from "../components/Search";
import api from "../services/api";

function MoviesSearch() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function loadData(page) {
    if (!searchText) return;
    const response = await api.get(`/movies/search/${page}/${searchText}`);

    setMovies(movies.concat(response.data.results));
  }

  return (
    <div>
      <Header />
      <Search
        setSearchText={setSearchText}
        setMovies={setMovies}
        searchText={searchText}
        loadData={loadData}
      />
      {searchText.length > 3 && (
        <MovieCardList movies={movies} loadData={loadData} />
      )}
    </div>
  );
}

export default MoviesSearch;
