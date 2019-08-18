import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 430
  }
});

export default function MovieCard({ movie }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path ||
            movie.backdrop_path}`}
          title={movie.original_title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.original_title}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {movie.release_date}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            Action, Fantasy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
