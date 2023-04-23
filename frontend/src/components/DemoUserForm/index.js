
import { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import {Redirect} from 'react-router-dom';
import './DemoUserForm.css';


const DemoUserForm = (props) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state=>state.session.user);
    const [username, setUsername] = useState("dog");
    const [password, setPassword] = useState("dddddd");
    // const [email, setEmail] = useState("demo@user.io");
    // const [errors, setErrors] = useState([]);
   
    if (sessionUser) return <Redirect to="/" />;
    const submitHandler = (e) => {
        e.preventDefault();
        // setErrors([]);
      
            return dispatch(login({ username, password}))
        // .catch(async (res) => {
        //   let data;
        //   try {
        //     // .clone() essentially allows you to read the response body twice
        //     data = await res.clone().json();
        //   } catch {
        //     data = await res.text(); // Will hit this case if the server is down
        //   }
        //   if (data?.errors) setErrors(data.errors);
        //   else if (data) setErrors([data]);
        //   else setErrors([res.statusText]);
        // });

        // }
        
    }
       
    return (
        <>
     
        <div id="demoUserFormContainer">
            <h2>Demo User</h2>
            <form onSubmit={submitHandler}>
               
                    {/* <input
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
                    /> */}
              
                <input id="submit" type="submit" value="Demo User" />
            </form>
        </div>
        </>
    );
};

export default DemoUserForm;