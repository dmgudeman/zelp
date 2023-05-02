import { useState } from "react";
import { login } from "../../../store/session";
import { useDispatch } from "react-redux";
import "./DemoUserForm.css";

const DemoUserForm = (props) => {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("Demo-lition");
    const [password, setPassword] = useState("password");

    const submitHandler = (e) => {
        e.preventDefault();

        return dispatch(login({ credential, password }));
    };

    return (
        <>
            <div id="demoUserFormContainer">
                <form onSubmit={submitHandler}>
                    <h2>Demo User</h2>
                    <input id="submit" type="submit" value="Demo User" />
                </form>
            </div>
        </>
    );
};

export default DemoUserForm;
