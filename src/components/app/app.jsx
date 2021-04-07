import React from 'react';
import {Router, Switch, Route} from "react-router-dom";

import MainScreen from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Movie from "../movie/movie";
import Review from "../review/review";
import Player from "../player/player";
import ServerError from "../server-error/server-error";
import NotFound from "../not-found/not-found";
import PrivateRoute from "../private-route/private-route";
import {browserHistory} from "../../utils";

const App = () => (
  <>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={`/`} component = {MainScreen}/>
        <Route exact path={`/login`} component = {SignIn}/>
        <PrivateRoute exact path={`/mylist`} render={() => <MyList/>}/>
        <Route exact path={`/films/:id`} component = {Movie}/>
        <PrivateRoute exact path={`/films/:id/review`} render={(props) => <Review {...props} />}/>
        <Route exact path={`/player/:id`} component = {Player}/>
        <Route exact path={`/error`} component = {ServerError}/>
        <Route component = {NotFound}/>
      </Switch>
    </Router>
  </>
);

export default App;
