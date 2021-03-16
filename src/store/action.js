const ActionType = {
  GET_MOVIES_FOR_GENRE: `movie/getMoviesForGenre`
};

const ActionCreator = {
  getMoviesForGenre: (genre) => ({
    type: ActionType.GET_MOVIES_FOR_GENRE,
    payload: genre
  })
};

export {ActionType, ActionCreator};
