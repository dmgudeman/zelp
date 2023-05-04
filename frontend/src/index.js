import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import {showModal, hideModal} from './store/ui'
import csrfFetch from "./store/csrf";
import * as sessionActions from "./store/session";
// import Modal from './components/Modal/Modal';

const store = configureStore();

// const handleLoginClick = () => {
//     store.dispatch(showModal('LOGIN'));
//   };

//   const handleSignUpClick = () => {
//     store.dispatch(showModal('SIGNUP'));
//   };

//   const handleReviewClick = () => {
//     store.dispatch(showModal('REVIEW'));
//   };

//   const handleCloseModal = () => {
//     store.dispatch(hideModal());
//   };

function Root() {
    return (
        <Provider store={store}>

{/* <div>
        <button onClick={handleLoginClick}>Show Login Form</button>
        <button onClick={handleSignUpClick}>Show Sign Up Form</button>
        <button onClick={handleReviewClick}>Show Review Form</button>
        <Modal closeModal={handleCloseModal} />
      </div> */}
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
