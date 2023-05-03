import "./SearchBarAdd.css";

const SearchBarAdd = (props) => {
    const { queryAdd, handleAddSearchEvent } = { ...props };
    return (
        <>
            <div className="SBcontainer">
                <div className="SBInputWrap">
                    <input
                        className="SBInput"
                        type="text"
                        value={queryAdd}
                        placeholder="Search by city"
                        onChange={handleAddSearchEvent}
                    />
                </div>
            </div>
        </>
    );
};

export default SearchBarAdd;
