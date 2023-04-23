import { useState } from "react";
import { signup} from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import {Redirect} from 'react-router-dom';
import './SignupFormPage.css';

import DemoUserForm from "../DemoUserForm";

const SignupFormPage = (props) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state=>state.session.user);
    const [username, setUsername] = useState("username");
    const [password, setPassword] = useState("password");
    const [confirmPassword, setConfirmPassword] = useState("confirm password");
    const [email, setEmail] = useState("email");
    const [errors, setErrors] = useState([]);
    console.log("SIGNUP FORM MOUNTED")
    // if (sessionUser) return <Redirect to="/" />;
    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([]);
        if(confirmPassword === password){
            return dispatch(signup({ username, password, email }))
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
        
    }
       
    return (
        <>
     
        <div id="signupFormContainer">
            <h2>Signup Form Page</h2>
            <form onSubmit={submitHandler}>
               
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
             
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
        
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
            
                    <input
                        type="text"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
              
                <input id="submit" type="submit" value="Sign Up" />
            </form>
            <DemoUserForm/>
        </div>
        </>
    );
};

export default SignupFormPage;