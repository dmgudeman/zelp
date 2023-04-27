import Home from "./components/Home";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/index";
import BusinessShow from "./components/Businesses/BusinessShow";
import ReviewsIndex from "./components/Reviews/ReviewsIndex";
import { Route, Switch } from "react-router-dom";
import Businesses from "./components/Businesses";
import ReviewNew from "./components/Reviews/ReviewNew";

function App() {
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
                <Route path="/" component={Home} />
            </Switch>
        </>
    );
}

export default App;
