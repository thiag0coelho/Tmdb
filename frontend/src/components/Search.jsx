import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { Close } from "@material-ui/icons/";
import useDebounce from "../utils/useDebounce";

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

export default function Search({ setSearchText, searchText, setMovies }) {
  const classes = useStyles();

  const resetSearch = async () => {
    setSearchText("");
  };

  const debouncedSearchText = useDebounce(searchText, 1300);

  useEffect(() => {
    const handleSearchText = () => {
      setMovies([]);

      if (searchText && searchText.length >= 3) {
        setSearchText(searchText);
      }
    };

    handleSearchText();
  }, [debouncedSearchText]);

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search for movie titles"
        inputProps={{ "aria-label": "search for movie titles" }}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={resetSearch}
      >
        <Close />
      </IconButton>
    </Paper>
  );
}
