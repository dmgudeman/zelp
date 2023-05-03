const SearchBarTag = (props) => {
    const {
        queryTag,
        selectTag,
        hideTagList,
        handleTagSearchEvent,
        handleTagListClick,
        filterTags,
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
                        onChange={handleTagSearchEvent}
                    />
                </div>

                {hideTagList ? null : (
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
                )}
            </div>
        </>
    );
};

export default SearchBarTag;
