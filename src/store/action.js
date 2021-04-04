const ActionType = {
  GET_MOVIES_FOR_GENRE: `movie/getMoviesForGenre`,
  SET_MOVIES: `data/setMovies`,
  SET_PROMO_MOVIE: `data/setPromoMovie`,
  SET_CURRENT_MOVIE: `data/setCurrentMovie`,
  SET_COMMENTS_MOVIE: `data/setCommentsMovie`,
  SET_FAVORITE_MOVIES: `data/SetFavoriteMovies`,
  SET_PLAYING_MOVIE: `data/SetPlayingMovie`,
  REDIRECT_TO_ROUTE: `data/redirectToRoute`,
  REQUIRE_AUTH: `user/requireAuth`
};

const getMoviesForGenre = (genre) => ({
  type: ActionType.GET_MOVIES_FOR_GENRE,
  payload: genre
});

const setMovies = ({isFetching, isLoaded, data}) => ({
  type: ActionType.SET_MOVIES,
  payload: {isFetching, isLoaded, data}
});

const setPromoMovie = ({isFetching, isLoaded, data}) => ({
  type: ActionType.SET_PROMO_MOVIE,
  payload: {isFetching, isLoaded, data}
});

const setCurrentMovie = ({isFetching, isLoaded, data}) => ({
  type: ActionType.SET_CURRENT_MOVIE,
  payload: {isFetching, isLoaded, data}
});

const setCommentsMovie = ({isFetching, isLoaded, data}) => ({
  type: ActionType.SET_COMMENTS_MOVIE,
  payload: {isFetching, isLoaded, data}
});

const setFavoriteMovies = ({isFetching, isLoaded, data}) => ({
  type: ActionType.SET_FAVORITE_MOVIES,
  payload: {isFetching, isLoaded, data}
});

const setPlayingMovie = ({isFetching, isLoaded, data}) => ({
  type: ActionType.SET_PLAYING_MOVIE,
  payload: {isFetching, isLoaded, data}
});

const requireAuth = (status) => ({
  type: ActionType.REQUIRE_AUTH,
  payload: status
});

const redirectToRoute = (status) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: status
});

export {
  ActionType,
  getMoviesForGenre,
  setMovies,
  setPromoMovie,
  setCurrentMovie,
  setCommentsMovie,
  setFavoriteMovies,
  setPlayingMovie,
  requireAuth,
  redirectToRoute
};
