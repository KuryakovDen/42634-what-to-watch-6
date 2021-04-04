import React, {useState, useRef} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {moviesType} from "../../validation";
import Videoplayer from "../videoplayer/videoplayer";
import {getPlayingMovie} from "../../store/data/selectors";
import {getPlayMovieRuntime} from "../../utils";

const Player = ({movie}) => {
  const playerRef = useRef();

  const [playingButton, setPlaying] = useState(<use xlinkHref="#pause"/>);

  const onClickFullScreen = () => {
    playerRef.current.requestFullscreen();
  };

  const onClickPause = () => {
    if (playerRef.current.paused) {
      setPlaying(<use xlinkHref="#pause"/>);
      playerRef.current.play();
    } else {
      setPlaying(<use xlinkHref="#play-s"/>);
      playerRef.current.pause();
    }
  };

  setInterval(() => {
    console.log(`a`);
  }, 2000)

  return (
    <div className="player">
      <Videoplayer movie={movie} poster={movie.poster_image} isPlaying={true} ref={playerRef}/>

      <Link to={`/`} className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getPlayMovieRuntime(movie.run_time)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onClickPause}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              {playingButton}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={onClickFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: getPlayingMovie(state)
});

Player.propTypes = {
  ...moviesType
};

export {Player};
export default connect(mapStateToProps, null)(Player);
