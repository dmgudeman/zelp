import "./SearchBarAdd.css";

const SearchBarAdd = (props) => {
    const { searchData, handleSearchEvent } = { ...props };
    return (
        <>
            <div className="containerInputSB">
                <div className="wrapInputSB">
                    <input
                        className="inputSB"
                        type="text"
                        name="add"
                        value={searchData.add}
                        placeholder="Search by address"
                        onChange={handleSearchEvent}
                    />
                </div>
            </div>
        </>
    );
};

export default SearchBarAdd;
