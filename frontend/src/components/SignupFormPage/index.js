import { useState } from "react";
import { signup } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Navigation";
import { NavLink, Redirect } from "react-router-dom";
import "./SignupFormPage.css";

import DemoUserForm from "../DemoUserForm";

const SignupFormPage = (props) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([]);

        if (confirmPassword !== password) {
            setErrors(["passwords do not match"]);
        } else {
            return dispatch(signup({ username, password, email })).catch(
                async (res) => {
                    let data;
                    try {
                        // .clone() essentially allows you to read the response body twice
                        data = await res.clone().json();
                    } catch {
                        data = await res.text(); // Will hit this case if the server is down
                    }
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                }
            );
        }
    };

    return (
        <>
            <Navigation id="app-nav" showFlag={false} />
            <div id="signupFormContainer">
                <form id="inputForm" onSubmit={submitHandler}>
                    <h2>Sign Up for Zelp</h2>
                    <input
                        type="text"
                        value={username}
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="text"
                        value={email}
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder="confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <input id="submit" type="submit" value="Sign Up" />
                    <ul>
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </form>
                <DemoUserForm />
                <h1>
                    Already a Zelp user?{" "}
                    <NavLink className="nav-link" to="/login">
                        Log In
                    </NavLink>
                </h1>
            </div>
        </>
    );
};

export default SignupFormPage;
