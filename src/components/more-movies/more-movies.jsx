import React from 'react';

import {moviesType} from "../../validation";
import MovieCard from "../movie-card/movie-card";

const MoreMovies = ({movies = {}, currentMovie = {}}) => {
  const MAX_LIKE_MOVIES = 4;
  const moreLikeThisMovies = movies.filter((movie) => movie.genre === currentMovie.genre && movie.name !== currentMovie.name).slice(0, MAX_LIKE_MOVIES);

  return (
    <>
      <div className="catalog__movies-list">
        {moreLikeThisMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </>
  );
};

MoreMovies.propTypes = {
  ...moviesType
};

export default MoreMovies;
