import {ActionType} from "../action";
import {DEFAULT_GENRE} from "../../const";

const initialState = {
  activeGenre: DEFAULT_GENRE
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES_FOR_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };
  }

  return state;
};

export {movie};
