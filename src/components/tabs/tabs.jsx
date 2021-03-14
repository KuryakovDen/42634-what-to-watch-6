import React from "react";

import {moviesType} from "../../validation";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";

const Tabs = ({movie = {}, reviews = {}}) => {
  const TabTitles = {
    "OVERVIEW": `Overview`,
    "DETAILS": `Details`,
    "REVIEWS": `Reviews`,
  };

  const [activeTab, setActiveTab] = React.useState(TabTitles.OVERVIEW);

  const tabClickHandler = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.target.text);
  };

  const getActualTabComponent = (currentTab) => {
    switch (currentTab) {
      case TabTitles.DETAILS: return <MovieDetails movie={movie}/>;
      case TabTitles.REVIEWS: return <MovieReviews reviews={reviews}/>;

      default: return <MovieOverview movie={movie}/>;
    }
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            Object.values(TabTitles).map((tabTitle) => {
              return (
                <li key={tabTitle} className={tabTitle === activeTab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                  <a href="#" className="movie-nav__link" onClick={tabClickHandler}>
                    {tabTitle}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </nav>
      {getActualTabComponent(activeTab)}
    </div>
  );
};

Tabs.propTypes = {
  ...moviesType
};

export default Tabs;
