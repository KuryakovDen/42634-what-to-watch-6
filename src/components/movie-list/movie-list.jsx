import React from "react";
import {connect} from 'react-redux';

import MovieCard from "../movie-card/movie-card";
import {moviesType} from "../../validation";
import {filterMoviesOnGenre} from "../../utils";

const MoviesList = ({movies = [], genre}) => {
  const filteredMovies = filterMoviesOnGenre(movies, genre);

  return (
    <div className="catalog__movies-list">
      {filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  genre: state.activeGenre,
  movies: state.moviesList
});

MoviesList.propTypes = {
  ...moviesType
};

export {MoviesList};
export default connect(mapStateToProps, null)(MoviesList);
