import {ActionType} from "./action";
import {AuthorizationStatus, DEFAULT_GENRE} from "../const";

const initialState = {
  activeGenre: DEFAULT_GENRE,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  movies: {
    isFetching: true,
    isLoaded: false,
    data: []
  },
  promo: {
    isFetching: true,
    isLoaded: false,
    data: {}
  },
  currentMovie: {
    isFetching: true,
    isLoaded: false,
    data: {}
  },
  comments: {
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
    case ActionType.SET_PROMO_MOVIE:
      return {
        ...state,
        promo: action.payload
      };
    case ActionType.SET_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: action.payload
      };
    case ActionType.SET_COMMENTS_MOVIE:
      return {
        ...state,
        comments: action.payload
      };
    case ActionType.REQUIRE_AUTH:
      return {
        ...state,
        authorizationStatus: action.payload
      };
  }

  return state;
};

export {reducer};
