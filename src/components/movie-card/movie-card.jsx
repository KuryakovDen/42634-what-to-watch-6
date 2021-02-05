import React from 'react';
import PropTypes from "prop-types";

const MovieCard = (props = {}) => (
  <>
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={props.movie.image}
          alt={props.movie.title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{props.movie.title}</a>
      </h3>
    </article>
  </>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default MovieCard;
