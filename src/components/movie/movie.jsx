import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {moviesType} from "../../validation";
import Tabs from "../tabs/tabs";
import MoreMovies from "../more-movies/more-movies";
import LoadingScreen from "../loading-screen/loading-screen";
import {fetchCurrentMovie, fetchPlayingMovie, setFavorites} from "../../store/api-actions";
import User from "../user/user";
import {checkLoadingMovie, checkNotFoundMovie, getMovie} from "../../store/data/selectors";
import {checkUserAuth} from "../../store/user/selectors";
import {AuthorizationStatus} from "../../const";
import {adaptMovie} from "../../adapter";

const Movie = (
    {
      isLoaded,
      onLoadMovie,
      movie,
      history,
      authorizationStatus,
      match,
      isNotFound,
      onFavoriteSubmit
    }
) => {
  const adaptedMovie = adaptMovie(movie);
  const movieId = match.params.id;

  const myListHandler = (evt) => {
    evt.preventDefault();

    const favoriteData = {
      id: adaptedMovie.id,
      status: +!adaptedMovie.isFavorite
    };

    onFavoriteSubmit(favoriteData, favoriteData.id);
  };

  useEffect((isLoad) => {
    if (!isLoad) {
      onLoadMovie(movieId);
    }
  }, [movieId]);

  useEffect(() => {
    if (isNotFound) {
      history.push(`/not-found`);
    }
  }, [isNotFound]);

  if (!isLoaded) {
    return <LoadingScreen/>;
  }

  return (
    <>
      <section className="movie-card movie-card--full" style={{background: `${adaptedMovie.backgroundColor}`}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={adaptedMovie.backgroundImage} alt={adaptedMovie.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={`/`} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <User authorizationStatus={authorizationStatus}/>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{adaptedMovie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{adaptedMovie.genre}</span>
                <span className="movie-card__year">{adaptedMovie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${adaptedMovie.id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button" onClick={myListHandler}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    {adaptedMovie.isFavorite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
                  </svg>
                  <span>My list</span>
                </button>
                {
                  authorizationStatus === AuthorizationStatus.AUTH &&
                  <Link to={`${history.location.pathname}/review`} className="btn movie-card__button">Add review</Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={adaptedMovie.posterImage} alt={adaptedMovie.name} width="218"
                height="327"/>
            </div>

            <Tabs movie={movie} match={match}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoreMovies></MoreMovies>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={`/`} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

Movie.propTypes = {
  ...moviesType
};

const mapStateToProps = (state) => ({
  isLoaded: checkLoadingMovie(state),
  movie: getMovie(state),
  authorizationStatus: checkUserAuth(state),
  isNotFound: checkNotFoundMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMovie(movieId) {
    dispatch(fetchCurrentMovie(movieId));
    dispatch(fetchPlayingMovie(movieId));
  },

  onFavoriteSubmit(favoriteMovie) {
    dispatch(setFavorites(favoriteMovie));
  }
});

export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
