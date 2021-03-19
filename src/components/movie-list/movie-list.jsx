import React from "react";
import {connect} from 'react-redux';

import MovieCard from "../movie-card/movie-card";
import {moviesType} from "../../validation";
import {filterMoviesOnGenre} from "../../utils";
import ShowMore from "../show-more/show-more";
import {DEFAULT_MOVIES_COUNT} from "../../const";

const MoviesList = ({movies = [], genre, page = 1}) => {
  const renderedMoviesCount = page * DEFAULT_MOVIES_COUNT;
  const filteredMovies = filterMoviesOnGenre(movies, genre)
    .slice(0, renderedMoviesCount > movies.length ? movies.length : renderedMoviesCount);

  return (
    <>
      <div className="catalog__movies-list">
        {filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
      <ShowMore filteredMovies = {filteredMovies.length}/>
    </>
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
