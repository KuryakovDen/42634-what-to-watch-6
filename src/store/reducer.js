import {movies} from "../mocks/movies";
import {ActionType} from "./action";
import {DEFAULT_GENRE} from "../const";

const getAllGenres = (movieList) => {
  const uniqueMovieGenres = Array.from(new Set(movieList.map((movie) => movie.genre))).sort();
  return [DEFAULT_GENRE].concat(uniqueMovieGenres);
};

const initialState = {
  activeGenre: DEFAULT_GENRE,
  moviesList: movies,
  genres: getAllGenres(movies),
  genreMoviesList: movies
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES_FOR_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
        genreMoviesList: action.payload === DEFAULT_GENRE
          ? initialState.moviesList
          : initialState.moviesList.filter((movie) => movie.genre === action.payload)
      };
  }

  return state;
};

export {reducer};
