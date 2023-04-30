import { useState, useEffect } from "react";

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(()=>{
        console.log(searchTerm)
    },[searchTerm])

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
       
    };

    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="Search by name"
                    onChange={handleSearch}
                />
            </form>
        </>
    );
};

export default SearchBar;
