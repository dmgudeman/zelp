import { useSelector } from "react-redux";
import { getCurrentUser } from "./store/session";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute/PrivateRoute";
import LoginFormPage from "./components/Auth/LoginForm/LoginForm";
import SignupFormPage from "./components/Auth/SignupForm/SignupForm";
import Home from "./components/Home/Home";
import BusinessIndex from "./components/Business/BusinessIndex/BusinessIndex";
import BusinessShow from "./components/Business/BusinessShow/BusinessShow";
import ReviewsIndex from "./components/Reviews/ReviewsIndex/ReviewsIndex";
import ReviewNew from "./components/Reviews/ReviewNew";
import ReviewEdit from "./components/Reviews/ReviewEdit/ReviewEdit";

import Jupon from "./components/Jupon/Jupon";


function App() {
    const isLoggedIn = useSelector(getCurrentUser); 
    return (
        <>



            <Switch>
                <Route path="/login" component={LoginFormPage} />
                <Route path="/signup" component={SignupFormPage} />
                {/* <Route path="/home" component={Home} /> */}
                {/* <Route path="/reviews" component={ReviewsIndex} /> */}
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
                    component={ReviewNew}
                    isLoggedIn={isLoggedIn}
                />
                <Route path="/jupon" component={Jupon} />
                <Route path="/" component={Home} />
            </Switch>
           
        </>
    );
}

export default App;
