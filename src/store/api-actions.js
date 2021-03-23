import {ActionCreator} from "./action";

const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data: data}) => dispatch(ActionCreator.setMovies(data)))
);

export {fetchMoviesList};
