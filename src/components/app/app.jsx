import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainScreen from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Movie from "../movie/movie";
import Review from "../review/review";
import Player from "../player/player";
import NotFound from "../not-found/not-found";

const App = ({movies = {}, promoMovie = {}, reviews = {}}) => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`}>
          <MainScreen
            movies = {movies}
            reviws = {reviews}
            promoMovie = {promoMovie}
          />
        </Route>
        <Route exact path={`/login`}>
          <SignIn></SignIn>
        </Route>
        <Route exact path={`/mylist`}>
          <MyList></MyList>
        </Route>
        <Route exact path={`/films/:id`}>
          <Movie></Movie>
        </Route>
        <Route exact path={`/films/:id/review`}>
          <Review></Review>
        </Route>
        <Route exact path={`/player/:id`}>
          <Player></Player>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

App.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        "id": PropTypes.number.isRequired,
        "name": PropTypes.string.isRequired,
        "poster_image": PropTypes.string.isRequired,
        "preview_image": PropTypes.string.isRequired,
        "background_image": PropTypes.string.isRequired,
        "background_color": PropTypes.string.isRequired,
        "video_link": PropTypes.string.isRequired,
        "preview_video_link": PropTypes.string.isRequired,
        "description": PropTypes.string.isRequired,
        "rating": PropTypes.number.isRequired,
        "scores_count": PropTypes.number.isRequired,
        "director": PropTypes.string.isRequired,
        "starring": PropTypes.arrayOf(PropTypes.string.isRequired),
        "run_time": PropTypes.number.isRequired,
        "genre": PropTypes.string.isRequired,
        "released": PropTypes.number.isRequired,
        "is_favorite": PropTypes.bool.isRequired,
      })
  ),
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        "id": PropTypes.number.isRequired,
        "user": PropTypes.shape({
          "id": PropTypes.number.isRequired,
          "name": PropTypes.string.isRequired
        }),
        "rating": PropTypes.number.isRequired,
        "comment": PropTypes.string.isRequired,
        "date": PropTypes.string.isRequired
      })
  ),
  promoMovie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired
  })
};

export default App;
