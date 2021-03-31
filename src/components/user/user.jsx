import React from 'react';
import {Link} from "react-router-dom";

import {userType} from "../../validation";

const User = ({isAuthorized}) => {
  if (isAuthorized) {
    return (
      <div className="user-block__avatar">
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

export default User;
