import {movies} from "../mocks/movies";
import {ActionType} from "./action";
import {DEFAULT_ACTIVE_GENRE} from "../const";

const getGenres = (movieList) => {
  const uniqueMovieGenres = Array.from(new Set(movieList.map((movie) => movie.genre))).sort();
  return [DEFAULT_ACTIVE_GENRE].concat(uniqueMovieGenres);
};

const initialState = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  moviesList: movies,
  genres: getGenres(movies),
  genreMoviesList: movies
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES_FOR_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
        genreMoviesList: action.payload === DEFAULT_ACTIVE_GENRE
          ? movies
          : initialState.moviesList.filter((movie) => movie.genre === action.payload)
      };
  }

  return state;
};

export {reducer};
