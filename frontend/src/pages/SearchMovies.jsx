import React, { useState } from "react";
import MovieCardList from "../components/MovieCardList";
import Header from "../components/Header";
import Search from "../components/Search";
import movieService from "../services/MovieService";

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const loadData = async (page) => {
    if (!searchText) return;
    const response = await movieService.searchMovies(page, searchText);

    setMovies(movies.concat(response));
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

export default SearchMovies;
