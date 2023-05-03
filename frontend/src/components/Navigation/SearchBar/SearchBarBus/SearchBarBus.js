import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "./SearchBarBus.css";

const SearchBarBus = (props) => {
    const {
        queryBus,
        selectBus,
        hideBusList,
        handleBusSearchEvent,
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
                        value={selectBus ? selectBus : queryBus}
                        placeholder="Search by business name"
                        onChange={handleBusSearchEvent}
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
