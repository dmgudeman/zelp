import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUser, logout } from "../../../store/session";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaGithub } from "react-icons/fa";
import "./NavButtons.css";
import { fetchBusinesses } from "../../../store/businesses";

const NavButtons = (props) => {
    const dispatch = useDispatch();
    let sessionUser = useSelector(getCurrentUser);

    const withoutSessionUser = (
        <div id="containerNBut">
            <Link to="/login">
                <button className="blueButton" id="login-button">
                    Log In
                </button>
            </Link>
            <Link to="/signup">
                <button onClick={() => console.log("sign up")}>Sign Up</button>
            </Link>
            <a to="https://github.com/dmgudeman" className="git">
                <FaGithub style={{ fontSize: "40px" }} />
            </a>
            <div>
                <a
                    href="https://www.linkedin.com/in/davidmgudeman/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ fontSize: "40px" }}
                    />
                </a>
            </div>
        </div>
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
                <FaGithub style={{ fontSize: "40px" }} />
            </a>
            <div>
                <a
                    href="https://www.linkedin.com/in/davidmgudeman/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ fontSize: "40px" }}
                    />
                </a>
            </div>
        </div>
    );

    return <>{sessionUser ? withSessionUser : withoutSessionUser}</>;
};

export default NavButtons;
