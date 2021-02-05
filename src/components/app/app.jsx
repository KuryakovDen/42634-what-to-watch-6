import React from 'react';
import MainScreen from "../main/main";

const App = (props) => {
  const {movies, promoMovie} = props;

  return <MainScreen
    movies = {movies}
    promoMovie = {promoMovie}
  />;
};

export default App;
