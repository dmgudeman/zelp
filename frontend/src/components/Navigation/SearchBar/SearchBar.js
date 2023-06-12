import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    getBusinesses,
    fetchBusinessesSearch,
} from "../../../store/businesses";
import { fetchTags, getTags } from "../../../store/tags";
import { showModal } from "../../../store/ui";
import SearchBarBus from "./SearchBarBus/SearchBarBus";
import SearchBarAdd from "./SearchBarAdd/SearchBarAdd";
import SearchBarTag from "./SearchBarTag/SearchBarTag";
import SearchBarButton from "./SearchBarButton/SearchBarButton"; // this is necessary
import store from "../../../store";
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

    const handleSearchBarClick = () => {
        store.dispatch(showModal("LOGIN"));
    };
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
                        className="inputSB"
                        searchData={searchData}
                        selectTag={selectTag}
                        hideTagList={hideTagList}
                        handleSearchEvent={handleSearchEvent}
                        handleTagListClick={handleTagListClick}
                        filterTags={filterTags}
                    />

                    <SearchBarBus
                        className="inputSB"
                        businesses={businesses}
                        searchData={searchData}
                        selectBus={selectBus}
                        hideBusList={hideBusList}
                        handleSearchEvent={handleSearchEvent}
                        handleBusListClick={handleBusListClick}
                        filterBusinesses={filterBusinesses}
                    />

                    <SearchBarAdd
                        className="inputSB"
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
