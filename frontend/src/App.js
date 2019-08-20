import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Upcoming from "./pages/Upcoming";
import SearchMovies from "./pages/SearchMovies";
import "./App.css";

function App() {
  return (
    <Router>
      <Container>
        <Route exact path="/" component={Upcoming} />
        <Route exact path="/search" component={SearchMovies} />
      </Container>
    </Router>
  );
}

export default App;
