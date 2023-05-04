import { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    getBusinesses,
    fetchBusinesses,
    fetchBusinessesSearch,
} from "../../../store/businesses";
import { fetchTags, getTags } from "../../../store/tags";

import { showModal, hideModal } from '../../../store/ui';
import SearchBarBus from "./SearchBarBus/SearchBarBus";
import SearchBarAdd from "./SearchBarAdd/SearchBarAdd";
import SearchBarTag from "./SearchBarTag/SearchBarTag";
import SearchBarButton from "./SearchBarButton/SearchBarButton";
import store from '../../../store';

import Modal from '../../Modal/Modal';
import LoginForm from '../../Auth/LoginForm/LoginForm';


import "./SearchBar.css";

const SearchBar = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    let businesses = useSelector(getBusinesses);
    let tags = useSelector(getTags);
    // const [queryTag, setQueryTag] = useState("");
    const [selectTag, setSelectTag] = useState(null);
    const [hideTagList, setHideTagList] = useState(true);
    // const [queryBus, setQueryBus] = useState("");
    const [selectBus, setSelectBus] = useState(null);
    const [hideBusList, setHideBusList] = useState(true);
    // const [queryAdd, setQueryAdd] = useState("");
    const [searchData, setSearchData] = useState({ tag: "", bus: "", add: "" });
    const [isSearchDataUpdated, setIsSearchDataUpdated] = useState(false);

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

    useEffect(() => {
        if (isSearchDataUpdated) {
            dispatch(fetchBusinessesSearch(searchData)).then(() => {
                history.push("./businesses");
            });
            setIsSearchDataUpdated(false);
        }
    }, [dispatch, history, isSearchDataUpdated, searchData]);

  

      const handleSearchBarClick = () => {
        store.dispatch(showModal('LOGIN'));
      }

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
            setHideBusList(false);
            setSelectBus(null);
        }
    };

    const handleTagListClick = (tag) => {
        setSelectTag(tag);
        setHideTagList(true);
    };

    // const handleTagSearchEvent = (e) => {
    //     e.preventDefault();
    //     setHideTagList(false);
    //     setQueryTag(e.target.value);
    //     setSelectTag(null);
    // };

    const handleBusListClick = (bus) => {
        setSelectBus(bus);
        setHideBusList(true);
    };

    // const handleBusSearchEvent = (e) => {
    //     e.preventDefault();
    //     setHideBusList(false);
    //     setQueryBus(e.target.value);
    //     setSelectBus(null);
    // }

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
            history.push("./businesses");
        });
    };

    // const handleAddSearchEvent = (e) => {
    //     e.preventDefault();
    //     setQueryAdd(e.target.value);
    // };

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
                    <SearchBarButton 
                    className="inputSB"
                    handleSearchSubmit={handleSearchSubmit}/>
                    
                    {/* <input type="text" placeholder="Search..." onClick={handleSearchBarClick} /> */}

                </form>
            </div>
        </>
    );
};
export default SearchBar;


// const mapDispatchToProps = (dispatch) => ({
//     dispatchShowModal: (modalType, modalProps) => dispatch(showModal(modalType, modalProps)),
//   });
  
//   export default connect(null, mapDispatchToProps)(SearchBar);
