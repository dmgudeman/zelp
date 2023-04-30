import Home from "./components/Home";

import { useSelector } from "react-redux";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/index";
import BusinessShow from "./components/BusinessShow/BusinessShow";
import ReviewsIndex from "./components/Reviews/ReviewsIndex/ReviewsIndex";
import Test from "./components/Test/Test";
import { Route, Switch } from "react-router-dom";
import ReviewNew from "./components/Reviews/ReviewNew";
import Businesses from "./components/BusinessIndex/BusinessIndex";
import { getCurrentUser } from "./store/session";
 

function App() {

    const isLoggedIn = useSelector(getCurrentUser);
    return (
        <>
            <Switch> 
               <Route path="/login" component={LoginFormPage} />
               <Route path="/signup" component={SignupFormPage} />  
                <Route path="/home" component={Home} />
                <Route path='/reviews' component={ReviewsIndex}   />             
                <Route path="/businesses/:busId" component={BusinessShow} />
                <Route path="/businesses" component={Businesses} />
                <Route path="/reviewNew/:busId" component={ReviewNew} />
                <Route path="/test"  component={Test}/>
                <Route path="/" component={Home} />
            </Switch>
        </>
    );
}

export default App;
