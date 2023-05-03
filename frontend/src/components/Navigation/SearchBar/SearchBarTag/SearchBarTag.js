const SearchBarTag = (props) => {
    const {
        tags,
        handleSearchEvent,
        filterTags,
        queryTag,
        selectTag,
        setQueryTag,
        setSelectTag
        
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
                        value={selectTag ? selectTag : queryTag}
                        placeholder="Search by tag"
                        onChange={handleSearchEvent}
                    />
                </div>

                {queryTag !== "" ? (
                    <div className="SBDropDown">
                        <ul>
                            {filterTags().map((tag) => (
                                <li
                                    key={tag.tag}
                                    onClick={() => setSelectTag(tag.tag)}
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
