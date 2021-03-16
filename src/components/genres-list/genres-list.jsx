import React from "react";
import {connect} from 'react-redux';

import {moviesType} from "../../validation";
import {ActionCreator} from "../../store/action";
import {DEFAULT_ACTIVE_GENRE} from "../../const";

const GenresList = ({genres = [], activeGenre = DEFAULT_ACTIVE_GENRE, onClickGenre = {}}) => {
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => {
          const genreHandler = (evt) => {
            evt.preventDefault();
            onClickGenre(genre);
          };

          return <li key={genre} className={genre === activeGenre ? `catalog__genres-item--active` : `catalog__genres-item`}>
            <a href="#" className="catalog__genres-link" onClick={genreHandler}>{genre}</a>
          </li>;
        })
      }
    </ul>
  );
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  genres: state.genres,
  movies: state.moviesList
});

const mapDispatchToProps = (dispatch) => ({
  onClickGenre(genre) {
    dispatch(ActionCreator.getMoviesForGenre(genre));
  }
});

GenresList.propTypes = {
  ...moviesType
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
