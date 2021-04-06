import {NameSpace} from "../../const";

const checkUserAuth = (state) => state[NameSpace.USER].isAuthorized;
const getErrorMessage = (state) => state[NameSpace.USER].errorMessage;

export {checkUserAuth, getErrorMessage};
