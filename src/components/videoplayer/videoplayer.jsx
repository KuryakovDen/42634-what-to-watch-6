import React, {useEffect, forwardRef} from "react";

import {moviesType} from "../../validation";
import {DELAY_VIDEO} from "../../const";
import {adaptMovie} from "../../adapter";

const Videoplayer = forwardRef((
    {
      movie = {},
      isMuted = true,
      isAutoPlay = true,
      isPlaying,
      onTimeUpdate
    },
    videoRef) => {
  const adaptedMovie = adaptMovie(movie);

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
      src={adaptedMovie.videoLink}
      className="player__video"
      poster={adaptedMovie.posterImage}
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
