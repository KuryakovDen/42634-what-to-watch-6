import {
  setMovies,
  setPromoMovie,
  setCurrentMovie,
  setCommentsMovie,
  requireAuth,
  redirectToRoute,
  setFavoriteMovies,
} from "./action";
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

const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(setFavoriteMovies({isFetching: false, isLoaded: true, data})))
    .catch(() => dispatch(setFavoriteMovies({isFetching: false, isLoaded: false, data: null})))
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

const sendFavoritesList = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`, {id, status})
    .then(({data}) => dispatch(setCurrentMovie({isFetching: false, isLoaded: true, data})))
    // .then(({data}) => dispatch(setPromoMovie({isFetching: false, isLoaded: true, data})))
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
  fetchFavoritesList,
  checkAuth,
  sendComment,
  sendFavoritesList,
  login
};
