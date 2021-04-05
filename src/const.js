const MAX_LIKE_MOVIES_LENGTH = 4;
const DELAY_VIDEO = 1000;
const DEFAULT_MOVIES_COUNT = 8;
const DEFAULT_PAGE_COUNT = 1;
const DEFAULT_TIMEOUT = 5000;
const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 400;
const RATING_STARS_COUNT = 10;

const DEFAULT_GENRE = `All genres`;
const BACKEND_URL = `https://6.react.pages.academy/wtw`;

const MovieRating = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

const HttpCode = {
  NOT_FOUND: 404
};

const NameSpace = {
  DATA: `DATA`,
  MOVIE: `MOVIE`,
  USER: `USER`
};

export {
  MAX_LIKE_MOVIES_LENGTH,
  DELAY_VIDEO,
  DEFAULT_MOVIES_COUNT,
  DEFAULT_PAGE_COUNT,
  DEFAULT_TIMEOUT,
  MIN_REVIEW_LENGTH,
  MAX_REVIEW_LENGTH,
  RATING_STARS_COUNT,
  DEFAULT_GENRE,
  BACKEND_URL,
  HttpCode,
  NameSpace,
  MovieRating
};
