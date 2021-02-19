import React from "react";
import {moviesType} from "../../validation";

const VideoSettings = {
  VIDEOPLAYER_DELAY: 1000,
  IS_MUTED: true,
  IS_AUTOPLAY: true
};

const videoRef = React.createRef();

const handlePlay = () => {
  setTimeout(() => {
    console.log(videoRef.current);
    // ref.current.classList.add(`visually-hidden`);
  }, VideoSettings.VIDEOPLAYER_DELAY);
};

const Videoplayer = ({movie = {}}) => {
  return (
    <>
      <video
        src={movie.video_link}
        className="player__video"
        poster={movie.poster_image}
        onMouseOver={handlePlay}
        ref={videoRef}
        muted={VideoSettings.IS_MUTED}
        autoPlay={VideoSettings.IS_AUTOPLAY}
      >
      </video>
    </>
  );
};

Videoplayer.propTypes = {
  ...moviesType
};

export default Videoplayer;
