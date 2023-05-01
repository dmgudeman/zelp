
import "./SearchBarRight.css";

const SearchBarRight = (props) => {
    const {
        businesses,
        handleSearch,
        filterBusinesses,
        queryRight,
        setQueryRight,
    } = { ...props };
    console.log(queryRight === '','uuuuuuuu')
    if (!businesses) return null;
    return (
        <>
            <div id="SBRcontainer">
                <div id="SBRInputWrap">
                    <input
                        id="SBRInput"
                        type="text"
                        placeholder="Search by city"
                        onChange={handleSearch}
                    />
                </div>
               
                    {queryRight !== '' ? (
                         <div id="SBRDropDown">
                        <ul>
                            {filterBusinesses().map((business) => (
                                <li key={business.name}>
                                    {" "}
                                    {business.name}
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

export default SearchBarRight;