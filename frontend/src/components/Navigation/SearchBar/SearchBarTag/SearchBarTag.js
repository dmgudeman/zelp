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
            <div className="containerInputSB">
                <div className="wrapInputSB">
                    <input
                        className="inputSB leftEnd"
                        type="text"
                        name="tag"
                        value={selectTag ? selectTag : searchData.tag}
                        placeholder="Search by tag"
                        onChange={handleSearchEvent}
                    />
                </div>

                {hideTagList ? null : (
                    <div className="dropDownSB">
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
