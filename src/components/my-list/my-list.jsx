import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import MovieCard from "../movie-card/movie-card";
import {moviesType} from "../../validation";
import {getFavorites} from "../../store/data/selectors";
import {fetchFavoritesList} from "../../store/api-actions";

const MyList = ({favoriteMovies, onLoad}) => {
  return (
    <div className="user-page" onLoad={onLoad}>
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

MyList.propTypes = {
  ...moviesType
};

const mapStateToProps = (state) => ({
  favoriteMovies: getFavorites(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoad() {
    dispatch(fetchFavoritesList());
  }
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
