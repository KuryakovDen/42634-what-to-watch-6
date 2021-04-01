import {NameSpace} from "../../const";
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
const getReviews = (state) => state[NameSpace.DATA].comments.data;
const checkLoadingReviews = (state) => state[NameSpace.DATA].comments.isLoaded;
const getPromo = (state) => state[NameSpace.DATA].promo.data;
const checkLoadingPromo = (state) => state[NameSpace.DATA].promo.isLoaded;
const checkNotFoundMovie = (state) => state[NameSpace.DATA].isNotFoundMovie;

const filteredMovies = createSelector(
    getMovies,
    getActiveGenre,
    (movies, activeGenre) => filterMoviesOnGenre(movies, activeGenre)
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
  checkLoadingPromo,
  checkNotFoundMovie,
  filteredMovies,
  genres
};
