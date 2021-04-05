import React, {useEffect, forwardRef} from "react";

import {moviesType} from "../../validation";
import {DELAY_VIDEO} from "../../const";

const Videoplayer = forwardRef((
    {
      movie = {},
      isMuted = true,
      isAutoPlay = true,
      isPlaying,
      onTimeUpdate
    },
    videoRef) => {

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
      src={movie.videoLink}
      className="player__video"
      poster={movie.posterImage}
      ref={videoRef}
      muted={isMuted}
      autoPlay={isAutoPlay}
      onTimeUpdate={onTimeUpdate}
    />
  );
});

Videoplayer.displayName = `Videoplayer`;

Videoplayer.propTypes = {
  ...moviesType
};

export default Videoplayer;
