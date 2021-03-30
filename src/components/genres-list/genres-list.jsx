import React from "react";
import {connect} from 'react-redux';

import {genresType, moviesType} from "../../validation";
import {getMoviesForGenre} from "../../store/action";
import {getAllGenres} from "../../utils";

const GenresList = ({activeGenre, movies, setGenreAction = {}}) => {
  const genres = getAllGenres(movies);

  const genreHandler = (evt, currentGenre) => {
    evt.preventDefault();
    setGenreAction(currentGenre);
  };

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => {
          return <li key={genre} className={genre === activeGenre ? `catalog__genres-item--active` : `catalog__genres-item`}>
            <a href="#" className="catalog__genres-link" onClick={(evt) => {
              genreHandler(evt, genre);
            }}>{genre}</a>
          </li>;
        })
      }
    </ul>
  );
};

const mapStateToProps = ({MOVIE, DATA}) => ({
  activeGenre: MOVIE.activeGenre,
  movies: DATA.movies.data
});

const mapDispatchToProps = (dispatch) => ({
  setGenreAction(genre) {
    dispatch(getMoviesForGenre(genre));
  }
});

GenresList.propTypes = {
  ...moviesType,
  ...genresType
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
