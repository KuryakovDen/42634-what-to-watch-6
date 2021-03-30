import {NameSpace} from "../../const";

const checkUserAuth = (state) => state[NameSpace.USER].isAuthorized;

export {checkUserAuth};
