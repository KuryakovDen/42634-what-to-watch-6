import React from 'react';
import {Link} from "react-router-dom";

import {userType} from "../../validation";
import {connect} from "react-redux";
import {fetchFavoritesList} from "../../store/api-actions";
import {AuthorizationStatus} from "../../const";

const User = ({isAuthorized, onUserClick}) => {
  if (isAuthorized === AuthorizationStatus.AUTH) {
    return (
      <div className="user-block__avatar" onClick={onUserClick}>
        <Link to={`/mylist`}>
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </Link>
      </div>
    );
  }

  return (
    <div className="user-block">
      <Link to={`/login`} className="user-block__link">Sign in</Link>
    </div>
  );
};

User.propTypes = {
  ...userType
};

const mapDispatchToProps = (dispatch) => ({
  onUserClick() {
    dispatch(fetchFavoritesList());
  }
});

export {User};
export default connect(null, mapDispatchToProps)(User);
