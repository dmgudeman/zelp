import Home from "./components/Home";
<<<<<<< HEAD

import { useSelector } from "react-redux";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/index";
import BusinessShow from "./components/BusinessShow/BusinessShow";
import ReviewsIndex from "./components/Reviews/ReviewsIndex/ReviewsIndex";
import { Route, Switch } from "react-router-dom";
import ReviewNew from "./components/Reviews/ReviewNew";
import Businesses from "./components/Businesses";
import { getCurrentUser } from "./store/session";
 

function App() {

    const isLoggedIn = useSelector(getCurrentUser);
    return (
        <>
            <Switch> 
                { isLoggedIn || <Route path="/login" component={LoginFormPage} />}
                { isLoggedIn || <Route path="/signup" component={SignupFormPage} />}    
                <Route path="/home" component={Home} />
                <Route path='/reviews' component={ReviewsIndex}   />             
                <Route path="/businesses/:busId" component={BusinessShow} />
                <Route path="/businesses" component={Businesses} />
                <Route path="/reviewNew/:busId" component={ReviewNew} />
                <Route path="/" component={Home} />
            </Switch>
        </>
    );
}

export default App;
