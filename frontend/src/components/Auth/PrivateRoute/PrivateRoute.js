import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, path, isLoggedIn }) => {
    return (
      <Route
        path={path}
        render={() => {
          if (isLoggedIn) {
            return <Component />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };

  export default PrivateRoute;