import { useState, useEffect } from "react";
import { login, getCurrentUser } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import DemoUserForm from "../DemoUserForm";
import "./LoginFormPage.css";

const LoginFormPage = (props) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(getCurrentUser);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(login({ credential, password })).catch(async (res) => {
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
        });
    };

    return (
        <>
            <div id="loginFormContainer">
                <h2>Log in to Zelp</h2>
                <h1>New to Zelp? <NavLink className="nav-link" to="/signup">Sign Up</NavLink></h1>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        value={credential}
                        placeholder="username or email"
                        onChange={(e) => setCredential(e.target.value)}
                    />

                    <input
                        type="text"
                        value={password}
                        placeholder = "password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input id="submit" type="submit" value="Log In" />
                </form>
                <DemoUserForm />
            </div>
        </>
    );
};

export default LoginFormPage;
