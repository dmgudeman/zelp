import "./SearchBar.css";

const SearchBar = (props) => {
    return (
        <>
            <div className="searchBarContainer">
                <div className="leftSearchBar">
                    <p>left</p>
                </div>
                <div className="rightSearchBar">
                    <p>right</p>
                </div>
                <div className="searchButton">
                    <i className="fa-solid fa-magnifying-glass"></i>
                 
                </div>
            </div>
        </>
    );
};

export default SearchBar;
