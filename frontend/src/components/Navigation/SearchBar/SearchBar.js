import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses, fetchBusinesses } from "../../../store/businesses";
import { processName } from "../../Helpers";

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

    if (!businesses) return null;
    return (
        <>
            <form className="searchBarContainer">
                <div>
                    <input
                        className="leftSearchBar"
                        type="text"
                        placeholder="Search by name"
                       
                        onChange={handleSearch}
                    />
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
                <div>
                <p>Hi there</p>
                <ul>
                    {filterBusinesses().map((business) => (
                        <li key={business.name}>
                            {" "}
                            {processName(business.name)}
                        </li>
                    ))}
                </ul>
            </div>
            </form>
           
        </>
    );
};

export default SearchBar;
