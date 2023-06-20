import React from "react";
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
import ReviewModalRead from "./components/Modals/ReviewModal/ReviewModalRead/ReviewModalRead";
import type { RootState } from "./store/store";
import ReactGA from "react-ga";
import RouteChangeTracker from "./components/Helpers/GoogleAnalytics/RouteChangeTracker";

function App() {
    const sessionState = useSelector(getCurrentUser);
    const isLoggedIn = sessionState !== null;
    const modalFlag = useSelector((state: RootState) => state.ui.modalFlag);
    const TRACKING_ID = "G-RQN2VPGN4E";
    ReactGA.initialize(TRACKING_ID);

    const renderModal = () => {
        switch (modalFlag) {
            case "ReviewNew":
                return <ReviewModalNew />;
            case "ReviewEdit":
                return <ReviewModalEdit />;
            case "ReviewRead":
                return <ReviewModalRead />;
            default:
                return null;
        }
    };
    return (
        <>
            <RouteChangeTracker />
            {renderModal()}

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
