import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {moviesType} from "../../validation";
import Tabs from "../tabs/tabs";
import MoreMovies from "../more-movies/more-movies";
import LoadingScreen from "../loading-screen/loading-screen";
import {fetchCurrentMovie} from "../../store/api-actions";
import {AuthorizationStatus} from "../../const";
import {User} from "../user/user";

const Movie = ({isLoaded, onLoadMovie, movie, history, authStatus, match}) => {
  const movieId = match.params.id;
  useEffect(() => {
    if (!isLoaded) {
      onLoadMovie(movieId);
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <LoadingScreen/>;
  }

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.preview_image} alt={movie.name}/>
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
              <User/>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {
                  authStatus === AuthorizationStatus.AUTH &&
                  <Link to={`${history.location.pathname}/review`} className="btn movie-card__button">Add review</Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movie.poster_image} alt={movie.name} width="218"
                height="327"/>
            </div>

            <Tabs movie={movie} match={match}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoreMovies currentMovie={movie}></MoreMovies>
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

const mapStateToProps = (state) => ({
  isLoaded: state.currentMovie.isLoaded,
  movie: state.currentMovie.data,
  authStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMovie(movieId) {
    dispatch(fetchCurrentMovie(movieId));
  }
});

Movie.propTypes = {
  ...moviesType
};

export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
