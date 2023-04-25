import NavButtons from "./NavButtons";
import NavLogo from "./NavLogo";
import SearchBar from "../SearchBar";
import "./Navigation.css";

const Navigation = ({ showFull }) => {

    let content;

    switch( showFull) {
        case true:
          return  content = (
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
            ) 
        case false:
        return content = (
            <div id="navContainer">
            <div id="logoContainer">
                <NavLogo />
            </div>
        </div>
        )
    }
   
   
   
   
    return (
       
       
       
       
       <>
            {content}
        </>
    );
};

export default Navigation;
