import React from "react";
import MovieCard from "../movie-card/movie-card";
import {moviesValidation} from "../../validation";

const MoviesList = ({movies} = {}) => {
  const [activeMovieCard, setActiveMovieCard] = React.useState(undefined);
  return (
    <>
      <div className="catalog__movies-list">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} cardHoverHandler={setActiveMovieCard}/>)}
      </div>
    </>
  );
};

MoviesList.propTypes = {
  ...moviesValidation
};

export default MoviesList;
