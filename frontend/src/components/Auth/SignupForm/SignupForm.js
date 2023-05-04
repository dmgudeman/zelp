import { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../store/session";
import Navigation from "../../Navigation/NavBar/NavBar";
import DemoUserForm from "../DemoUserForm";
import "./SignupForm.css";

const SignupForm = (props) => {
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
                    <h2 id="titleSUF">Sign Up for Zelp</h2>
                    <input
                        className="inputSUF"
                        type="text"
                        value={username}
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        className="inputSUF"
                        type="text"
                        value={email}
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        className="inputSUF"
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        className="inputSUF"
                        type="password"
                        value={confirmPassword}
                        placeholder="confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <input id="submitSUF" className="inputSUF" type="submit" value="Sign Up" />
                    <ul id="ulSignUp">
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

export default SignupForm;
