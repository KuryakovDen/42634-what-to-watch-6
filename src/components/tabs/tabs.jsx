import React from "react";
import {moviesType} from "../../validation";
import MovieReview from "../movie-review/movie-review";
import MovieCard from "../movie-card/movie-card";

const Tabs = ({movie = {}, reviews = {}}) => {
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

        {/*<div className="movie-card__text movie-card__row">*/}
        {/*  <div className="movie-card__text-col">*/}
        {/*    <p className="movie-card__details-item">*/}
        {/*      <strong className="movie-card__details-name">Director</strong>*/}
        {/*      <span className="movie-card__details-value">{movie.director}</span>*/}
        {/*    </p>*/}
        {/*    <p className="movie-card__details-item">*/}
        {/*      <strong className="movie-card__details-name">Starring</strong>*/}
        {/*      <span className="movie-card__details-value">{movie.starring.join(`, `)}</span>*/}
        {/*    </p>*/}
        {/*  </div>*/}

        {/*  <div className="movie-card__text-col">*/}
        {/*    <p className="movie-card__details-item">*/}
        {/*      <strong className="movie-card__details-name">Run Time</strong>*/}
        {/*      <span className="movie-card__details-value">{movie.run_time}</span>*/}
        {/*    </p>*/}
        {/*    <p className="movie-card__details-item">*/}
        {/*      <strong className="movie-card__details-name">Genre</strong>*/}
        {/*      <span className="movie-card__details-value">{movie.genre}</span>*/}
        {/*    </p>*/}
        {/*    <p className="movie-card__details-item">*/}
        {/*      <strong className="movie-card__details-name">Released</strong>*/}
        {/*      <span className="movie-card__details-value">{movie.released}</span>*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}


        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {/*{reviews.map((review) => <MovieReview key={review.id} review={review}/>)}*/}
          </div>
        </div>
      </div>
    </>
  );
};

Tabs.propTypes = {
  ...moviesType
};

export default Tabs;
