import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getBusinesses,
    fetchBusinesses,
    fetchBusinessesWithTag,
} from "../../../store/businesses";
import { fetchTags, getTags } from "../../../store/tags";
import SearchBarLeft from "./SearchBarLeft/SearchBarLeft";
import SearchBarRight from "./SearchBarRight/SearchBarRight";
import SearchBarTag from "./SearchBarTag/SearchBarTag";
import "./SearchBar.css";

const SearchBar = (props) => {
    const dispatch = useDispatch();
    let businesses = useSelector(getBusinesses);
    let tags = useSelector(getTags);
    const [queryLeft, setQueryLeft] = useState("");
    const [queryRight, setQueryRight] = useState("");
    const [queryTag, setQueryTag] = useState("");
    const [selectTag, setSelectTag] = useState(null);
    const [hideTagList, setHideTagList] = useState(true);

    const filterBusinesses = () => {
        return businesses.filter((business) => {
            return business.name
                .toLowerCase()
                .includes(queryLeft.toLowerCase());
        });
    };

    // handleTagFilterChangeEvent =(e) => {
    //     setFilterTag(e.target.value);
    //     setSelectedItem(null);
    // }
    const handleTagListClick = (tag) => {
        setSelectTag(tag);
        setHideTagList(true);
    };

    const handleTagSearchEvent = (e) => {
        setHideTagList(false);
        setQueryTag(e.target.value);
        setSelectTag(null);
    };

    const filterTags = () => {
        return tags.filter((tag) => {
            return tag.tag.toLowerCase().includes(queryTag.toLowerCase());
        });
    };

    const filterCities = () => {};

    const handleLeftSearch = (e) => {
        setQueryLeft(e.target.value);
    };
    const handleRightSearch = (e) => {
        setQueryRight(e.target.value);
    };

    useEffect(() => {
        dispatch(fetchTags());
        dispatch(fetchBusinesses());
    }, [dispatch]);

    useEffect(() => {
        filterBusinesses();
    }, [queryLeft]);

    useEffect(() => {
        filterTags();
    }, [queryTag]);

    return (
        <>
            <form className="searchBarContainer">
                <SearchBarTag
                    queryTag={queryTag}
                    selectTag={selectTag}
                    hideTagList={hideTagList}
                    handleTagSearchEvent={handleTagSearchEvent}
                    handleTagListClick={handleTagListClick}
                    filterTags={filterTags}
                />

                <SearchBarLeft
                    businesses={businesses}
                    queryLeft={queryLeft}
                    setQueryLeft={setQueryLeft}
                    handleSearch={handleLeftSearch}
                    filterBusinesses={filterBusinesses}
                />

                <SearchBarRight
                    businesses={businesses}
                    queryRight={queryRight}
                    setQueryRight={setQueryRight}
                    handleSearch={handleRightSearch}
                    filterBusinesses={filterBusinesses}
                />

                <div className="searchButton">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </form>
        </>
    );
};

export default SearchBar;
