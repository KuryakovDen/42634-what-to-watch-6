import React from "react";

import MovieReview from "../movie-review/movie-review";
import {reviewsType} from "../../validation";

const MovieReviews = ({reviews = {}}) => {
  const firstReviewColumn = reviews.slice(0, Math.round(reviews.length / 2));
  const secondReviewColumn = reviews.slice(Math.round(reviews.length / 2));

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {firstReviewColumn.map((review) => <MovieReview key={review.id} review={review}/>)}
        </div>
        <div className="movie-card__reviews-col">
          {secondReviewColumn.map((review) => <MovieReview key={review.id} review={review}/>)}
        </div>
      </div>
    </>
  );
};

MovieReviews.propTypes = {
  ...reviewsType
};

export default MovieReviews;
