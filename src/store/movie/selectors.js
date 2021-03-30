import {NameSpace} from "../../const";

const getActiveGenre = (state) => state[NameSpace.MOVIE].activeGenre;

export {getActiveGenre};
