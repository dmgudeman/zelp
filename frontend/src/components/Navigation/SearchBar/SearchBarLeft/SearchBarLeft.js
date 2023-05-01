import { useEffect } from 'react';   
import {Link, useHistory }from 'react-router-dom';
import { processName } from "../../../Helpers";

import "./SearchBarLeft.css";

const SearchBarLeft = (props) => {
    const history = useHistory();
    const {
        businesses,
        handleSearch,
        filterBusinesses,
        queryLeft,
        setQueryLeft,
    } = { ...props };

    useEffect(()=>{
        console.log(queryLeft)
    },[queryLeft])
    
    if (!businesses) return null;
    return (
        <>
            <div id="SBLcontainer">
                <div id="SBLInputWrap">
                    <input
                        id="SBLInput"
                        type="text"
                        placeholder="Search by name"
                        onChange={handleSearch}
                    />
                </div>
               
                    {queryLeft !== '' ? (
                         <div id="SBLDropDown">
                        <ul>
                            {filterBusinesses().map((business) => (
                                <li key={business.name}>
                                    {/* <button onClick={()=> history.push(`/businesses/${business.id}`)}  ></button> */}
                                     {" "}

                                   
                                   <Link to={`/businesses/${business.id}`}>{processName(business.name)}</Link> 
                                </li>
                            ))}
                        </ul>
                        </div>
                    ) : null
                }
               
            </div>
        </>
    );
};

export default SearchBarLeft;
