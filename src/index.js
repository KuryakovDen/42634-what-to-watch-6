import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import App from "./components/app/app";
import {movies, promoMovie} from "./mocks/movies";
import reviews from "./mocks/reviews";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    composeWithDevTools()
);

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
