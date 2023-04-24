import { useState, useEffect } from "react";
import { login, getCurrentUser} from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import {Redirect} from 'react-router-dom';
import Navigation from "../Navigation";
import './LoginFormPage.css';

const LoginFormPage = (props) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(getCurrentUser);
    const [credential, setCredential] = useState('username or email');
    const [password, setPassword] = useState('password');
    const [errors, setErrors] = useState([]);
   
    if (sessionUser) return <Redirect to="/" />;



    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(login({ credential, password }))
        .catch(async (res) => {
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
    }
       
    return (
        <div id="loginFormContainer">
            {/* <Navigation/> */}
            <h2>Sign Up for Zelp</h2>
            <form onSubmit={submitHandler}>
                <label>
                    {" "}
                    Username or Email
                    <input
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                    />
                </label>
                <label>
                    {" "}
                    Password
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default LoginFormPage;
