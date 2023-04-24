import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./store/session";
import Home from "./components/home";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/index";
import Navigation from "./components/Navigation";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {

  let sessionUser = useSelector(getCurrentUser);
  console.log('sessionUser', sessionUser);
  
    return (
        <>
            <Navigation/>
           
            <Switch>
              
                <Route path="/login" component={LoginFormPage} />
                <Route path="/signup" component={SignupFormPage} />
                <Route path="/home" component={Home} />
                <Route path="/" component={Home} />
            </Switch>
        </>
    );
}

export default App;

// await csrfFetch('/logout', { method: 'POST' }).then(res => res.json())
