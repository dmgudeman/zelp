import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCurrentUser, logout } from "../../../store/session";
import Modal from "../../Modal/Modal";
import SignupForm from "../../Auth/SignupForm/SignupForm";
import LoginForm from "../../Auth/LoginForm/LoginForm";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./NavButtons.css";

const NavButtons = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    let sessionUser = useSelector(getCurrentUser);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const closeSignupModal = () => {
        setShowSignupModal(false);
    };
    const openSignupModal = () => {
        setShowSignupModal(true);
    };
    const closeLoginModal = () => {
        setShowLoginModal(false);
    };
    const openLoginModal = () => {
        setShowLoginModal(true);
    };

    const withoutSessionUser = (
        <>
            {showSignupModal && (
                <Modal closeModal={closeSignupModal} form={<SignupForm />} />
            )}
            {showLoginModal && (
                <Modal closeModal={closeLoginModal} form={<LoginForm />} />
            )}
            <div id="containerNBut">
                <button
                    id="login-button"
                    className="blueButton"
                    onClick={() => openLoginModal()}
                >
                    Log In
                </button>
                <button onClick={() => openSignupModal()}>Sign Up</button>
                <a to="https://github.com/dmgudeman" className="git">
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
