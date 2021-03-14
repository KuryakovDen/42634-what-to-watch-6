import {movies} from "../mocks/movies";
import {ActionType} from "./action";

const initialState = {
  genre: `All genres`,
  moviesList: movies
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES_ON_GENRE:
      return {
        ...state
      };
  }

  return state;
};

export {reducer};
