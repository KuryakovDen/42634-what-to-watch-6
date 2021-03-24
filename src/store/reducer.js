import {ActionType} from "./action";
import {AuthorizationStatus, DEFAULT_GENRE} from "../const";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
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
  }

  return state;
};

export {reducer};
