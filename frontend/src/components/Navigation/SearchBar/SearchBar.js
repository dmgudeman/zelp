import { useState, useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    getBusinesses,
    fetchBusinessesSearch,
} from "../../../store/businessesSlice";
import { fetchTags, getTags } from "../../../store/tagsSlice";
import { showModal } from "../../../store/uiSlice";
import SearchBarBus from "./SearchBarBus/SearchBarBus";
import SearchBarAdd from "./SearchBarAdd/SearchBarAdd";
import SearchBarTag from "./SearchBarTag/SearchBarTag";
import SearchBarButton from "./SearchBarButton/SearchBarButton"; // this is necessary
import store from "../../../store/store";
import "./SearchBar.css";

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let businesses = useSelector(getBusinesses);
    let tags = useSelector(getTags);
    const [selectTag, setSelectTag] = useState(null);
    const [hideTagList, setHideTagList] = useState(true);
    const [selectBus, setSelectBus] = useState(null);
    const [hideBusList, setHideBusList] = useState(true);
    const [searchData, setSearchData] = useState({ tag: "", bus: "", add: "" });
    const [isSearchDataUpdated, setIsSearchDataUpdated] = useState(false);
    const tagInputRef = useRef(null);

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    useEffect(() => {
        filterBusinesses();
    }, [searchData.bus]);

    useEffect(() => {
        filterTags();
    }, [searchData.tag]);

    useEffect(() => {
        if (isSearchDataUpdated) {
            dispatch(fetchBusinessesSearch(searchData)).then(() => {
                history.push("./businesses");
            });
            setIsSearchDataUpdated(false);
        }
    }, [dispatch, history, isSearchDataUpdated, searchData]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tagInputRef.current && !tagInputRef.current.contains(event.target)) {
                setHideTagList(true);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    // const handleSearchBarClick = () => {
    //     store.dispatch(showModal("LOGIN"));
    // };
    const filterTags = () => {
        return tags.filter((tag) => {
            return tag.tag.toLowerCase().includes(searchData.tag.toLowerCase());
        });
    };
    const filterBusinesses = () => {
        return businesses.filter((business) => {
            return business.name
                .toLowerCase()
                .includes(searchData.bus.toLowerCase());
        });
    };

    const handleSearchEvent = (e) => {
        const { name, value } = e.target;
        setSearchData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        if (name === "tag") {
            setHideTagList(false);
            setSelectTag(null);
        }
        if (name === "bus") {
            dispatch(fetchBusinessesSearch(searchData));
            setHideBusList(false);
            setSelectBus(null);
        }
    };

    const handleTagListClick = (tag) => {
        setSelectTag(tag);
        setHideTagList(true);
    };
  

    const handleBusListClick = (bus) => {
        setSelectBus(bus);
        setHideBusList(true);
    };

    const handleHideTagList = () => {
        setHideTagList(true);
    }
    const handleInputClick = () => {
        // if (hideTagList) {
        //     tagInputRef.current.focus();

        // }
     
    };

    const handleSearchSubmit = () => {
        if (selectTag) {
            setSearchData((prevState) => ({ ...prevState, tag: selectTag }));
        }

        if (selectBus) {
            setSearchData((prevState) => ({
                ...prevState,
                bus: selectBus,
            }));
        }
        setIsSearchDataUpdated(true);

        dispatch(fetchBusinessesSearch(searchData)).then(() => {
            history.push("/businesses");
        });
    };

    return (
        <>
            <div id="containerSB">
                <form id="formSB">
                    <SearchBarTag
                        searchData={searchData}
                        selectTag={selectTag}
                        hideTagList={hideTagList}
                        handleSearchEvent={handleSearchEvent}
                        handleTagListClick={handleTagListClick}
                        handleInputClick={handleInputClick}
                        handleHideTagList={handleHideTagList}
                        filterTags={filterTags}
                        // tagInputRef={tagInputRef}
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

                    <SearchBarButton handleSearchSubmit={handleSearchSubmit} />
                </form>
            </div>
        </>
    );
};
export default SearchBar;
