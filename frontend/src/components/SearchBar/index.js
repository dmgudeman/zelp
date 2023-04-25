import "./SearchBar.css";

const SearchBar = (props) => {
    return (
        <>
            <form className="searchBarContainer">
                <div >
                    <input 
                    className="leftSearchBar" 
                    type="text" 
                    placeholder="Try lunch, yoga studio, plumber"
                    />
                </div>
                <div className="rightSearchBar">
                <input 
                className="rightSearchBar" 
                type="text" 
                placeholder="San Francisco, CA"/>
                </div>
                <div className="searchButton">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </form>
        </>
    );
};

export default SearchBar;
