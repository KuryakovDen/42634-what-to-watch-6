import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.setMovies({isFetching: false, isLoaded: true, data})))
    .catch(() => dispatch(ActionCreator.setMovies({isFetching: false, isLoaded: false, data: null})))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH)))
);

export {fetchMoviesList, checkAuth, login};
