import React, {useEffect} from "react";

import {moviesType} from "../../validation";
import {DELAY_VIDEO} from "../../const";

const videoRef = React.createRef();

const Videoplayer = ({movie = {}, isMuted = true, isAutoPlay = true, isPlaying}) => {
  useEffect(() => {
    let timeoutId;

    if (isPlaying) {
      timeoutId = setTimeout(() => {
        videoRef.current.play();
      }, DELAY_VIDEO);
    } else {
      clearTimeout(timeoutId);
      videoRef.current.paused();
    }

    return () => clearTimeout(timeoutId);
  }, [isPlaying]);

  return (
    <video
      src={movie.video_link}
      className="player__video"
      poster={movie.poster_image}
      ref={videoRef}
      muted={isMuted}
      autoPlay={isAutoPlay}
    />
  );
};

Videoplayer.propTypes = {
  ...moviesType
};

export default Videoplayer;
