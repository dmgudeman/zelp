

import React, { useState } from "react";
import { login } from "../../../store/sessionSlice";
import { useDispatch as _useDispatch } from "react-redux";
import { AppDispatch } from '../../../store/store';
import "./DemoUserForm.css";

const useDispatch = () => _useDispatch<AppDispatch>();

const DemoUserForm = () => {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("Demo-lition");
    const [password, setPassword] = useState("password");
    const submitHandler = ((e: React.FormEvent)=> {
        e.preventDefault();

        return dispatch(login({ credential, password }));
    });

    return (
        <>
            <div id="formContainerDUF">
                <form id="inputFormDUF" onSubmit={submitHandler}>
                    <h2 id="titleDUF">Demo User</h2>
                    <input id="submitDUF" className="blueButton inputDUF" type="submit" value="Demo User" />
                </form>
            </div>
        </>
    );
};

export default DemoUserForm;
