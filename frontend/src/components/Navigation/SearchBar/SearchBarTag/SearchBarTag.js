const SearchBarTag = (props) => {
    const {
        searchData,
        selectTag,
        hideTagList,
        handleSearchEvent,
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
                        name="tag"
                        value={selectTag ? selectTag : searchData.tag}
                        placeholder="Search by tag"
                        onChange={handleSearchEvent}
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
