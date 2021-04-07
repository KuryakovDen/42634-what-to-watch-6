import React from 'react';

import {moviesType} from "../../validation";
import MovieCard from "../movie-card/movie-card";
import {connect} from "react-redux";
import {similarMovies} from "../../store/data/selectors";

const MoreMovies = ({moreLikeThisMovies}) => {
  return (
    <div className="catalog__movies-list">
      {moreLikeThisMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
    </div>
  );
};

MoreMovies.propTypes = {
  ...moviesType
};

const mapStateToProps = (state) => ({
  moreLikeThisMovies: similarMovies(state)
});

export {MoreMovies};
export default connect(mapStateToProps, null)(MoreMovies);
