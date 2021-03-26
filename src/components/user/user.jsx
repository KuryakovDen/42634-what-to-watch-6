import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {AuthorizationStatus} from "../../const";
import {userType} from "../../validation";

const User = ({authStatus}) => {
  if (authStatus === AuthorizationStatus.AUTH) {
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

const mapStateToProps = (state) => ({
  authStatus: state.authorizationStatus
});

User.propTypes = {
  ...userType
};

export {User};
export default connect(mapStateToProps, null)(User);
