import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const UpcomingMoviesLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/upcoming" {...props} />
));

const SearchLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/search" {...props} />
));

function Header(props) {
  return (
    <Grid>
      <Button
        color={
          props.location.pathname === "/" ||
          props.location.pathname === "/upcoming"
            ? "primary"
            : "default"
        }
        component={UpcomingMoviesLink}
        to="/"
        size={"large"}
      >
        Upcoming Movies
      </Button>
      <Button
        color={props.location.pathname === "/search" ? "primary" : "default"}
        component={SearchLink}
        size={"large"}
      >
        Search for titles
      </Button>
    </Grid>
  );
}

export default withRouter(Header);
