import React, {useState} from "react";
import {showMoreType} from "../../validation";
import {DEFAULT_MOVIES_COUNT} from "../../const";

const ShowMore = ({filteredMoviesCount}) => {
  let [page, incrementPage] = useState(1);

  const showMoreHandler = (evt) => {
    evt.preventDefault();
    incrementPage(page += 1);
  };

  return (
    <div className={filteredMoviesCount < DEFAULT_MOVIES_COUNT ? `visually-hidden` : `catalog__more`}>
      <button className="catalog__button" type="button" onClick={showMoreHandler}>Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  ...showMoreType
};

export default ShowMore;
