import React, { useRef } from "react";
import  useOutsideClick  from '../UseOutsideHook'; 
import { SBBusProps} from '../../../../Types/IComponents/INavigation'

const SearchBarBus: React.FC<SBBusProps>= (props) => {
    const {
        searchData,
        selectBus,
        hideBusList,
        handleSearchEvent,
        handleBusListClick,
        handleHideBusList,
        filterBusinesses,
    } = { ...props };

    const ref = useRef<HTMLDivElement>(null);
    useOutsideClick(ref, () => {
        if (!hideBusList) {
            handleHideBusList(); 
        }
    });

    return (
        <>
            <div className="SBcontainer" ref={ref}>
                <div className="SBInputWrap">
                    <input
                        className="SBInput"
                        type="text"
                        name="bus"
                        value={selectBus ? selectBus : searchData.bus}
                        placeholder="Business name search"
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
