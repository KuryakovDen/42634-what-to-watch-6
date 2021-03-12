import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {movies, promoMovie} from "./mocks/movies";
import reviews from "./mocks/reviews";
import {createStore} from "redux";
import {reducer} from "./store/reducer";
import {Provider} from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        movies = {movies}
        reviews = {reviews}
        promoMovie = {promoMovie}
      />
    </Provider>,
    document.querySelector(`#root`)
);
