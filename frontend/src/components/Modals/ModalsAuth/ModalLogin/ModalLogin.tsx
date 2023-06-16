import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "../../../Auth/LoginForm/LoginForm";
import { hideLoginModal } from "../../../../store/uiSlice";
import { clearSessionError } from "../../../../store/sessionSlice";
import { RootState } from "../../../../store/store";
import "./ModalLogin.css";

function ModalLogin() {
    const dispatch = useDispatch();

    const showLogin = useSelector((state: RootState) => state.ui.showLogin);
    let content;

    const handleCloseLogin = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(clearSessionError()); 
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
