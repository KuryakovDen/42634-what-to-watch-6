import {ActionType} from "../action";

const initialState = {
  isAuthorized: false,
  errorMessage: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTH:
      return {
        ...state,
        isAuthorized: action.payload
      };
    case ActionType.CATCH_AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
  }

  return state;
};

export {user};
