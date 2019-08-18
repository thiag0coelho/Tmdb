import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroller";
import MovieCard from "../components/MovieCard";
import api from "../services/api";

const useStyles = makeStyles({
  gridCard: {
    display: "flex",
    justifyContent: "center"
  }
});

function MovieCardList() {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  async function loadData(page) {
    const response = await api.get(`/movies/upcoming/${page}`);

    setMovies(movies.concat(response.data.results));
  }

  return (
    <InfiniteScroll
      pageStart={0}
      initialLoad={true}
      loadMore={loadData}
      hasMore={true || false}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <Grid
        container
        direction="row"
        spacing={2}
        justify="space-around"
        alignItems="stretch"
      >
        {movies.map(movie => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.gridCard}
            key={movie.id}
          >
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
}

export default MovieCardList;
