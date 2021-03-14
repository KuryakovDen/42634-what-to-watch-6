import React, {useState} from "react";
import MoviesList from "../movie-list/movie-list";
import {moviesType} from "../../validation";

const Genres = {
  "All_GENRES": `All genres`,
  "COMEDIES": `Comedies`,
  "CRIME": `Crime`,
  "DOCUMENTARY": `Documentary`,
  "DRAMAS": `Dramas`,
  "HORROR": `Horror`,
  "KIDS_FAMILY": `Kids & Family`,
  "ROMANCE": `Romance`,
  "SCI_FI": `Sci-Fi`,
  "THRILLERS": `Thrillers`
};

const GenresList = ({movies = {}}) => {
  const [activeGenre, setActiveGenre] = useState(`All genres`);

  const clickGenreHandler = (evt) => {
    evt.preventDefault();
    setActiveGenre(evt.target.text);
  };

  return (
    <>
      <ul className="catalog__genres-list">
        {
          Object.values(Genres).map((genre) => {
            return <li key={genre} className={genre === activeGenre ? `catalog__genres-item--active` : `catalog__genres-item`}>
              <a href="#" className="catalog__genres-link" onClick={clickGenreHandler}>{genre}</a>
            </li>;
          })
        }
      </ul>
      <MoviesList movies={movies}/>
    </>
  );
};

GenresList.propTypes = {
  ...moviesType
};

export default GenresList;
