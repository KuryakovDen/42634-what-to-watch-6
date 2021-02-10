import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import movies from "./mocks/movies";

const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  released: 2014
};

ReactDOM.render(
    <App
      movies = {movies}
      promoMovie = {promoMovie}
    />,
    document.querySelector(`#root`)
);
