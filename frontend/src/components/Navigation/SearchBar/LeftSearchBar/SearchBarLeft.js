import { processName } from "../../../Helpers";
import "./SearchBarLeft.css";

const SearchBarLeft = (props) => {
    const {
        businesses,
        handleSearch,
        filterBusinesses,
        searchTerm,
        setSearchTerm,
    } = { ...props };
    console.log(searchTerm === '','uuuuuuuu')
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
               
                    {searchTerm !== '' ? (
                         <div id="SBLDropDown">
                        <ul>
                            {filterBusinesses().map((business) => (
                                <li key={business.name}>
                                    {" "}
                                    {processName(business.name)}
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
