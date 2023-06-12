import { useRef } from "react";
const SearchBarTag = (props) => {
    const {
        searchData,
        selectTag,
        hideTagList,
        handleSearchEvent,
        handleTagListClick,
        filterTags,
        handleInputClick
    } = { ...props };

    const filteredTags = filterTags();

    return (
        <>
            <div className="SBcontainer">
                <div className="SBInputWrap" onClick={()=>handleInputClick()}>
                    <input
                        className="SBInput"
                        type="text"
                        name="tag"
                        value={selectTag ? selectTag : searchData.tag}
                        placeholder="Business category search"
                        onChange={handleSearchEvent}
                    />
                </div>

                {!hideTagList && (
                    <div className="SBDropDown">
                        {filteredTags.length > 0 ? (
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
                          ) : (
                            <p>No matches found</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default SearchBarTag;
