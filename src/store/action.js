const ActionType = {
  GET_MOVIES_ON_GENRE: `movie/getMoviesOnGenre`
};

const ActionCreator = {
  getMoviesOnGenre: (genre) => ({
    type: ActionType.GET_MOVIES_ON_GENRE,
    payload: genre
  })
};

export {ActionType, ActionCreator};
