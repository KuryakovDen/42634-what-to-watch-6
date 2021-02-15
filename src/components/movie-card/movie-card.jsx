import React from 'react';
import {Link} from "react-router-dom";

import {promoMovieValidation} from "../../validation";

const MovieCard = ({movie = {}, cardHoverHandler = {}}) => (
  <>
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => {
      cardHoverHandler(movie.id);
    }}>
      <div className="small-movie-card__image">
        <img src={movie.preview_image}
          alt={movie.name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/1`}>{movie.name}</Link>
      </h3>
    </article>
  </>
);

MovieCard.propTypes = {...promoMovieValidation};

export default MovieCard;
