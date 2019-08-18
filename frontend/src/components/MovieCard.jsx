import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minWidth: 292
  },
  media: {
    height: 430,
    backgroundColor: "#F5F5F5"
  }
});

export default function MovieCard({ movie }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            movie.poster_path || movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path ||
                  movie.backdrop_path}`
              : 'https://via.placeholder.com/300x500.png/F5F5F5/0e0e0e/?text=No%20available%20poster'
          }
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
