import Home from "./components/Home";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/index";
import BusinessShow from "./components/Businesses/BusinessShow";
import { Route, Switch } from "react-router-dom";
import Businesses from "./components/Businesses";
import NewReview from "./components/Reviews/NewReview";

function App() {
    return (
        <>
            <Switch>
                <Route path="/login" component={LoginFormPage} />
                <Route path="/signup" component={SignupFormPage} />
                <Route path="/home" component={Home} />
                <Route path="/businesses/:busId" component={BusinessShow} />
                <Route path="/businesses" component={Businesses} />
                <Route path="/newReview/:busId" component={NewReview} />
                <Route path="/" component={Home} />
            </Switch>
        </>
    );
}

export default App;
