import { useState, useEffect } from "react";
import './Test.css';
import Carousel from '../Helpers/Caroursel/Carousel';

const SearchBar = (props) => {
    // const [searchTerm, setSearchTerm] = useState("");
    // useEffect(()=>{
    //     console.log(searchTerm)
    // },[searchTerm])

    // const handleSearch = (e) => {
    //     setSearchTerm(e.target.value);
       
    // };

    return (
        <>
            {/* <form>
                <input
                    type="text"
                    placeholder="Search by name"
                    onChange={handleSearch}
                />
            </form> */}
            <div id="testContainer">
            <Carousel/>
            </div>
        </>
    );
};

export default SearchBar;
