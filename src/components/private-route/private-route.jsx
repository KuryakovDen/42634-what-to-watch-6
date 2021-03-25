import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../const";
import {privateRouteType} from "../../validation";

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

PrivateRoute.propTypes = {
  ...privateRouteType
};

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
