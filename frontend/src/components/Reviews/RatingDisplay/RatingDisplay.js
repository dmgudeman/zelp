import "./RatingDisplay.css";

const DisplayRating = ({rating, starClass}) => {
    let activeRating = parseInt(rating) || 3
    return (
        <>
            <div className="ratingsContainer">
                <div className={activeRating >= 1 ? "colored-in" : "not-colored-in"}>
                    <i className={`fa-solid fa-star ${starClass}`}></i>
                </div>
                <div className={activeRating >= 2 ? "colored-in" : "not-colored-in"}>
                <i className={`fa-solid fa-star ${starClass}`}></i>
                </div>
                <div className={activeRating >= 3 ? "colored-in" : "not-colored-in"}>
                <i className={`fa-solid fa-star ${starClass}`}></i>
                </div>
                <div className={activeRating >= 4 ? "colored-in" : "not-colored-in"}>
                <i className={`fa-solid fa-star ${starClass}`}></i>
                </div>
                <div className={activeRating >= 5 ? "colored-in" : "not-colored-in"}>
                <i className={`fa-solid fa-star ${starClass}`}></i>
                </div>
            </div>
        </>
    );
};

export default DisplayRating;


