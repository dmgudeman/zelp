
import "./SearchBarAdd.css";

const SearchBarAdd = (props) => {
    const {
        businesses,
        handleSearch,
        filterBusinesses,
        queryAdd,
        setQueryAdd,
    } = { ...props };
    return (
        <>
            <div className="SBcontainer">
                <div className="SBInputWrap">
                    <input
                        className="SBInput"
                        type="text"
                        placeholder="Search by city"
                        onChange={handleSearch}
                    />
                </div>
               
                    {queryAdd !== '' ? (
                         <div className="SBDropDown">
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

export default SearchBarAdd;