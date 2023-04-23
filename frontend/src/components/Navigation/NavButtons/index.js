import { Link } from "react-router-dom";
import ProfileButton from "../ProfileButton/ProfileButton";
import './NavButtons.css'

const NavButtons = (props) => {
  

    return (
        <div id="container">
            <button id="review-button">Write a Review</button>
            {/* <button id="login-button" onClick={() => history.push("/login")}>Log In</button> */}
            <Link to="/login"><button>Log In</button></Link>
            <Link to="/signup"><button onClick={()=> console.log('sign up')}>Sign Up</button></Link>
            <ProfileButton/>
        </div>
    );
};

export default NavButtons;
