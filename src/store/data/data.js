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
    data: []
  }
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
    case ActionType.REDIRECT_TO_ROUTE:
      return {
        ...state,
        isNotFoundMovie: action.payload
      };
  }

  return state;
};

export {data};
