import {movies} from "../mocks/movies";
import {ActionType} from "./action";

const initialState = {
  genre: ``,
  moviesList: movies
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state
      };
    case ActionType.GET_MOVIE_ON_GENRE:
      return {
        ...state
      };
  }

  return state;
};

export {reducer};
