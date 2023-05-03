import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getBusinesses,
    fetchBusinesses,
    fetchBusinessesSearch,
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
    const [searchData, setSearchData] = useState({tag:'', bus:'', add:''})
    
    const filterBusinesses = () => {
        return businesses.filter((business) => {
            return business.name
                .toLowerCase()
                .includes(queryBus.toLowerCase());
        });
    };

    const handleSearchEvent =(e) => {
        const {name, value } = e.target;
        setSearchData(prevState => ({
            ...prevState,
            [name]: value
        }))

        if(name==='tag'){
            setHideTagList(false);
            setSelectTag(null);}
        if(name==='bus'){
            setHideBusList(false);
            setSelectBus(null);
        }
    }

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

    const handleSearchSubmit = () => {
        dispatch(fetchBusinessesSearch(searchData))
    }

    const filterTags = () => {
        return tags.filter((tag) => {
           
            return tag.tag.toLowerCase().includes(searchData.tag.toLowerCase());
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
    }, [searchData.bus]);

    useEffect(() => {
        filterTags();


    }, [searchData.tag]);


    return (
        <>
            <form className="searchBarContainer">
                <SearchBarTag
                    searchData={searchData}
                    selectTag={selectTag}
                    hideTagList={hideTagList}
                    handleSearchEvent={handleSearchEvent}
                    handleTagListClick={handleTagListClick}
                    filterTags={filterTags}
                />

                <SearchBarBus
                    businesses={businesses}
                    searchData={searchData}
                    selectBus={selectBus}    
                    hideBusList={hideBusList}               
                    handleSearchEvent={handleSearchEvent}
                    handleBusListClick={handleBusListClick}
                    filterBusinesses={filterBusinesses}
                />

                <SearchBarAdd
                    searchData={searchData}
                    handleSearchEvent={handleSearchEvent}
                   
                   
                    
                />

                <div className="searchButton"
                   onClick={handleSearchSubmit}
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </form>
        </>
    );
};

export default SearchBar;
