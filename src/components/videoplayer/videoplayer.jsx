import React from "react";
import {moviesType} from "../../validation";

const videoRef = React.createRef();

const Videoplayer = ({movie = {}, isMuted = true, isPlaying = true}) => {
  return (
    <video
      src={movie.video_link}
      className="player__video"
      poster={movie.poster_image}
      ref={videoRef}
      muted={isMuted}
      autoPlay={isPlaying}
    />
  );
};

Videoplayer.propTypes = {
  ...moviesType
};

export default Videoplayer;
