import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideLoginModal } from "../../../../store/uiSlice";
import LoginForm from "../../../Auth/LoginForm/LoginForm";
import { RootState } from "../../../../store/store";
import "./ModalLogin.css";

function ModalLogin() {
    const dispatch = useDispatch();

    const showLogin = useSelector((state: RootState) => state.ui.showLogin);
    let content;
    console.log("showLogin", showLogin);

    const handleCloseLogin = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(hideLoginModal());
    };

    if (showLogin) {
        content = (
            <div
                className="modal-background"
                onClick={(e) => handleCloseLogin(e)}
            >
                <LoginForm />
            </div>
        );
    } else {
        content = null;
    }
    return <>{content}</>;
}

export default ModalLogin;
