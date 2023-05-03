const SearchBarTag = (props) => {
    const {
     
        handleSearchEvent,
        filterTags,
        queryTag,
        setQueryTag,
        selectTag,
        setSelectTag,
        hideTagList,
        setHideTagList,
        handleTagListClick

    } = { ...props };

 

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

                { hideTagList ? null : (
                    <div className="SBDropDown">
                        <ul>
                            {filterTags().map((tag) => (
                                <li
                                    key={tag.tag}
                                    onClick={() => handleTagListClick(tag.tag)}
                                >
                                    {tag.tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) }
            </div>
        </>
    );
};

export default SearchBarTag;
