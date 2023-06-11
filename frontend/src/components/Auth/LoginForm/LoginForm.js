import { useState } from "react";
import { login, getCurrentUser } from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import DemoUserForm from "../DemoUserForm/DemoUserForm";
import "./LoginForm.css";
import { hideModal } from "../../../store/ui";

const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(getCurrentUser);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([]);
        dispatch(login({ credential, password })).catch(async (res) => {
            let data;
            try {
                // .clone()  essentially allows you to read the response body twice
                data = await res.clone().json();
                hideModal();
            } catch {
                data = await res.text(); // Will hit this case if the server is down
            }
            if (data?.errors)
                setErrors(["username or email and/or password were invalid"]);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
    };

    return (
        <>
           <div id="combinedFormContainerLIF">
            <div id="formContainerLIF">
                
               
                <form id="inputFormLIF" onSubmit={submitHandler}>
                <h2 id="titleLIF">Log in to  Zelp</h2>
                    <input
                        className="inputLIF"
                        type="text"
                        value={credential}
                        placeholder="username or email"
                        onChange={(e) => setCredential(e.target.value)}
                    />

                    <input
                        className="inputLIF"
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        id="submitSUF"
                        className="inputSUF"
                        type="submit"
                        value="Log In"
                    />
                    <ul id="errorLIF">
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </form>
                <DemoUserForm />
            </div>
            <h1 id="lastLineLIF">
                    New to Zelp?{" "}
                    <NavLink className="nav-link" to="/signup">
                        Sign Up
                    </NavLink>
                </h1>
            </div>
        </>
    );
};

export default LoginForm;
