import NavButtons from "./NavButtons";
import NavLogo from "./NavLogo";
import "./Navigation.css";

const Navigation = ({ showFull }) => {
    return (
        <>
            {showFull ? (
                <div id="navContainer">
                    <div id="logoContainer">
                        <NavLogo />
                    </div>
                    <div id="searchBarContainer"></div>
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
