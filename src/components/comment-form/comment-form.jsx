import React, {Fragment, useRef} from 'react';
import {connect} from "react-redux";

import {MIN_REVIEW_LENGTH, MAX_REVIEW_LENGTH, RATING_STARS_COUNT} from "../../const";
import {sendComment} from "../../store/api-actions";
import {commentFormType} from "../../validation";
import {getMovieId} from "../../store/data/selectors";
import {browserHistory} from "../../utils";

const CommentForm = ({onSubmit, id}) => {
  const [commentForm, submitCommentForm] = React.useState({
    rating: 0,
    comment: ``
  });

  const commentRef = useRef();
  const setField = ({target}) => submitCommentForm((prevState) => ({...prevState, [target.name]: target.value}));

  const ratingStars = new Array(RATING_STARS_COUNT).fill().map((el, index) => {
    return (
      <Fragment key={`star-${index}`}>
        <input
          className="rating__input"
          id={`star-${index}`}
          type="radio" name="rating"
          value={index + 1}
          defaultChecked={index === 0}
          onChange={setField}
        />
        <label className="rating__label" htmlFor={`star-${index}`}>Rating {index + 1} </label>
      </Fragment>
    );
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const movieComment = {
      id,
      rating: commentForm.rating,
      comment: commentRef.current.value
    };

    onSubmit(movieComment, movieComment.id);
  };

  return (
    <form onSubmit={handleSubmit} action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">{ratingStars}</div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          ref={commentRef}
          minLength={MIN_REVIEW_LENGTH}
          maxLength={MAX_REVIEW_LENGTH}
          name="review-text"
          id="review-text"
          placeholder="Review text"
          required={true}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  ...commentFormType
};

const mapStateToProps = (state) => ({
  id: getMovieId(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(comment, id) {
    dispatch(sendComment(comment));
    browserHistory.push(`/films/${id}`);
  }
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
