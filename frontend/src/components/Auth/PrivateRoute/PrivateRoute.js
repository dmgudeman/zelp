import { Route, Redirect } from "react-router-dom";
import "./PrivateRoute.css";

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);

export default PrivateRoute;
