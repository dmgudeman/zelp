import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCurrentUser, logout } from "../../../store/session";
import ProfileButton from "./ProfileButton/ProfileButton";
import "./NavButtons.css";
import { fetchBusinesses } from "../../../store/businesses";

const NavButtons = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    let sessionUser = useSelector(getCurrentUser);

    const handleReviewRequest = () => {

        dispatch(fetchBusinesses());
        history.push("/businesses")

    }

    const withoutSessionUser = (
        <div id="containerNBut">
           
                <button id="review-button" onClick={handleReviewRequest}>Write a Review</button>
       
            <Link to="/login">
                <button className="blueButton" id="login-button">Log In</button>
            </Link>
            <Link to="/signup">
                <button onClick={() => console.log("sign up")}>Sign Up</button>
            </Link>
            <ProfileButton />
        </div>
    );

    const withSessionUser = (
        <div id="containerNBut">
          
          <button id="review-button" onClick={handleReviewRequest}>Write a Review</button>
            <Link to="/logout">
                <button className="blueButton" onClick={() => dispatch(logout())}>
                    Log Out
                </button>
            </Link>
            <ProfileButton />
        </div>
    );

    return <>{sessionUser ? withSessionUser : withoutSessionUser}</>;
};

export default NavButtons;
