import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
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
                    <img id="logo" src={logo} alt="Logo" />
                </div>
                <div id="searchBarContainer"></div>
                <div id="buttonsContainer">
                    <NavButtons />
                </div>
            </div>
        </>
    );
};

export default Navigation;
