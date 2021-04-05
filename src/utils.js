import {DEFAULT_GENRE, MovieRating} from "./const";
import {createBrowserHistory} from "history";

const getRatingName = (rating) => {
  let ratingName = ``;

  switch (true) {
    case rating > 0 && rating <= 3: ratingName = MovieRating.BAD;
      break;
    case rating > 3 && rating <= 5: ratingName = MovieRating.NORMAL;
      break;
    case rating > 5 && rating <= 8: ratingName = MovieRating.GOOD;
      break;
    case rating > 8 && rating < 10: ratingName = MovieRating.VERY_GOOD;
      break;

    default: ratingName = MovieRating.AWESOME;
  }

  return ratingName;
};

const getMovieRuntime = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime - 60 * hours;

  return `${hours}h ${minutes}min`;
};

const getPlayMovieRuntime = (seconds) => {
  let time = Math.floor(seconds / 60);
  let hours = Math.floor(time / 60);
  let minutes = time % 60;
  let sec = Math.floor((seconds - (time * 60) - (hours * 60) - minutes) % 60);

  return `${hours}:${minutes}:${sec}`;
};

const convertReviewDate = (date) => {
  const Months = {
    "01": `January`,
    "02": `February`,
    "03": `March`,
    "04": `April`,
    "05": `May`,
    "06": `June`,
    "07": `July`,
    "08": `August`,
    "09": `September`,
    "10": `October`,
    "11": `November`,
    "12": `December`
  };

  const getMonth = (monthNumber) => {
    return Months[monthNumber];
  };

  const month = date.substr(5, 2);
  const number = date.substr(8, 2);
  const year = date.substr(0, 4);
  const convertedDate = `${number} ${getMonth(month)}, ${year}`;

  return convertedDate;
};

const filterMoviesOnGenre = (movies, genre) => {
  return genre === DEFAULT_GENRE ? movies : movies.filter((movie) => movie.genre === genre);
};

const getAllGenres = (movieList) => {
  return [DEFAULT_GENRE, ...new Set(movieList.map((movie) => movie.genre))];
};

const browserHistory = createBrowserHistory();

export {
  getRatingName,
  getMovieRuntime,
  getPlayMovieRuntime,
  convertReviewDate,
  filterMoviesOnGenre,
  getAllGenres,
  browserHistory
};
