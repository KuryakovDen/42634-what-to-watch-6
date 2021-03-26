import React, {useEffect} from "react";
import {connect} from "react-redux";

import MovieReview from "../movie-review/movie-review";
import {reviewsType} from "../../validation";
import LoadingScreen from "../loading-screen/loading-screen";
import {fetchCommentsList} from "../../store/api-actions";

const MovieReviews = ({isLoaded, reviews, onLoadReviews, match}) => {
  const movieId = match.params.id;

  useEffect(() => {
    if (!isLoaded) {
      onLoadReviews(movieId);
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <LoadingScreen/>;
  }

  const firstReviewColumn = reviews.slice(0, Math.round(reviews.length / 2));
  const secondReviewColumn = reviews.slice(Math.round(reviews.length / 2));

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstReviewColumn.map((review) => <MovieReview key={review.id} review={review}/>)}
      </div>
      <div className="movie-card__reviews-col">
        {secondReviewColumn.map((review) => <MovieReview key={review.id} review={review}/>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoaded: state.comments.isLoaded,
  reviews: state.comments.data,
  movie: state.currentMovie.data.id
});

const mapDispatchToProps = (dispatch) => ({
  onLoadReviews(movieId) {
    dispatch(fetchCommentsList(movieId));
  }
});

MovieReviews.propTypes = {
  ...reviewsType
};

export {MovieReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MovieReviews);
