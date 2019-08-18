import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "80vw",
    overflow: "auto",
    height: "100%",
    display: "block"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "80vh"
  },
  modal: {
    position: "absolute",
    top: "10%",
    left: "10%",
    overflow: "scroll",
    height: "100%",
    display: "block"
  }
}));

export default function MovieDetailModal({ openModal, setOpenModal, movie }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <img
                className={classes.img}
                alt={movie.original_title}
                src={
                  movie.poster_path || movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${movie.poster_path ||
                        movie.backdrop_path}`
                    : "https://via.placeholder.com/300x500.png/F5F5F5/0e0e0e/?text=No%20available%20poster"
                }
              />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h5" component="h2">
                    {movie.original_title}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="p">
                    {movie.release_date}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="p">
                    Action, Fantasy
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {movie.overview}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  );
}
