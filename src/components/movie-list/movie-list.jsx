import React from "react";
import {connect} from 'react-redux';

import MovieCard from "../movie-card/movie-card";
import {moviesType} from "../../validation";
import {DEFAULT_GENRE} from "../../const";
import {filterMoviesOnGenre} from "../../utils";

const MoviesList = ({movies = {}, genre = DEFAULT_GENRE}) => {
  return (
    <div className="catalog__movies-list">
      {filterMoviesOnGenre(movies, genre).map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.moviesList,
  genre: state.genre
});

MoviesList.propTypes = {
  ...moviesType
};

export {MoviesList};
export default connect(mapStateToProps, null)(MoviesList);
