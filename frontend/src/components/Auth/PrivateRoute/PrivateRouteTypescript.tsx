import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';

interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ComponentType<any>;
  isLoggedIn: boolean;
}

const PrivateRouteTypescript: React.FC<PrivateRouteProps> = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRouteTypescript;







