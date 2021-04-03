import React from 'react';
import {connect} from "react-redux";

import {moviesType} from "../../validation";
import Videoplayer from "../videoplayer/videoplayer";
import {getMovie} from "../../store/data/selectors";
import {Link} from "react-router-dom";

const Player = ({movie}) => {
  console.log(movie)

  return (
    <div className="player">
      <Videoplayer movie={movie} poster={movie.poster_image} isPlaying={true}/>

      <Link to={`/`} className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
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
  movie: getMovie(state)
});

Player.propTypes = {
  ...moviesType
};

export {Player};
export default connect(mapStateToProps, null)(Player);
