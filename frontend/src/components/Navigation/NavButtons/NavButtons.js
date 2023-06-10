import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCurrentUser, logout } from "../../../store/session";
import NewModal from '../../Modal/NewModal/NewModal';
import SignupForm from "../../Auth/SignupForm/SignupForm";
import LoginForm from '../../Auth/LoginForm/LoginForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaGithub } from "react-icons/fa";


import "./NavButtons.css";
import { fetchBusinesses } from "../../../store/businesses";

const NavButtons = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    let sessionUser = useSelector(getCurrentUser);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleReviewRequest = () => {
        dispatch(fetchBusinesses());
        history.push("/businesses");
    };
    const closeSignupModal = () => {setShowSignupModal(false)};
    const openSignupModal = () => {setShowSignupModal(true)};
    const closeLoginModal = () => {setShowLoginModal(false)};
    const openLoginModal = () => {setShowLoginModal(true)}

    const withoutSessionUser = (
        <>
        {showSignupModal && (<NewModal  closeModal={closeSignupModal} form = {<SignupForm/>}/>)}
        {showLoginModal && (<NewModal  closeModal={closeLoginModal} form = {<LoginForm/>}/>)}
        <div id="containerNBut">
        
            {/* <Link to="/login"> */}
                <button id="login-button" className="blueButton"  onClick={() => openLoginModal()}>
                    Log In
                </button>
            {/* </Link> */}
            {/* <Link to="/signup"> */}
                <button onClick={() => openSignupModal()}>Sign Up</button>
            {/* </Link> */}
            {/* <ProfileButton /> */}
            <a to="https://github.com/dmgudeman" className="git">
                <FaGithub />
            </a>
            <div>
                <a
                    href="https://www.linkedin.com/in/davidmgudeman/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
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
                <FaGithub />
            </a>
            <div>
                <a
                    href="https://www.linkedin.com/in/davidmgudeman/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
            {/* <button id="review-button" onClick={handleReviewRequest}>Write a Review</button> */}
            
            {/* <ProfileButton /> */}
        </div>
    );

    return <>{sessionUser ? withSessionUser : withoutSessionUser}</>;
};

export default NavButtons;
