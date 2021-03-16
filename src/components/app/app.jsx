import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {createBrowserHistory} from 'history';

import MainScreen from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Movie from "../movie/movie";
import Review from "../review/review";
import Player from "../player/player";
import NotFound from "../not-found/not-found";
import {moviesType, promoMovieType, reviewsType} from "../../validation";

const App = ({movies = {}, promoMovie = {}}) => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`}>
          <MainScreen
            promoMovie = {promoMovie}
          />
        </Route>
        <Route exact path={`/login`}>
          <SignIn></SignIn>
        </Route>
        <Route exact path={`/mylist`}>
          <MyList
            movies = {movies}
          ></MyList>
        </Route>
        <Route exact path={`/films/:id`}>
          <Movie
            movie = {movies[1]}
            history = {createBrowserHistory()}
          ></Movie>
        </Route>
        <Route exact path={`/films/:id/review`}>
          <Review
            movie = {movies[0]}
          ></Review>
        </Route>
        <Route exact path={`/player/:id`}>
          <Player
            movie = {movies[0]}
          ></Player>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

App.propTypes = {
  ...moviesType,
  ...promoMovieType,
  ...reviewsType
};

export default App;
