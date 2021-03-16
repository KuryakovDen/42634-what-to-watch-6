import React from "react";
import {connect} from 'react-redux';

import MovieCard from "../movie-card/movie-card";
import {moviesType} from "../../validation";

const MoviesList = ({genreMoviesList} = {}) => {
  return (
    <>
      <div className="catalog__movies-list">
        {genreMoviesList.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  genreMoviesList: state.genreMoviesList,
});

MoviesList.propTypes = {
  ...moviesType
};

export {MoviesList};
export default connect(mapStateToProps, null)(MoviesList);
