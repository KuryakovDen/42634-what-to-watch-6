import React from 'react';

import {moviesType} from "../../validation";
import MovieCard from "../movie-card/movie-card";
import {MAX_LIKE_MOVIES_LENGTH} from "../../const";

const MoreMovies = ({movies = {}, currentMovie = {}}) => {
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

MoreMovies.propTypes = {
  ...moviesType
};

export default MoreMovies;
