
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses, fetchBusinesses } from "../../../store/businesses";
import { processName } from "../../Helpers";
import SearchBarLeft from "./LeftSearchBar/SearchBarLeft";
import "./SearchBar.css";

const SearchBar = (props) => {

    const dispatch = useDispatch();
    let businesses = useSelector(getBusinesses);
    const [searchTerm, setSearchTerm] = useState("");
 

    const filterBusinesses = () => {
        return businesses.filter(business => {
            let busName = processName(business.name)
          return busName.toLowerCase().includes(searchTerm.toLowerCase());
        });
      };

    const handleSearch = (e) =>{
        setSearchTerm(e.target.value)
        
    }
    
  
    useEffect(()=>{
        filterBusinesses();
        console.log('searchTerm', searchTerm)
    },[searchTerm

    ])
    
    useEffect(() => {
        dispatch(fetchBusinesses());
    }, [dispatch]);
  
    return (
        <>
            <form className="searchBarContainer">
                <div id="searchBarLeftContainer">
                  <SearchBarLeft 
                    businesses={businesses}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleSearch={handleSearch}
                    filterBusinesses={filterBusinesses}/>
                </div>
               
                <div className="rightSearchBar">
                    <input
                        className="rightSearchBar"
                        type="text"
                        placeholder="San Francisco, CA"
                    />
                </div>
                <div className="searchButton">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
               
            </form>
           
        </>
    );
};

export default SearchBar;
