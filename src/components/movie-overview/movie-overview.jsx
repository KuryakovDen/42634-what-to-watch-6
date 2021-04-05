import React from "react";
import {connect} from "react-redux";

import {moviesType} from "../../validation";
import {getRatingName} from "../../utils";
import {getMovie} from "../../store/data/selectors";
import {adaptMovie} from "../../adapter";

const MovieOverview = ({movie}) => {
  const overviewMovie = adaptMovie(movie);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{overviewMovie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingName(overviewMovie.rating)}</span>
          <span className="movie-rating__count">{overviewMovie.scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{overviewMovie.description}</p>
        <p className="movie-card__director"><strong>Director: {overviewMovie.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {overviewMovie.starring.join(`, `)}</strong></p>
      </div>
    </>
  );
};

MovieOverview.propTypes = {
  ...moviesType
};

const mapStateToProps = (state) => ({
  movie: getMovie(state)
});

export {MovieOverview};
export default connect(mapStateToProps, null)(MovieOverview);
