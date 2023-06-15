import React from 'react';
import { useSelector } from "react-redux";
import { getCurrentUser } from "./store/sessionSlice";
import { Route, Switch } from "react-router-dom";
import PrivateRouteTypescript from "./components/Auth/PrivateRoute/PrivateRouteTypescript";
import LoginFormPage from "./components/Auth/LoginForm/LoginForm";
import SignupFormPage from "./components/Auth/SignupForm/SignupForm";
import Home from "./components/Home/Home";
import BusinessIndex from "./components/Business/BusinessIndex/BusinessIndex";
import BusinessShow from "./components/Business/BusinessShow/BusinessShow";
import ReviewNew from "./components/Reviews/ReviewNew/ReviewNew";
import ReviewEdit from "./components/Reviews/ReviewEdit/ReviewEdit";
import ReviewModalNew from "./components/Modals/ReviewModal/ReviewModalNew/ReviewModalNew";
import ReviewModalEdit from "./components/Modals/ReviewModal/ReviewModalEdit/ReviewModalEdit";

function App() {
    const sessionState = useSelector(getCurrentUser);
    const isLoggedIn = sessionState !== null;
    return (
        <>
            <ReviewModalNew />
            <ReviewModalEdit />
     
            <Switch>
                <Route path="/login" component={LoginFormPage} />
                <Route path="/signup" component={SignupFormPage} />
                <PrivateRouteTypescript
                    path="/businesses/:busId"
                    component={BusinessShow}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRouteTypescript
                    path="/businesses"
                    component={BusinessIndex}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRouteTypescript
                    path="/reviewNew/:busId"
                    component={ReviewNew}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRouteTypescript
                    path="/reviewEdit/:reviewId"
                    component={ReviewEdit}
                    isLoggedIn={isLoggedIn}
                />
                <Route path="/" component={Home} />
            </Switch>
        </>
    );
}

export default App;
