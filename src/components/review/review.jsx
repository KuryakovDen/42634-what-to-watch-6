import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {moviesType} from "../../validation";
import CommentForm from "../comment-form/comment-form";
import {getMovie} from "../../store/data/selectors";
import {adaptMovie} from "../../adapter";

const Review = ({movie}) => {
  const adaptedMovie = adaptMovie(movie);

  return (
    <section className="movie-card movie-card--full" style={{background: `${adaptedMovie.backgroundColor}`}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={adaptedMovie.backgroundImage} alt={adaptedMovie.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${adaptedMovie.id}`} className="breadcrumbs__link">{adaptedMovie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={adaptedMovie.posterImage} alt={adaptedMovie.name} width="218"
            height="327"/>
        </div>
      </div>

      <div className="add-review">
        <CommentForm></CommentForm>
      </div>
    </section>
  );
};

Review.propTypes = {
  ...moviesType
};

const mapStateToProps = (state) => ({
  movie: getMovie(state)
});

export {Review};
export default connect(mapStateToProps, null)(Review);
