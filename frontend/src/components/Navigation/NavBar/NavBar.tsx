import React from 'react';
import NavButtons from "../NavButtons/NavButtons";
import NavLogo from "../NavLogo";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
import { INavBarProps } from '../../../Types/IComponents/INavigation'

const NavBar : React.FC<INavBarProps> = ({ showFlag }) => {
    let content;
   

    switch (showFlag) {
        case true:
            return (content = (
                <>   
                    <div className="navContainer">
                        <NavLogo />
                        <SearchBar />
                        <NavButtons />
                    </div>
                </>
            ));
        case false:
            return (content = (
                <div className="navContainer">
                    <NavLogo />
                </div>
            ));
        case "index":
            return (content = (
                <div className="index navContainer">
                    <NavLogo />
                    <SearchBar />
                    <NavButtons />
                </div>
            ));
        default:
            return null;
    }
};

export default NavBar;
