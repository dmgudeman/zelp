import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showSignupModal, hideSignupModal } from "../../../../store/uiSlice";
import SignupForm from "../../../Auth/SignupForm/SignupForm";
import { RootState } from "../../../../store/store";
import "./ModalSignup.css";

function ModalSignup() {
    const dispatch = useDispatch();
    const showSignup = useSelector((state: RootState) => state.ui.showSignup);
    let content;
    const handleCloseSignup = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(hideSignupModal());
    };

    const handleOpenSignupModal = () => {
        dispatch(showSignupModal());
    };
    if (showSignup) {
        content = (
            <div
                className="modal-background"
                onClick={(e) => handleCloseSignup(e)}
            >
                <SignupForm />
            </div>
        );
    } else {
        content = null;
    }
    return <>{content}</>;
}

export default ModalSignup;
