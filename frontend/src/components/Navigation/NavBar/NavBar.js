import NavButtons from "../NavButtons";
import {Link} from 'react-router-dom';
import NavLogo from "../NavLogo";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const NavBar = ({ showFlag }) => {
    let content;

    switch (showFlag) {
        case true:
            return (content = (
                <div class="navContainer">
                    <NavLogo />

                    <SearchBar />
                  

                    <NavButtons />
                </div>
            ));
        case false:
            return (content = (
                <div class="navContainer">
                    <NavLogo />
                </div>
            ));
        case "index":
            return (content = (
                <div class="navContainer" className="index">
                    <NavLogo />

                    <SearchBar />

                    <NavButtons />
                </div>
            ));
        default:
            return null;
    }

    return <>{content}</>;
};

export default NavBar;
