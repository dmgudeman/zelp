import React, { useState } from "react";
import { login } from "../../../store/sessionSlice";
import { useDispatch  } from "react-redux";
import "./DemoUserForm.css";

const DemoUserForm = () => {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("Demo-lition");
    const [password, setPassword] = useState("password");
    const submitHandler = (e => {
        e.preventDefault();

        return dispatch(login({ credential, password }));
    });

    return (
        <>
            <div id="formContainerDUF">
                <form id="inputFormDUF" onSubmit={submitHandler}>
                    <h2 id="titleDUF">Demo User</h2>
                    <input id="submitDUF" className="inputDUF" type="submit" value="Demo User" />
                </form>
            </div>
        </>
    );
};

export default DemoUserForm;
