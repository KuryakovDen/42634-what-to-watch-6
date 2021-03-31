import React, {useState, memo} from 'react';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

import {promoMovieType} from "../../validation";
import Videoplayer from "../videoplayer/videoplayer";

const MovieCard = ({movie}) => {
  const history = useHistory();
  const [isPlaying, setActiveVideo] = useState(false);

  const movieClickHandler = (evt) => {
    evt.preventDefault();
    history.push(`/films/${movie.id}`);
  };

  const mouseEnterHandler = () => {
    setActiveVideo(true);
  };

  const mouseLeaveHandler = () => {
    setActiveVideo(false);
  };

  return (
    <>
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}>
        <div className="small-movie-card__image">
          {isPlaying ? <Videoplayer movie={movie} isPlaying = {isPlaying}></Videoplayer> : <video poster={movie.preview_image} width="280" height="175"/>}
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${movie.id}`} onClick={(evt) => movieClickHandler(evt)}>{movie.name}</Link>
        </h3>
      </article>
    </>
  );
};

MovieCard.propTypes = {...promoMovieType};

export default memo(MovieCard);
