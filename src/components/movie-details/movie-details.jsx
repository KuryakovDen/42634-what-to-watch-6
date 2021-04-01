import React from "react";
import {connect} from "react-redux";

import {moviesType} from "../../validation";
import {getMovieRuntime} from "../../utils";
import {getMovie} from "../../store/data/selectors";

const MovieDetails = ({movie}) => {
  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{movie.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">{movie.starring.join(`, `)}</span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getMovieRuntime(movie.run_time)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{movie.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{movie.released}</span>
          </p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movie: getMovie(state)
});

MovieDetails.propTypes = {
  ...moviesType
};

export {MovieDetails};
export default connect(mapStateToProps, null)(MovieDetails);
