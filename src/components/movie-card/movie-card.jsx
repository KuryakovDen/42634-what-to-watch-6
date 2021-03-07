import React from 'react';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

import {promoMovieType} from "../../validation";
import Videoplayer from "../videoplayer/videoplayer";

const MovieCard = ({movie = {}, cardHoverHandler = {}}) => {
  const history = useHistory();
  const DELAY_VIDEO = 1000;

  const movieClickHandler = (evt) => {
    evt.preventDefault();
    history.push(`/films/${movie.id}`);
  };

  const [isVideoActive, setActiveVideo] = React.useState(false);
  let timer = React.useRef(null);

  const mouseEnterHandler = () => {
    cardHoverHandler(movie.id);

    timer = setTimeout(() => {
      setActiveVideo(true);
    }, DELAY_VIDEO);
  };

  const mouseLeaveHandler = () => {
    cardHoverHandler(-1);

    clearTimeout(timer);
    setActiveVideo(false);
  };

  return (
    <>
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}>
        <div className="small-movie-card__image">
          {isVideoActive ? <Videoplayer movie={movie}></Videoplayer> : <img src={movie.preview_image}
            alt={movie.name} width="280" height="175"/>}
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
