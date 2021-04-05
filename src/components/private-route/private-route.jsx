import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import {privateRouteType} from "../../validation";
import {checkUserAuth} from "../../store/user/selectors";

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

PrivateRoute.propTypes = {
  ...privateRouteType
};

const mapStateToProps = (state) => ({
  isAuthorized: checkUserAuth(state)
});

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
