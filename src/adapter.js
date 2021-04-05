const adaptMovie = ({
  poster_image: posterImage,
  preview_image: previewImage,
  background_image: backgroundImage,
  background_color: backgroundColor,
  scores_count: scoresCount,
  run_time: runTime,
  is_favorite: isFavorite,
  video_link: videoLink,
  preview_video_link: previewVideoLink,
  ...rest
}) => ({
  ...rest,
  posterImage,
  previewImage,
  backgroundImage,
  backgroundColor,
  scoresCount,
  runTime,
  isFavorite,
  videoLink,
  previewVideoLink
});

export {adaptMovie};
