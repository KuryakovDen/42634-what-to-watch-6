import React from 'react';
import MainScreen from "../main/main";
import PropTypes from 'prop-types';

const App = (props = {}) => (
  <MainScreen {...props} />
);

App.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
  ),
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired
  })
};

export default App;
