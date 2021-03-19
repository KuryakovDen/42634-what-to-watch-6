import React from "react";
import {showMoreType} from "../../validation";

const ShowMore = ({showMoreHandler}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={showMoreHandler}>Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  ...showMoreType
};

export default ShowMore;
