const MAX_LIKE_MOVIES_LENGTH = 4;
const DELAY_VIDEO = 1000;
const DEFAULT_MOVIES_COUNT = 8;
const DEFAULT_PAGE_COUNT = 1;
const DEFAULT_TIMEOUT = 5000;
const RATING_STARS_COUNT = 10;

const DEFAULT_GENRE = `All genres`;
const BACKEND_URL = `https://6.react.pages.academy/wtw`;

const AuthorizationStatus = {
  WAIT: `WAIT`,
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const Review = {
  MIN_REVIEW_LENGTH: 50,
  MAX_REVIEW_LENGTH: 400
};

const MovieRating = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

const MovieRatingValue = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10
};

const HttpCode = {
  NOT_FOUND: 404,
  UNAUTHORIZED: 401
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
  RATING_STARS_COUNT,
  DEFAULT_GENRE,
  BACKEND_URL,
  AuthorizationStatus,
  HttpCode,
  NameSpace,
  MovieRating,
  MovieRatingValue,
  Review
};
