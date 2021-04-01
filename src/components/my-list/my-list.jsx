import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import MovieCard from "../movie-card/movie-card";
import {moviesType} from "../../validation";
import {checkLoadingFavorites, getMovies} from "../../store/data/selectors";
import LoadingScreen from "../loading-screen/loading-screen";
import {fetchFavoritesList} from "../../store/api-actions";

const MyList = ({favoriteMovies, onLoadFavorites, isLoaded}) => {
  // const favoriteMovies = movies.filter((movie) => movie.is_favorite);

  useEffect(() => {
    if (!isLoaded) {
      onLoadFavorites();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <LoadingScreen/>;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={`/`} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {
          favoriteMovies
          &&
          <div className="catalog__movies-list">
            {favoriteMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
          </div>
        }
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
  );
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  isLoaded: checkLoadingFavorites(state)
});
const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites() {
    dispatch(fetchFavoritesList());
  }
});

MyList.propTypes = {
  ...moviesType
};

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
