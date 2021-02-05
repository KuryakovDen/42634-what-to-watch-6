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
        previewImage: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
  ),
  promoMovie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired
  })
};

export default App;
