const ActionType = {
  GET_MOVIES_FOR_GENRE: `movie/getMoviesForGenre`,
  LOAD_MOVIES: `data/loadMovies`
};

const ActionCreator = {
  getMoviesForGenre: (genre) => ({
    type: ActionType.GET_MOVIES_FOR_GENRE,
    payload: genre
  }),
  loadMovies: (movies) => ({
    type: ActionType.GET_MOVIES_FOR_GENRE,
    payload: movies
  })
};

export {ActionType, ActionCreator};
