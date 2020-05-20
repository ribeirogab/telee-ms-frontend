/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import isAuthenticated from '../services/AuthenticateService';

const PrivateRoute = ({
  component,
  permissions,
  ...rest
}: any): JSX.Element => {
  const routeComponent = (props: any): JSX.Element =>
    isAuthenticated(permissions) ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/' }} />
    );

  return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
