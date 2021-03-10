import React from "react";

import MovieReview from "../movie-review/movie-review";
import {reviewsType} from "../../validation";

const MovieReviews = ({reviews = {}}) => {
  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {reviews.map((review) => <MovieReview key={review.id} review={review}/>)}
        </div>
      </div>
    </>
  );
};

MovieReviews.propTypes = {
  ...reviewsType
};

export default MovieReviews;
