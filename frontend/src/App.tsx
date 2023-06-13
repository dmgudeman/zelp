import React from 'react';
import { useSelector } from "react-redux";
import { getCurrentUser } from "./store/sessionSlice";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute/PrivateRoute";
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
    const isLoggedIn = useSelector(getCurrentUser);
 
    return (
        <>
            <ReviewModalNew />
            <ReviewModalEdit />
     
            <Switch>
                <Route path="/login" component={LoginFormPage} />
                <Route path="/signup" component={SignupFormPage} />
                <PrivateRoute
                    path="/businesses/:busId"
                    component={BusinessShow}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRoute
                    path="/businesses"
                    component={BusinessIndex}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRoute
                    path="/reviewNew/:busId"
                    component={ReviewNew}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRoute
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
