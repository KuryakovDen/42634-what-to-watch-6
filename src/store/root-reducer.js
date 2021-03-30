import {combineReducers} from "redux";
import {NameSpace} from "../const";
import {movie} from "./movie/movie";
import {data} from "./data/data";
import {user} from "./user/user";

export default combineReducers({
  [NameSpace.MOVIE]: movie,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user
});
