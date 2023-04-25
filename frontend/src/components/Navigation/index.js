import NavButtons from "./NavButtons";
import NavLogo from "./NavLogo";
import SearchBar from "../SearchBar";
import "./Navigation.css";

const Navigation = ({ showFull }) => {
    return (
        <>
            {showFull ? (
                <div id="navContainer">
                    <div id="logoContainer">
                        <NavLogo />
                    </div>
                    <div id="searchBarContainer">
                        <SearchBar/>
                    </div>
                    <div id="buttonsContainer">
                        <NavButtons />
                    </div>
                </div>
            ) : (
                <div id="navContainer">
                    <div id="logoContainer">
                        <NavLogo />
                    </div>
                </div>
            )}
        </>
    );
};

export default Navigation;
