import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => (
  <>
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="user-page__content">
        <h2 style={{
          textAlign: `center`
        }}>404. Page Not found
        </h2>
        <Link to="/" style={{
          textDecoration: `none`,
          display: `block`,
          textAlign: `center`,
          color: `#c9b37e`
        }}>
            Переход на главную страницу приложения
        </Link>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>
);

export default NotFound;
