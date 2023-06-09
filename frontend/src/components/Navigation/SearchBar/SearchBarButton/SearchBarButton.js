import './SearchBarButton.css'

const SearchBarButton = ({ handleSearchSubmit }) => {
    return (
        <>
            <div>
                {" "}
                {/*  NEED THIS OUTER DIV*/}
                <div
                    className="SBblueButton"
                    onClick={handleSearchSubmit}
                >
                    <i className="fa-solid fa-magnifying-glass "></i>
                </div>
            </div>
        </>
    );
};

export default SearchBarButton;
