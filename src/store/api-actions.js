import {setMovies, setPromoMovie, setCurrentMovie, setCommentsMovie, requireAuth, redirectToRoute} from "./action";
import {HttpCode} from "../const";

const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(setMovies({isFetching: false, isLoaded: true, data})))
    .then(() => dispatch(redirectToRoute(false)))
    .catch(() => dispatch(setMovies({isFetching: false, isLoaded: false, data: null})))
);

const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(setPromoMovie({isFetching: false, isLoaded: true, data})))
    .catch(() => dispatch(setPromoMovie({isFetching: false, isLoaded: false, data: null})))
);

const fetchCurrentMovie = (movieId) => (dispatch, _getState, api) => (
  api.get(`/films/${movieId}`)
    .then(({data}) => dispatch(setCurrentMovie({isFetching: false, isLoaded: true, data})))
    .then(() => dispatch(redirectToRoute(false)))
    .catch((error) => {
      if (error.response.status === HttpCode.NOT_FOUND) {
        dispatch(redirectToRoute(true));
      }
    })
);

const fetchCommentsList = (movieId) => (dispatch, _getState, api) => (
  api.get(`/comments/${movieId}`)
    .then(({data}) => dispatch(setCommentsMovie({isFetching: false, isLoaded: true, data})))
    .catch(() => dispatch(setCommentsMovie({isFetching: false, isLoaded: false, data: null})))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuth(true)))
    .catch(() => {})
);

const sendComment = ({id, rating, comment}) => (dispatch, _getState, api) => (
  api.post(`comments/${id}`, {rating, comment})
    .then(() => (window.location.href = `/films/${id}`))
    .catch(({error}) => error)
);

const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuth(true)))
    .then(() => (window.location.href = `/`))
);

export {
  fetchMoviesList,
  fetchPromoMovie,
  fetchCurrentMovie,
  fetchCommentsList,
  checkAuth,
  sendComment,
  login
};
