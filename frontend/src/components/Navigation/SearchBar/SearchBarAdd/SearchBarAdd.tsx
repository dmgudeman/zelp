import React from 'react';
import { SBAddProps } from '../../../../Types/IComponents/INavigation';

const SearchBarAdd: React.FC<SBAddProps> = (props) => {
    const { searchData, handleSearchEvent } = { ...props };
    return (
        <>
            <div className="SBcontainer">
                <div className="SBInputWrap">
                    <input
                        className="SBInput"
                        type="text"
                        name="add"
                        value={searchData.add}
                        placeholder="Address search"
                        onChange={handleSearchEvent}
                    />
                </div>
            </div>
        </>
    );
};

export default SearchBarAdd;
