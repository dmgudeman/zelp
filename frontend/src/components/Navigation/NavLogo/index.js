import {Link} from 'react-router-dom';
import logo from "../../../assets/logo.jpg";

import './NavLogo.css'

const NavLogo = (props) => {
    return (
        <>
        <div id="containerLOGO">
        <Link to="/">
           <img id="logo" src={logo} alt="Logo" />
            </Link> 
            </div>
        </>
    )
}

export default NavLogo;