import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

import User from "../user/user";
import {fetchPlayingMovie, fetchPromoMovie, setFavorites} from "../../store/api-actions";
import {promoMovieType} from "../../validation";
import {checkLoadingPromo, getPromo} from "../../store/data/selectors";
import {checkUserAuth} from "../../store/user/selectors";
import {adaptMovie} from "../../adapter";

const PromoMovie = ({isLoaded, onLoadPromo, promo, isAuthorized, onFavoriteSubmit, onLoadMovie}) => {
  const adaptedPromo = adaptMovie(promo);
  const history = useHistory();

  const setPlayingMovie = (id) => {
    history.push(`/player/${id}`);
    onLoadMovie(id);
  };

  const myListHandler = (evt) => {
    evt.preventDefault();

    const favoriteData = {
      id: adaptedPromo.id,
      status: +!adaptedPromo.isFavorite
    };

    onFavoriteSubmit(favoriteData);
  };

  useEffect(() => {
    if (!isLoaded) {
      onLoadPromo();
    }
  }, [isLoaded]);

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={adaptedPromo.backgroundImage} alt={adaptedPromo.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <User isAuthorized={isAuthorized}/>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={adaptedPromo.posterImage} alt={adaptedPromo.name} width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{adaptedPromo.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{adaptedPromo.genre}</span>
              <span className="movie-card__year">{adaptedPromo.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button onClick={() => setPlayingMovie(adaptedPromo.id)} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button" onClick={myListHandler}>
                <svg viewBox="0 0 19 20" width="19" height="20">
                  {adaptedPromo.isFavorite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoMovie.propTypes = {
  ...promoMovieType
};

const mapStateToProps = (state) => ({
  isLoaded: checkLoadingPromo(state),
  promo: getPromo(state),
  isAuthorized: checkUserAuth(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadPromo() {
    dispatch(fetchPromoMovie());
  },

  onFavoriteSubmit(favoriteMovie) {
    dispatch(setFavorites(favoriteMovie));
    dispatch(fetchPromoMovie());
  },

  onLoadMovie(id) {
    dispatch(fetchPlayingMovie(id));
  }
});

export {PromoMovie};
export default connect(mapStateToProps, mapDispatchToProps)(PromoMovie);
