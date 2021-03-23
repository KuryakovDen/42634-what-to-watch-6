import {ActionCreator} from "./action";

const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.setMovies(data)))
    .catch(({error}) => error)
);

export {fetchMoviesList};
