import React from "react";
import { SBButtonProps } from "../../../../Types/IComponents/INavigation";
import "./SearchBarButton.css";

const SearchBarButton: React.FC<SBButtonProps> = ({ handleSearchSubmit }) => {
    return (
        <>
            <div>
                {/*  NEED TO KEEP THIS OUTER DIV*/}
                <div
                    className="blueButtonSB searchButton "
                    onClick={handleSearchSubmit}
                >
                    <i className="fa-solid fa-magnifying-glass "></i>
                </div>
            </div>
        </>
    );
};

export default SearchBarButton;
