import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import InfiniteScroll from "react-infinite-scroller";
import MovieCard from "../components/MovieCard";

const useStyles = makeStyles({
  gridCard: {
    display: "flex",
    justifyContent: "center"
  },
  loader: {
    paddingTop: "16px",
    paddingBottom: "16px"
  }
});

function MovieCardList({ movies, loadData, initialLoad }) {
  const classes = useStyles();

  return (
    <InfiniteScroll
      pageStart={0}
      initialLoad={initialLoad}
      loadMore={loadData}
      hasMore={true || false}
      loader={
        <Grid className={classes.loader} key={1}>
          <Skeleton variant="rect" width={345} height={500} />
          <Skeleton width={130} />
        </Grid>
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
