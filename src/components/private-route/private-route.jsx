import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import {privateRouteType} from "../../validation";
import {checkUserAuth} from "../../store/user/selectors";
import {AuthorizationStatus} from "../../const";

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  if (authorizationStatus === AuthorizationStatus.WAIT) {
    return null;
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH ? render(routeProps) : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  ...privateRouteType
};

const mapStateToProps = (state) => ({
  authorizationStatus: checkUserAuth(state)
});

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
