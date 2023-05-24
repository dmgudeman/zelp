import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "./SearchBarBus.css";

const SearchBarBus = (props) => {
    const {
        searchData,
        selectBus,
        hideBusList,
        searchError,
        handleSearchEvent,
        handleBusListClick,
        filterBusinesses,
    } = { ...props };

    return (
        <>
            <div className="SBcontainer">
                <div className="SBInputWrap">
                    <input
                        className="SBInput"
                        type="text"
                        name="bus"
                        value={selectBus ? selectBus : searchData.bus}
                        placeholder="Search by business name"
                        onChange={handleSearchEvent}
                    />
                </div>

                {hideBusList ? null : (
                    <div className="SBDropDown">
                        <ul>
                            {filterBusinesses().map((business) => (
                                <li
                                    key={business.name}
                                    onClick={() =>
                                        handleBusListClick(business.name)
                                    }
                                >
                                    {business.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default SearchBarBus;
