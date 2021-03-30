import {NameSpace} from "../../const";
import {createSelector} from "reselect";
import {getActiveGenre} from "../movie/selectors";
import {filterMoviesOnGenre} from "../../utils";

const getMovie = (state) => state[NameSpace.DATA].currentMovie.data;
const getMovieId = (state) => state[NameSpace.DATA].currentMovie.data.id;
const checkLoadingMovie = (state) => state[NameSpace.DATA].currentMovie.isLoaded;
const getMovies = (state) => state[NameSpace.DATA].movies.data;
const checkLoadingMovies = (state) => state[NameSpace.DATA].movies.isLoaded;
const getReviews = (state) => state[NameSpace.DATA].comments.data;
const checkLoadingReviews = (state) => state[NameSpace.DATA].comments.isLoaded;
const getPromo = (state) => state[NameSpace.DATA].promo.data;
const checkLoadingPromo = (state) => state[NameSpace.DATA].promo.isLoaded;

const filteredMovies = createSelector(
    getMovies,
    getActiveGenre,
    (movies, activeGenre) => filterMoviesOnGenre(movies, activeGenre)
);

export {
  getMovie,
  getMovieId,
  checkLoadingMovie,
  getMovies,
  checkLoadingMovies,
  getReviews,
  checkLoadingReviews,
  getPromo,
  checkLoadingPromo,
  filteredMovies
};
