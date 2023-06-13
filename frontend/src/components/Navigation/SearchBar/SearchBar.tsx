import React, { useState, useEffect, useRef, ChangeEvent} from "react";
import {  useSelector, useDispatch as _useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    getBusinesses,
    fetchBusinessesSearch,
} from "../../../store/businessesSlice";
import { fetchTags, getTags } from "../../../store/tagsSlice";
import SearchBarBus from "./SearchBarBus/SearchBarBus";
import SearchBarAdd from "./SearchBarAdd/SearchBarAdd";
import SearchBarTag from "./SearchBarTag/SearchBarTag";
import SearchBarButton from "./SearchBarButton/SearchBarButton"; // this is necessary
import type {AppDispatch} from "../../../store/store";
import "./SearchBar.css";
import { Business } from "../../../Types/BusinessTypes";
import { Tag } from '../../../Types/TagTypes';


// useDispatch expects a Redux action object but createAsyncThunk  returns a thunk function
const useDispatch = () => _useDispatch<AppDispatch>();

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let businesses: Business[] = useSelector(getBusinesses);
    let tags = useSelector(getTags);
    const [selectTag, setSelectTag] = useState<string | null>(null);
    const [hideTagList, setHideTagList] = useState(true);
    const [selectBus, setSelectBus] = useState<string | null>(null);
    const [hideBusList, setHideBusList] = useState(true);
    const [searchData, setSearchData] = useState({ tag: "", bus: "", add: "" });
    const [isSearchDataUpdated, setIsSearchDataUpdated] = useState(false);
    const tagInputRef = React.useRef<HTMLInputElement>(null);


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
        const handleClickOutside = (event:MouseEvent) => {
            if (tagInputRef.current && !tagInputRef.current.contains(event.target as Node)) {
                setHideTagList(true);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


  
    const filterTags = (): Tag[] => {
        return tags.filter(tag => tag.tag.toLowerCase().includes(searchData.tag.toLowerCase()));
        
    };
    const filterBusinesses = (): Business[] => {
        return businesses.filter((business) => {
            return business.name
                .toLowerCase()
                .includes(searchData.bus.toLowerCase());
        });
    };

    const handleSearchEvent = (e: React.SyntheticEvent) => {
        const { name, value } = e.target as HTMLInputElement;
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

    const handleTagListClick = (tag:string) => {
        setSelectTag(tag);
        setHideTagList(true);
    };
  

    const handleBusListClick = (bus:string) => {
        setSelectBus(bus);
        setHideBusList(true);
    };

    const handleHideTagList = () => {
        setHideTagList(true);
    }
  

    const handleSearchSubmit = async (): Promise<void> => {
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
                        handleHideTagList={handleHideTagList}
                        filterTags={filterTags}
                        // tagInputRef={tagInputRef}
                    />

                    <SearchBarBus
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
