import React, {useEffect} from 'react';
import {connect} from "react-redux";

import User from "../user/user";
import {fetchPromoMovie} from "../../store/api-actions";
import {promoMovieType} from "../../validation";
import {checkLoadingPromo, getPromo} from "../../store/data/selectors";
import {checkUserAuth} from "../../store/user/selectors";
import {Link} from "react-router-dom";

const PromoMovie = ({isLoaded, onLoadPromo, promo, isAuthorized}) => {
  useEffect(() => {
    if (!isLoaded) {
      onLoadPromo();
    }
  }, [isLoaded]);

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promo.background_image} alt={promo.name}/>
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
            <img src={promo.poster_image} alt={promo.name} width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promo.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promo.genre}</span>
              <span className="movie-card__year">{promo.released}</span>
            </p>

            <div className="movie-card__buttons">
              <Link to={`/player/${promo.id}`} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
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


const mapStateToProps = (state) => ({
  isLoaded: checkLoadingPromo(state),
  promo: getPromo(state),
  isAuthorized: checkUserAuth(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadPromo() {
    dispatch(fetchPromoMovie());
  }
});

PromoMovie.propTypes = {
  ...promoMovieType
};

export {PromoMovie};
export default connect(mapStateToProps, mapDispatchToProps)(PromoMovie);
