import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';

import MovieCard from "../movie-card/movie-card";
import ShowMore from "../show-more/show-more";
import {moviesType} from "../../validation";
import {filterMoviesOnGenre} from "../../utils";
import {DEFAULT_MOVIES_COUNT, DEFAULT_PAGE_COUNT} from "../../const";

const MoviesList = ({movies, genre}) => {
  const [page, setPage] = useState(DEFAULT_PAGE_COUNT);

  useEffect(() => {
    setPage(DEFAULT_PAGE_COUNT);
  }, [genre]);

  const showMoreHandler = (evt) => {
    evt.preventDefault();
    setPage(page + 1);
  };

  const preparedMovies = movies.slice(0, (page * DEFAULT_MOVIES_COUNT));
  const isShowingButton = !(preparedMovies.length >= movies.length);

  return (
    <>
      <div className="catalog__movies-list">
        {preparedMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
      {isShowingButton && <ShowMore showMoreHandler = {showMoreHandler}/>}
    </>
  );
};

const mapStateToProps = (state) => ({
  genre: state.activeGenre,
  movies: filterMoviesOnGenre(state.moviesList, state.activeGenre)
});

MoviesList.propTypes = {
  ...moviesType
};

export {MoviesList};
export default connect(mapStateToProps, null)(MoviesList);
