import NavButtons from "./NavButtons";
import NavLogo from "./NavLogo";
import SearchBar from "../SearchBar";
import "./Navigation.css";

const Navigation = ({ showFlag }) => {
    let content;

    switch (showFlag) {
        case true:
            return (content = (
                <div id="navContainer">
                    <div id="logoContainer">
                        <NavLogo />
                    </div>
                    <div id="searchBarContainer">
                        <SearchBar />
                    </div>
                    <div id="buttonsContainer">
                        <NavButtons />
                    </div>
                </div>
            ));
        case false:
            return (content = (
                <div id="navContainer">
                    <div id="logoContainer">
                        <NavLogo />
                    </div>
                </div>
            ));
        case 'index':
            return (content =(
                <div id="navContainer"  className="index">
                <div id="logoContainer">
                    <NavLogo />
                </div>
                <div id="searchBarContainer">
                    <SearchBar />
                </div>
                <div id="buttonsContainer">
                    <NavButtons />
                </div>
            </div>
            ))
        default:
            return null;
    }

    return <>{content}</>;
};

export default Navigation;
