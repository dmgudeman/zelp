import Home from "./components/Home";
import { useSelector } from "react-redux";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/index";
import { Route, Switch } from "react-router-dom";
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
                <Route path="/businesses" component={Businesses} />
                <Route path="/" component={Home} />
            </Switch>
        </>
    );
}

export default App;
