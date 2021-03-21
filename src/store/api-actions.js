import {ActionCreator} from "./action";

const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data: moviesList}) => dispatch(ActionCreator.loadMovies(moviesList)))
);

export {fetchMoviesList};
