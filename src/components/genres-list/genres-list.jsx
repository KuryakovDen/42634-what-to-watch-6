import React, {useState} from "react";
import MoviesList from "../movie-list/movie-list";
import {moviesType} from "../../validation";

const GenresList = ({movies = {}}) => {
  const uniqueMovieGenres = new Set(movies.map((movie) => movie.genre));
  const genres = [`All movies`].concat(Array.from(uniqueMovieGenres).sort());

  const [activeGenre, setActiveGenre] = useState(`All movies`);

  const clickGenreHandler = (evt) => {
    evt.preventDefault();
    setActiveGenre(evt.target.text);
  };

  return (
    <>
      <ul className="catalog__genres-list">
        {
          genres.map((genre) => {
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
