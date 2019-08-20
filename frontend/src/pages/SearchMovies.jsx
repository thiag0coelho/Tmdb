import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MovieCardList from "../components/MovieCardList";
import Header from "../components/Header";
import movieService from "../services/MovieService";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { Close, Search } from "@material-ui/icons/";

const useStyles = makeStyles({
  root: {
    padding: "3px 5px",
    display: "flex",
    alignItems: "center",
    marginBottom: "10px"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

const SearchMovies = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  async function loadData(page) {
    const response = await movieService.searchMovies(page, searchTerm);
      setMovies([...movies, ...response]);
  }

  const resetSearch = () => {
    setMovies([]);
    setText("");
    setSearchTerm("");
  }

  return (
    <div>
      <Header />
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search for movie titles"
          inputProps={{ "aria-label": "search for movie titles" }}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="close"
          onClick={() => resetSearch()}
        >
          <Close />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          aria-label="search"
          onClick={() => setSearchTerm(text)}
        >
          <Search />
        </IconButton>
      </Paper>
      {searchTerm && <MovieCardList movies={movies} loadData={loadData} />}
    </div>
  );
};

export default SearchMovies;
