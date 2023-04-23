import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../store/session';
import { NavLink, Link} from "react-router-dom";
import logo from '../../assets/logo.jpg'
import ProfileButton from "./ProfileButton/ProfileButton";
import NavButtons from "./NavButtons";
import "./Navigation.css";

const Navigation = (props) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    return (
        <>
            <div id="navContainer">
                <div id="logoContainer">
                <img src={logo} alt="Logo" />
                </div>
                <div id="searchBarContainer">

                </div>
                <div id="buttonsContainer">
                    {/* <NavButtons/> */}
                    <Link to="/login"><button>Log In</button></Link>
            {/* <Link to="/signup"><button onClick={()=> console.log('sign up')}>Sign Up</button></Link> */}
            <NavLink className='nav-link' to="/signup">Signup</NavLink>

                </div>
         
                {/* <ul>
                <img src={logo} alt="Logo" />
                    <NavLink className='nav-link' to="/">Home</NavLink>

                    {sessionUser ? (
                        <ProfileButton />
                    ) : (
                        <>
                            <NavLink className='nav-link' to="/login">Login</NavLink>
                            <NavLink className='nav-link' to="/signup">Signup</NavLink>
                        </>
                    )}
                    <div>
                        <button onClick={()=>dispatch(logout())}>Logout</button>
                    </div>
                </ul> */}
                
            </div>
        </>
    );
};

export default Navigation;
