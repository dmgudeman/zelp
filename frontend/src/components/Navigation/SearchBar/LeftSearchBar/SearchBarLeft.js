import { processName } from "../../../Helpers";

const SearchBarLeft = (props) => {
    const {
        businesses,
        handleSearch,
        filterBusinesses,
        searchTerm,
        setSearchTerm,
    } = { ...props };

    if (!businesses) return null;
    return (
        <>
            <div>
                <input
                    className="leftSearchBar"
                    type="text"
                    placeholder="Search by name"
                    onChange={handleSearch}
                />
                {searchTerm && (
                    <ul>
                        {filterBusinesses().map((business) => (
                            <li key={business.name}>
                                {" "}
                                {processName(business.name)}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default SearchBarLeft;
