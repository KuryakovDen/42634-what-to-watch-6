import React from 'react';

const MovieCard = (props) => {
  return <>
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={props.movie.image}
          alt={props.movie.title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{props.movie.title}</a>
      </h3>
    </article>
  </>;
};

export default MovieCard;
