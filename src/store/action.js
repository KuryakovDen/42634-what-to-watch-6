const ActionType = {
  GET_MOVIES_FOR_GENRE: `movie/getMoviesForGenre`,
  SET_MOVIES: `data/setMovies`
};

const ActionCreator = {
  getMoviesForGenre: (genre) => ({
    type: ActionType.GET_MOVIES_FOR_GENRE,
    payload: genre
  }),
  setMovies: (movies) => ({
    type: ActionType.SET_MOVIES,
    payload: movies
  })
};

export {ActionType, ActionCreator};
