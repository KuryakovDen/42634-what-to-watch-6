import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainScreen from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Movie from "../movie/movie";
import Review from "../review/review";
import Player from "../player/player";
import NotFound from "../not-found/not-found";
import PrivateRoute from "../private-route/private-route";

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} component = {MainScreen}/>
        <Route exact path={`/login`} component = {SignIn}/>
        <PrivateRoute exact path={`/mylist`} render={() => <MyList/>}/>
        <Route exact path={`/films/:id`} component = {Movie}/>
        <PrivateRoute exact path={`/films/:id/review`} render={() => <Review/>}/>
        <Route exact path={`/player/:id`} component = {Player}/>
        <Route component = {NotFound}/>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
