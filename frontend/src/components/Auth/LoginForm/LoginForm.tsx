import React from "react";
import { useState } from "react";
import { login, getCurrentUser } from "../../../store/sessionSlice";
import { useDispatch as _useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import DemoUserForm from "../DemoUserForm/DemoUserForm";
import ErrorLocal from "../../Helpers/Errors/ErrorLocal/ErrorLocal";
import { AppDispatch } from "../../../store/store";
import { hideLoginModal, showSignupModal } from "../../../store/uiSlice";
import "./LoginForm.css";

const useDispatch = () => _useDispatch<AppDispatch>();

const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(getCurrentUser);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<string[]>([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleShowSignupModal = () => {
        dispatch(showSignupModal());
        dispatch(hideLoginModal());
    };

    const clearErrors = () => {
        setErrors([]);
    }

    const submitHandler = (e: React.FormEvent) => {
        setErrors([])
        e.preventDefault();
        let isValid = true;
        if (!credential ) {
            setErrors((prev)=> [...prev, "username or email is invalid"]);
            isValid = false;
        }
        if (!password ) {
            setErrors((prev)=> [...prev, "password is invalid"]);
            isValid = false;
        }
        if(!isValid) return;
       return dispatch(login({ credential, password })).catch(
        async (res) => {
            let data;
            try {
                // .clone() essentially allows you to read the response body twice
                data = await res.clone().json();
            } catch {
                data = await res.text(); // Will hit this case if the server is down
            }
        });
    };


    return (
        <>
            <div
                id="combinedFormContainerLIF"
                onClick={(e) => e.stopPropagation()}
            >
                <div id="formContainerLIF">
                    <form id="inputFormLIF" onSubmit={submitHandler}>
                        <h2 id="titleLIF">Log in to Zelp</h2>
                        <input
                            className="inputLIF"
                            type="text"
                            value={credential}
                            placeholder="username or email"
                            onChange={(e) => setCredential(e.target.value)}
                            onFocus={clearErrors}
                        />

                        <input
                            className="inputLIF"
                            type="password"
                            value={password}
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={clearErrors}
                        />
                        
                        <input
                            id="submitSUF"
                            className="inputSUF blueButton"
                            type="submit"
                            value="Log In"
                        />
                        <ErrorLocal errors={errors}/>
                        {/* <ul id="errorLIF">
                            {errors.map((error) => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul> */}
                    </form>
                    <DemoUserForm />
                </div>
                <h1 id="lastLineLIF">
                    New to Zelp?{" "}
                    <button onClick={() => handleShowSignupModal()}>
                        Sign Up
                    </button>
                </h1>
            </div>
        </>
    );
};

export default LoginForm;
