import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses, fetchBusinesses } from "../../../store/businesses";
import { processName } from "../../Helpers";
import SearchBarLeft from "./SearchBarLeft/SearchBarLeft";
import SearchBarRight from "./SearchBarRight/SearchBarRight";
import "./SearchBar.css";

const SearchBar = (props) => {
    const dispatch = useDispatch();
    let businesses = useSelector(getBusinesses);
    const [queryLeft, setQueryLeft] = useState("");
    const [queryRight, setQueryRight] = useState("");
  

    const filterBusinesses = () => {
        return businesses.filter((business) => {
            let busName = processName(business.name);
            return busName.toLowerCase().includes(queryLeft.toLowerCase());
        });
    };
    const filterCities = () => {
        
    }

    const handleLeftSearch = (e) => {
        setQueryLeft(e.target.value);
    };
    const handleRightSearch = (e) => {
        setQueryRight(e.target.value);
    };

    useEffect(() => {
        filterBusinesses();
        console.log("queryLeft", queryLeft);
    }, [queryLeft]);

    useEffect(() => {
        dispatch(fetchBusinesses());
    }, [dispatch]);

    return (
        <>
            <form className="searchBarContainer">
              
                    <SearchBarLeft
                        businesses={businesses}
                        queryLeft={queryLeft}
                        setQueryLeft={setQueryLeft}
                        handleSearch={handleLeftSearch}
                        filterBusinesses={filterBusinesses}
                    />
                    <SearchBarRight
                       businesses={businesses}
                       queryRight={queryRight}
                       setQueryLeft={setQueryLeft}
                       handleSearch={handleRightSearch}
                       filterBusinesses={filterBusinesses}
                    
                    
                    />
             
{/* 
                <div className="searchBarRightContainer">
                    <input
                        className="rightSearchBar"
                        type="text"
                        placeholder="San Francisco, CA"
                    />
                </div> */}
                <div className="searchButton">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </form>
        </>
    );
};

export default SearchBar;
