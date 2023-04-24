import { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import "./DemoUserForm.css";

const DemoUserForm = (props) => {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("dog");
    const [password, setPassword] = useState("dddddd");

    const submitHandler = (e) => {
        e.preventDefault();

        return dispatch(login({ credential, password }));
    };

    return (
        <>
            <div id="demoUserFormContainer">
                <h2>Demo User</h2>
                <form onSubmit={submitHandler}>
                    <input id="submit" type="submit" value="Demo User" />
                </form>
            </div>
        </>
    );
};

export default DemoUserForm;
