import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainScreen from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Movie from "../movie/movie";
import Review from "../review/review";
import Player from "../player/player";
import NotFound from "../not-found/not-found";
import {promoMovieType, reviewsType} from "../../validation";

const App = ({promoMovie = {}}) => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`}>
          <MainScreen promoMovie = {promoMovie}/>
        </Route>
        <Route exact path={`/login`} component = {SignIn}/>
        <Route exact path={`/mylist`} component = {MyList}/>
        <Route exact path={`/films/:id`} component = {Movie}/>
        <Route exact path={`/films/:id/review`} component = {Review}/>
        <Route exact path={`/player/:id`} component = {Player}/>
        <Route component = {NotFound}/>
      </Switch>
    </BrowserRouter>
  </>
);

App.propTypes = {
  ...promoMovieType,
  ...reviewsType
};

export default App;
