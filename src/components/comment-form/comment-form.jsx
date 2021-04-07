import React, {Fragment, useRef, useState} from 'react';
import {connect} from "react-redux";

import {RATING_STARS_COUNT, Review} from "../../const";
import {sendComment} from "../../store/api-actions";
import {commentFormType} from "../../validation";
import {checkDisablingForm, getCommentError, getMovieId} from "../../store/data/selectors";
import {browserHistory} from "../../utils";
import {setCommentFormDisable} from "../../store/action";

const CommentForm = ({onSubmit, id, commentError, isFormDisabled}) => {
  const [commentForm, submitCommentForm] = useState({
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
          disabled={isFormDisabled}
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
      {
        commentError ?
          <div style={{color: `red`, textAlign: `center`}}>{commentError} <br/>
            You should set rating and comment necessarily. <br/> Please try again.
          </div>
          : ``
      }
      <div className="rating">
        <div className="rating__stars">{ratingStars}</div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          ref={commentRef}
          minLength={Review.MIN_REVIEW_LENGTH}
          maxLength={Review.MAX_REVIEW_LENGTH}
          name="review-text"
          id="review-text"
          placeholder="Review text"
          disabled={isFormDisabled}
          required={true}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isFormDisabled}>Post</button>
        </div>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  ...commentFormType
};

const mapStateToProps = (state) => ({
  id: getMovieId(state),
  commentError: getCommentError(state),
  isFormDisabled: checkDisablingForm(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(comment, id) {
    dispatch(setCommentFormDisable(true));
    dispatch(sendComment(comment));
    browserHistory.push(`/films/${id}`);
  }
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
