import {MAX_LIKE_MOVIES_LENGTH, NameSpace} from "../../const";
import {createSelector} from "reselect";
import {getActiveGenre} from "../movie/selectors";
import {filterMoviesOnGenre, getAllGenres} from "../../utils";

const getMovie = (state) => state[NameSpace.DATA].currentMovie.data;
const getMovieId = (state) => state[NameSpace.DATA].currentMovie.data.id;
const checkLoadingMovie = (state) => state[NameSpace.DATA].currentMovie.isLoaded;
const getMovies = (state) => state[NameSpace.DATA].movies.data;
const checkLoadingMovies = (state) => state[NameSpace.DATA].movies.isLoaded;
const getFavorites = (state) => state[NameSpace.DATA].favoriteMovies.data;
const checkLoadingFavorites = (state) => state[NameSpace.DATA].favoriteMovies.isLoaded;
const checkDisablingForm = (state) => state[NameSpace.DATA].isFormDisabled;
const getReviews = (state) => state[NameSpace.DATA].comments.data;
const getCommentError = (state) => state[NameSpace.DATA].errorMessage;
const checkLoadingReviews = (state) => state[NameSpace.DATA].comments.isLoaded;
const getPromo = (state) => state[NameSpace.DATA].promo.data;
const checkLoadingPromo = (state) => state[NameSpace.DATA].promo.isLoaded;
const checkNotFoundMovie = (state) => state[NameSpace.DATA].isNotFoundMovie;
const getPlayingMovie = (state) => state[NameSpace.DATA].playingMovie.data;

const filteredMovies = createSelector(
    getMovies,
    getActiveGenre,
    (movies, activeGenre) => filterMoviesOnGenre(movies, activeGenre)
);

const similarMovies = createSelector(
    getMovies,
    getMovie,
    (movies, currentMovie) => movies
    .filter((movie) => movie.genre === currentMovie.genre && movie.name !== currentMovie.name)
    .slice(0, MAX_LIKE_MOVIES_LENGTH)
);

const genres = createSelector(
    getMovies,
    (movies) => getAllGenres(movies)
);

export {
  getMovie,
  getMovieId,
  checkLoadingMovie,
  getMovies,
  checkLoadingMovies,
  getFavorites,
  checkLoadingFavorites,
  getReviews,
  checkLoadingReviews,
  getPromo,
  checkDisablingForm,
  checkLoadingPromo,
  checkNotFoundMovie,
  getPlayingMovie,
  getCommentError,
  similarMovies,
  filteredMovies,
  genres
};
