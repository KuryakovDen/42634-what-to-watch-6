import React from 'react';
import MainScreen from "../main/main";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Movie from "../movie/movie";
import Review from "../review/review";
import Player from "../player/player";
import NotFound from "../not-found/not-found";

const App = (props = {}) => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`}>
          <MainScreen {...props} />
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
        id: PropTypes.number.isRequired,
        previewImage: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
  ),
  promoMovie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired
  })
};

export default App;
