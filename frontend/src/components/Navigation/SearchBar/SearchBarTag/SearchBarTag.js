const SearchBarTag = (props) => {
    const {
        businesses,
        handleSearch,
        filterBusinesses,
        queryRight,
        setQueryRight,
    } = { ...props };
    if (!businesses) return null;
    return (
        <>

<div className="SBcontainer">
                <div className="SBInputWrap">
                    <input
                        className="SBInput"
                        type="text"
                        placeholder="Search by tag"
                        onChange={handleSearch}
                    />
                </div>
               
                    {queryRight !== '' ? (
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

export default SearchBarTag;