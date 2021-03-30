import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import {privateRouteType} from "../../validation";

const PrivateRoute = ({render, path, exact, isAuthorized}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isAuthorized ? render(routeProps) : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

const mapStateToProps = ({USER}) => ({
  isAuthorized: USER.isAuthorized
});

PrivateRoute.propTypes = {
  ...privateRouteType
};

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
