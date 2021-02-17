import React from 'react';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

import {promoMovieType} from "../../validation";

const MovieCard = ({movie = {}, cardHoverHandler = {}}) => {
  const history = useHistory();

  const movieClickHandler = (evt) => {
    evt.preventDefault();
    history.push(`/films/${movie.id}`);
  };

  return (
    <>
      <article className="small-movie-card catalog__movies-card" onMouseOver={() => {
        cardHoverHandler(movie.id);
      }}>
        <div className="small-movie-card__image">
          <img src={movie.preview_image}
            alt={movie.name} width="280" height="175"/>
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${movie.id}`} onClick={(evt) => movieClickHandler(evt)}>{movie.name}</Link>
        </h3>
      </article>
    </>
  );
};

MovieCard.propTypes = {...promoMovieType};

export default MovieCard;
