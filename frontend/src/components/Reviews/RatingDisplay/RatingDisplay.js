import "./RatingDisplay.css";

const DisplayRating = ({rating}) => {
    let activeRating = rating || 3
    return (
        <>
            <div className="ratingsContainer">
                <div className={activeRating >= 1 ? "colored-in" : "not-colored-in"}>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className={activeRating >= 2 ? "colored-in" : "not-colored-in"}>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className={activeRating >= 3 ? "colored-in" : "not-colored-in"}>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className={activeRating >= 4 ? "colored-in" : "not-colored-in"}>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className={activeRating >= 5 ? "colored-in" : "not-colored-in"}>
                    <i className="fa-solid fa-star"></i>
                </div>
            </div>
        </>
    );
};

export default DisplayRating;

