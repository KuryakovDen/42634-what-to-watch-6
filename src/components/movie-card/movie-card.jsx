import React from 'react';
import {promoMovieValidation} from "../../validation";

const MovieCard = ({movie = {}}) => (
  <>
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={movie.preview_image}
          alt={movie.name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>
      </h3>
    </article>
  </>
);

MovieCard.propTypes = {...promoMovieValidation};

export default MovieCard;
