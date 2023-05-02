const SearchBarTag = (props) => {
    const {
        businesses,
        handleSearch,
        // filterBusinesses,
        queryTag,
        filterTags
        // setQueryRight,
    } = { ...props };
    // if (!businesses) return null;
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
               
                    {queryTag!== '' ? (
                         <div className="SBDropDown">
                        <ul>
                            {filterTags().map((tag) => (
                                <li key={tag.tag}>
                                    {" "}
                                    {tag.tag}
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