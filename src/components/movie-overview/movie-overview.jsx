import React from "react";
import {connect} from "react-redux";

import {moviesType} from "../../validation";
import {getRatingName} from "../../utils";

const MovieOverview = ({movie = {}}) => {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingName(movie.rating)}</span>
          <span className="movie-rating__count">{movie.scores_count} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{movie.description}</p>
        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {movie.starring.join(`, `)}</strong></p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movie: state.currentMovie.data
});

MovieOverview.propTypes = {
  ...moviesType
};

export {MovieOverview};
export default connect(mapStateToProps, null)(MovieOverview);
