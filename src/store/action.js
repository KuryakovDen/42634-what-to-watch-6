const ActionType = {
  GET_MOVIES_FOR_GENRE: `movie/getMoviesForGenre`,
  SET_MOVIES: `data/setMovies`,
  REQUIRE_AUTH: `user/requireAuth`
};

const ActionCreator = {
  getMoviesForGenre: (genre) => ({
    type: ActionType.GET_MOVIES_FOR_GENRE,
    payload: genre
  }),
  setMovies: ({isFetching, isLoaded, data}) => ({
    type: ActionType.SET_MOVIES,
    payload: {isFetching, isLoaded, data}
  }),
  requireAuth: (status) => ({
    type: ActionType.REQUIRE_AUTH,
    payload: status
  })
};

export {ActionType, ActionCreator};
