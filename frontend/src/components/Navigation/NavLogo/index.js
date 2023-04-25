import {Link} from 'react-router-dom';
import logo from "../../../assets/logo.jpg";

import './NavLogo.css'

const NavLogo = (props) => {
    return (
        <>
        <Link to="/">
           <img id="logo" src={logo} alt="Logo" />
            </Link> 
        </>
    )
}

export default NavLogo;