import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {userType} from "../../validation";

const User = ({isAuthorized}) => {
  if (isAuthorized) {
    return (
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
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
  isAuthorized: state.isAuthorized
});

User.propTypes = {
  ...userType
};

export {User};
export default connect(mapStateToProps, null)(User);
