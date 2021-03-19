import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';

import MovieCard from "../movie-card/movie-card";
import ShowMore from "../show-more/show-more";
import {moviesType} from "../../validation";
import {filterMoviesOnGenre} from "../../utils";
import {DEFAULT_MOVIES_COUNT, DEFAULT_PAGE} from "../../const";

const MoviesList = ({movies = [], genre}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(DEFAULT_PAGE);
  }, [genre]);

  const showMoreHandler = (evt) => {
    evt.preventDefault();
    setPage(page + 1);
  };

  let isShowingButton = true;

  const renderedMoviesCount = page * DEFAULT_MOVIES_COUNT;
  const allGenreMoviesCount = filterMoviesOnGenre(movies, genre).length;

  const showedMovies = filterMoviesOnGenre(movies, genre)
    .slice(0, renderedMoviesCount > movies.length ? movies.length : renderedMoviesCount);

  if (showedMovies.length === allGenreMoviesCount) {
    isShowingButton = false;
  }

  return (
    <>
      <div className="catalog__movies-list">
        {showedMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
      {isShowingButton && <ShowMore showMoreHandler = {showMoreHandler}/>}
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
