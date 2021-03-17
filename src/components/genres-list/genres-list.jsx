import React from "react";
import {connect} from 'react-redux';

import {genresType, moviesType} from "../../validation";
import {ActionCreator} from "../../store/action";
import {DEFAULT_GENRE} from "../../const";
import {movies} from "../../mocks/movies";

const GenresList = ({activeGenre = DEFAULT_GENRE, setGenreAction = {}}) => {
  const getAllGenres = (movieList) => {
    const uniqueMovieGenres = Array.from(new Set(movieList.map((movie) => movie.genre))).sort();
    return [DEFAULT_GENRE].concat(uniqueMovieGenres);
  };

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

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  setGenreAction(genre) {
    dispatch(ActionCreator.getMoviesForGenre(genre));
  }
});

GenresList.propTypes = {
  ...moviesType,
  ...genresType
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
