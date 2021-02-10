import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {movies, promoMovie} from "./mocks/movies";
import reviews from "./mocks/reviews";

ReactDOM.render(
    <App
      movies = {movies}
      reviws = {reviews}
      promoMovie = {promoMovie}
    />,
    document.querySelector(`#root`)
);
