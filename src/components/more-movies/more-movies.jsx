import React from 'react';

import {moviesType} from "../../validation";
import MovieCard from "../movie-card/movie-card";
import {MAX_LIKE_MOVIES_LENGTH} from "../../const";
import {connect} from "react-redux";
import {getMovie, getMovies} from "../../store/data/selectors";

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

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  currentMovie: getMovie(state)
});

MoreMovies.propTypes = {
  ...moviesType
};

export {MoreMovies};
export default connect(mapStateToProps, null)(MoreMovies);
