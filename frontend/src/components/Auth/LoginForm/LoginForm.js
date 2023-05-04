import { useState, useEffect } from "react";
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { login, getCurrentUser } from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import Navigation from "../../Navigation/NavBar/NavBar";
import DemoUserForm from '../DemoUserForm'
import "./LoginForm.css";
import { showModal, hideModal } from "../../../store/ui";



const LoginForm = ({ dispatchShowModal }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(getCurrentUser);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([]);
        // return dispatch(login({ credential, password })).catch(async (res) => {
        dispatch(login({ credential, password })).catch(async (res) => {
            let data;
            try {
                // .clone()  essentially allows you to read the response body twice
                data = await res.clone().json();
                hideModal()
            } catch {
                data = await res.text(); // Will hit this case if the server is down
            }
            // if (data?.errors) setErrors(data.errors);
             if (data?.errors) setErrors(["username or email and/or password were invalid"]);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
    };

    return (
        <>
         <Navigation id="app-nav" showFlag={false}/>
            <div id="loginFormContainer">
               
                <h2>Log in to Zelp</h2>
                <h1>
                    New to Zelp?{" "}
                    <NavLink className="nav-link" to="/signup">
                        Sign Up
                    </NavLink>
                </h1>
                <form id="inputForm" onSubmit={submitHandler}>
                   
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

                    <input className="blueButton" type="submit" value="Log In" />
                    <div>
    <h2>Login</h2>
    <button onClick={() => dispatchShowModal('login')}>Open Modal</button>
  </div>
                    <ul id="ulLogin">
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </form>
                <DemoUserForm />
            </div>
        </>
    );
};

// const mapDispatchToProps = {
//     dispatchShowModal: showModal
//   };
  
//   export default connect(null, mapDispatchToProps)(LoginForm);

export default LoginForm;
