import {ActionType} from "../action";
import {AuthorizationStatus} from "../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.WAIT,
  errorMessage: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTH:
      return {
        ...state,
        authorizationStatus: action.payload
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
