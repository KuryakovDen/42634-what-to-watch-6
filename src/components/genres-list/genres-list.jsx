import React from "react";
import {connect} from 'react-redux';

import {genresType, moviesType} from "../../validation";
import {getMoviesForGenre} from "../../store/action";
import {getActiveGenre} from "../../store/movie/selectors";
import {genres, getMovies} from "../../store/data/selectors";

const GenresList = ({activeGenre, movieGenres, setGenreAction = {}}) => {
  const genreHandler = (evt, currentGenre) => {
    evt.preventDefault();
    setGenreAction(currentGenre);
  };

  return (
    <ul className="catalog__genres-list">
      {
        movieGenres.map((genre) => {
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

GenresList.propTypes = {
  ...moviesType,
  ...genresType
};

const mapStateToProps = (state) => ({
  activeGenre: getActiveGenre(state),
  movieGenres: genres(state),
  movies: getMovies(state)
});

const mapDispatchToProps = (dispatch) => ({
  setGenreAction(genre) {
    dispatch(getMoviesForGenre(genre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
