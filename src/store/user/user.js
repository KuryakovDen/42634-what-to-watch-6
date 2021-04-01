import {ActionType} from "../action";

const initialState = {
  isAuthorized: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTH:
      return {
        ...state,
        isAuthorized: action.payload
      };
  }

  return state;
};

export {user};
