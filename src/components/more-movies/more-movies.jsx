import React from 'react';

import {moviesType} from "../../validation";
import MovieCard from "../movie-card/movie-card";
import {MAX_LIKE_MOVIES_LENGTH} from "../../const";
import {connect} from "react-redux";

const MoreMovies = ({movies, currentMovie}) => {
  const moreLikeThisMovies = movies
    .filter((movie) => movie.genre === currentMovie.genre && movie.name !== currentMovie.name)
    .slice(0, MAX_LIKE_MOVIES_LENGTH);

  return (
    <>
      <div className="catalog__movies-list">
        {moreLikeThisMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </>
  );
};

const mapStateToProps = ({DATA}) => ({
  movies: DATA.movies.data,
  currentMovie: DATA.currentMovie.data
});

MoreMovies.propTypes = {
  ...moviesType
};

export {MoreMovies};
export default connect(mapStateToProps, null)(MoreMovies);
