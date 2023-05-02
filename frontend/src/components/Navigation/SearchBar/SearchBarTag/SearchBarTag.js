import { useEffect } from 'react';   
import {Link, useHistory }from 'react-router-dom';


import "./SearchBarTag.css";

const SearchBarTag = (props) => {
    const history = useHistory();
    const {
        businesses,
        handleSearch,
        filterTags,
        queryTag,
        setQueryTag,
        tags
    } = { ...props };
   
    
    if (!businesses) return null;
    return (
        <>
            <div className="SBcontainer">
                <div className="SBInputWrap">
                    <input
                        className="SBInput"
                        type="text"
                        placeholder="Search by category"
                        onChange={handleSearch}
                    />
                </div>

                {queryTag !== '' ? (
                         <div className="SBDropDown">
                        <ul>
                            {tags.map((tag) => (
                                <li key={tag.tag}>
                                    {/* <button onClick={()=> history.push(`/businesses/${business.id}`)}  ></button> */}
                                     {" "}

                                   
                                 
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

export default SearchBarTag;



/*
{queryTag !== '' ? (
    <div className="SBDropDown">
   <ul>
       {filterTags(queryTag).map((business) => (
           <li key={business.name}>
               {/* <button onClick={()=> history.push(`/businesses/${business.id}`)}  ></button> */
            /*    {" "}

              
              {/* <Link to={`/businesses/${business.id}`}>{business.name}</Link>  */
         /*  </li>
       ))}
   </ul>
   </div>
) : null
}*/