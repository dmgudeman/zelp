import React from "react";
import {  useSelector, useDispatch as _useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCurrentUser, logout } from "../../../store/sessionSlice";
import ModalSignup from "../../Modals/ModalsAuth/ModalSignup/ModalSignup";
import ModalLogin from "../../Modals/ModalsAuth/ModalLogin/ModalLogin";
import { RootState, AppDispatch } from "../../../store/store"
import {
    showSignupModal,
    showLoginModal,
} from "../../../store/uiSlice";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./NavButtons.css";

// useDispatch expects a Redux action object but createAsyncThunk  returns a thunk function
const useDispatch = () => _useDispatch<AppDispatch>();

const NavButtons = () => {
    const dispatch = useDispatch();
    let sessionUser = useSelector(getCurrentUser);
    const showSignup = useSelector((state: RootState) => state.ui.showSignup);
    const showLogin = useSelector((state: RootState) => state.ui.showLogin);

    const openSignupModal = () => {
        dispatch(showSignupModal());
    };
    const openLoginModal = () => {
        dispatch(showLoginModal());
    };

    const withoutSessionUser = (
        <>
            {showLogin && <ModalLogin />}
            {showSignup && <ModalSignup />}

            <div id="containerNBut">
                <button
                    id="login-button"
                    className="blueButton"
                    onClick={() => openLoginModal()}
                >
                    Log In
                </button>
                <button onClick={() => openSignupModal()}>Sign Up</button>
                <a href="https://github.com/dmgudeman" className="git">
                    <FaGithub size={40} />
                </a>
                <div>
                    <a
                        href="https://www.linkedin.com/in/davidmgudeman/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={40} />
                    </a>
                </div>
            </div>
        </>
    );

    const withSessionUser = (
        <div id="containerNBut">
            <Link to="/logout">
                <button
                    className="blueButton"
                    onClick={() => dispatch(logout())}
                >
                    Log Out
                </button>
            </Link>
            <a href="https://github.com/dmgudeman" className="git">
                <FaGithub size={40} />
            </a>
            <a
                href="https://www.linkedin.com/in/davidmgudeman/"
                className="myCustomIcon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin size={40} />
            </a>
        </div>
    );

    return <>{sessionUser ? withSessionUser : withoutSessionUser}</>;
};

export default NavButtons;
