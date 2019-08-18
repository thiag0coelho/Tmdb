import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Upcoming from "./pages/Upcoming";
import MoviesSearch from "./pages/MoviesSearch";
import "./App.css";

function App() {
  return (
    <Router>
      <Container>
        <Route exact path="/" component={Upcoming} />
        <Route exact path="/search" component={MoviesSearch} />
      </Container>
    </Router>
  );
}

export default App;
