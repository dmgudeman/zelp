const SearchBarTag = (props) => {
    const {
        tags,
        handleSearch,
        filterTags,
        queryTag,
        setQueryTag,
        // onItemClicked
    } = { ...props };

    // function handleItemClick(value){
    //     console.log('local', value)
    //     // setQueryTag(value);
    //     onItemClicked(value)
    // }

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

                {queryTag !== "" ? (
                    <div className="SBDropDown">
                        <ul>
                            {filterTags().map((tag) => (
                                <li
                                    key={tag.tag}
                                    // onClick={() => handleItemClick(tag.tag)}
                                >
                                    {tag.tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default SearchBarTag;
