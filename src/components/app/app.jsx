import React from 'react';
import MainScreen from "../main/main";

const App = (props) => {
  const {movies} = props;

  return <MainScreen
    movies = {movies}
  />;
};

export default App;
