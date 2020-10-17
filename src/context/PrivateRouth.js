import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !user ? <Redirect to={'/login'} /> : <RouteComponent {...routeProps} />
      }
    />
  );
};

export default PrivateRoute;
