import React, {memo} from 'react';

import {reviewsType} from "../../validation";
import {convertReviewDate} from "../../utils";

const MovieReview = ({review = {}}) => {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{convertReviewDate(review.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
};

MovieReview.propTypes = {
  ...reviewsType
};

export default memo(MovieReview);
