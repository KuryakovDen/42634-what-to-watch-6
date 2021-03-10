import React from "react";
import {moviesType} from "../../validation";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";

const Tabs = ({movie = {}}) => {
  return (
    <>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className="movie-nav__item movie-nav__item--active">
              <a href="#" className="movie-nav__link">Overview</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">Details</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">Reviews</a>
            </li>
          </ul>
        </nav>
        <MovieOverview movie={movie}/>
        {/*<MovieDetails movie={movie}/>*/}
      </div>
    </>
  );
};

Tabs.propTypes = {
  ...moviesType
};

export default Tabs;
