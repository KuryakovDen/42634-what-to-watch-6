import React from "react";

import MovieCard from "../movie-card/movie-card";
import {moviesType} from "../../validation";

const MoviesList = ({movies} = {}) => {
  const [, setActiveMovieCard] = React.useState(null);
  return (
    <>
      <div className="catalog__movies-list">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} cardHoverHandler={setActiveMovieCard}/>)}
      </div>
    </>
  );
};

MoviesList.propTypes = {
  ...moviesType
};
export default MoviesList;
