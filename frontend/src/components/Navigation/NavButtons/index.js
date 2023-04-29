import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUser, logout } from "../../../store/session";
import ProfileButton from "./ProfileButton/ProfileButton";
import "./NavButtons.css";

const NavButtons = (props) => {
    const dispatch = useDispatch();
    let sessionUser = useSelector(getCurrentUser);

    const withoutSessionUser = (
        <div id="container">
            <Link to="/businesses">
                <button id="review-button">Write a Review</button>
            </Link>
            <Link to="/login">
                <button id="login-button">Log In</button>
            </Link>
            <Link to="/signup">
                <button onClick={() => console.log("sign up")}>Sign Up</button>
            </Link>
            <ProfileButton />
        </div>
    );

    const withSessionUser = (
        <div id="container">
            <Link to="/businesses">
                <button id="review-button">Write a Review</button>
            </Link>

            <Link to="/logout">
                <button onClick={() => dispatch(logout())}>
                    Log Out
                </button>
            </Link>
            <ProfileButton />
        </div>
    );

    return <>{sessionUser ? withSessionUser : withoutSessionUser}</>;
};

export default NavButtons;
