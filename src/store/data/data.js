import {ActionType} from "../action";

const initialState = {
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
    isNotFoundMovie: false,
    isFetching: true,
    isLoaded: false,
    data: {}
  },
  comments: {
    isFetching: true,
    isLoaded: false,
    data: [],
    errorMessage: null
  },
  favoriteMovies: {
    isFetching: true,
    isLoaded: false,
    data: []
  },
  playingMovie: {
    isFetching: true,
    isLoaded: false,
    data: {}
  },
  isFormDisabled: false
};

const data = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionType.SET_COMMENT_FORM_DISABLE:
      return {
        ...state,
        isFormDisabled: action.payload
      };
    case ActionType.CATCH_COMMENT_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    case ActionType.SET_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload
      };
    case ActionType.SET_PLAYING_MOVIE:
      return {
        ...state,
        playingMovie: action.payload
      };
    case ActionType.REDIRECT_TO_ROUTE:
      return {
        ...state,
        isNotFoundMovie: action.payload
      };
  }

  return state;
};

export {data};
