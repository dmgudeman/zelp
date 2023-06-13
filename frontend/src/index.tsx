import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./store/store";
import * as sessionActions from "./store/sessionSlice";

function Root() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}
const renderApplication = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Root />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

if (
    sessionStorage.getItem("X-CSRF-Token") === null ||
    sessionStorage.getItem("currentUser") === null
) {
    store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
    renderApplication();
}
