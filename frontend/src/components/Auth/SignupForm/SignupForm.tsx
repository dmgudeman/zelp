import React, { useState } from "react";
import { useDispatch as _useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ErrorAuth from "../../Helpers/Errors/ErrorAuth/ErrorAuth";
import DemoUserForm from "../DemoUserForm/DemoUserForm";
import { signup } from "../../../store/sessionSlice";
import { showLoginModal, hideSignupModal } from "../../../store/uiSlice";
import { clearSessionError } from "../../../store/sessionSlice";
import { RootState, AppDispatch } from "../../../store/store";
import "./SignupForm.css";

const useDispatch = () => _useDispatch<AppDispatch>();

const SignupForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state: RootState) => state.session.user);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");

    if (sessionUser) return <Redirect to="/" />;

    const handleShowLoginModal = () => {
        dispatch(hideSignupModal());
        dispatch(showLoginModal());
    };
    const clearErrors = () => {
        dispatch(clearSessionError());
    };

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        return dispatch(signup({ username, password, email, fullName })).catch(
            async (res) => {
                let data;
                try {
                    // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); // Will hit this case if the server is down
                }
            }
        );
    };

    return (
        <>
            {" "}
            <div
                id="combinedFormContainerSUF"
                onClick={(e) => e.stopPropagation()}
            >
                <div id="formContainerSUF">
                    <form id="inputFormSUF" onSubmit={submitHandler}>
                        <h2 id="titleSUF">Sign Up for Zelp</h2>
                        <input
                            className="inputSUF"
                            type="text"
                            value={username}
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={clearErrors}
                        />

                        <input
                            className="inputSUF"
                            type="text"
                            value={email}
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={clearErrors}
                        />

                        <input
                            className="inputSUF"
                            type="password"
                            value={password}
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={clearErrors}
                        />

                        <input
                            className="inputSUF"
                            type="password"
                            value={confirmPassword}
                            placeholder="confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onFocus={clearErrors}
                        />

                        <input
                            id="submitSUF"
                            className="inputSUF blueButton"
                            type="submit"
                            value="Sign Up"
                        />
                        <ErrorAuth />
                    </form>
                    <DemoUserForm />
                    <h1>
                        Already a Zelp user?{" "}
                        <button className="blueButton" onClick={() => handleShowLoginModal()}>
                            Log In
                        </button>
                    </h1>
                </div>
            </div>
        </>
    );
};

// const mapDispatchToProps = {
//     dispatchShowModal: showModal
//   };

//   export default connect(null, mapDispatchToProps)(SignupForm);

export default SignupForm;
