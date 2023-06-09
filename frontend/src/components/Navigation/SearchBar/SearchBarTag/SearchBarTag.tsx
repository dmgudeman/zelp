import React, { useRef } from "react";
import  useOutsideClick  from '../UseOutsideHook'; 
import type { SBTagProps } from '../../../../Types/IComponents/INavigation'

const SearchBarTag: React.FC<SBTagProps> = (props:SBTagProps) => {
    const {
        searchData,
        selectTag,
        hideTagList,
        handleSearchEvent,
        handleTagListClick,
        filterTags,
        handleHideTagList
    } = { ...props };

    const filteredTags = filterTags();
    const ref = useRef<HTMLDivElement>(null);
    useOutsideClick(ref, () => {
        if (!hideTagList) {
            handleHideTagList(); 
        }
    });

    return (
        <>
            <div className="SBcontainer" ref={ref}>
                <div className="SBInputWrap" >
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
