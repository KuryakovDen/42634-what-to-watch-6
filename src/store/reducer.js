import {ActionType} from "./action";
import {DEFAULT_GENRE} from "../const";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  moviesList: [],
  isDataLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES_FOR_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        moviesList: action.payload,
        isDataLoaded: true
      };
  }

  return state;
};

export {reducer};
