import {ActionType} from "./action";
import {DEFAULT_GENRE} from "../const";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  movies: {
    isLoaded: false,
    isFetching: false,
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
        data: action.payload,
        isLoaded: true
      };
  }

  return state;
};

export {reducer};
