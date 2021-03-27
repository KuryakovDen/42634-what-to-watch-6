import {ActionType} from "./action";
import {DEFAULT_GENRE} from "../const";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  isAuthorized: false,
  movies: {
    isFetching: true,
    isLoaded: false,
    data: []
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES_FOR_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };
    case ActionType.SET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case ActionType.REQUIRE_AUTH:
      return {
        ...state,
        isAuthorized: action.payload
      };
  }

  return state;
};

export {reducer};
