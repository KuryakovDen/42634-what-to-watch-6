import React from 'react';
import {Route, Redirect} from 'react-router-dom';
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

PrivateRoute.propTypes = {
  ...privateRouteType
};

export default PrivateRoute;
