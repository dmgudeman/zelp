import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getBusinesses,
    fetchBusinesses,
    fetchBusinessesWithTag,
} from "../../../store/businesses";
import { fetchTags, getTags } from "../../../store/tags";
import { processName } from "../../Helpers";
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

    const filterBusinesses = () => {
        return businesses.filter((business) => {
            return business.name
                .toLowerCase()
                .includes(queryLeft.toLowerCase());
        });
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
    const handleTagSearch = (e) => {
        setQueryTag(e.target.value);
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
                    businesses={businesses}
                    tags={tags}
                    queryTag={queryTag}
                    // setQueryRight={setQueryRight}
                    handleSearch={handleTagSearch}
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
