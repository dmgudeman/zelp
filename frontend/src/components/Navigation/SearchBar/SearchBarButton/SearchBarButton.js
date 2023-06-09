const SearchBarButton = ({ handleSearchSubmit }) => {
    return (
        <>
            <div>
                {" "}
                {/*  NEED THIS OUTER DIV*/}
                <div
                    id="buttonSB"
                    className="blueButton"
                    onClick={handleSearchSubmit}
                >
                    <i className="fa-solid fa-magnifying-glass "></i>
                </div>
            </div>
        </>
    );
};

export default SearchBarButton;
