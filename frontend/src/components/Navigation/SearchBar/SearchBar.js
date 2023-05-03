import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getBusinesses,
    fetchBusinesses,
    fetchBusinessesWithTag,
} from "../../../store/businesses";
import { fetchTags, getTags } from "../../../store/tags";
import SearchBarBus from "./SearchBarBus/SearchBarBus";
import SearchBarAdd from "./SearchBarAdd/SearchBarAdd";
import SearchBarTag from "./SearchBarTag/SearchBarTag";
import "./SearchBar.css";

const SearchBar = (props) => {
    const dispatch = useDispatch();
    let businesses = useSelector(getBusinesses);
    let tags = useSelector(getTags);
    const [queryTag, setQueryTag] = useState("");
    const [selectTag, setSelectTag] = useState(null);
    const [hideTagList, setHideTagList] = useState(true);
    const [queryBus, setQueryBus] = useState("");
    const [selectBus, setSelectBus] = useState(null);
    const [hideBusList, setHideBusList] = useState(true);
   
    const [queryAdd, setQueryAdd] = useState("");
    
    const filterBusinesses = () => {
        return businesses.filter((business) => {
            return business.name
                .toLowerCase()
                .includes(queryBus.toLowerCase());
        });
    };

    const handleTagListClick = (tag) => {
        setSelectTag(tag);
        setHideTagList(true);
    };

    const handleTagSearchEvent = (e) => {
        e.preventDefault();
        setHideTagList(false);
        setQueryTag(e.target.value);
        setSelectTag(null);
    };

    const handleBusListClick = (bus) => {
        setSelectBus(bus);
        setHideBusList(true);
    }

    const handleBusSearchEvent = (e) => {
        e.preventDefault();
        setHideBusList(false);
        setQueryBus(e.target.value);
        setSelectBus(null);
    }

    const filterTags = () => {
        return tags.filter((tag) => {
            return tag.tag.toLowerCase().includes(queryTag.toLowerCase());
        });
    };

    const handleAddSearchEvent = (e) => {
        e.preventDefault();
        setQueryAdd(e.target.value);
    };

    useEffect(() => {
        dispatch(fetchTags());
        dispatch(fetchBusinesses());
    }, [dispatch]);

    useEffect(() => {
        filterBusinesses();
    }, [queryBus]);

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

                <SearchBarBus
                    businesses={businesses}
                    queryBus={queryBus}
                    selectBus={selectBus}    
                    hideBusList={hideBusList}               
                    handleBusSearchEvent={handleBusSearchEvent}
                    handleBusListClick={handleBusListClick}
                    filterBusinesses={filterBusinesses}
                />

                <SearchBarAdd
                    queryAdd={queryAdd}
                    setQueryAdd={setQueryAdd}
                    handleAddSearchEvent={handleAddSearchEvent}
                    
                />

                <div className="searchButton">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </form>
        </>
    );
};

export default SearchBar;
