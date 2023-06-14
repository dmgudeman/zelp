import React from 'react';
import type { IDisplayRatingProps } from "../../../Types/IComponents/IReviews";
import "./RatingDisplay.css";

const DisplayRating: React.FC<IDisplayRatingProps> = ({rating, starClass}) => {
    return (
        <>
            <div className="ratingsContainer">
                <div className={rating >= 1 ? "colored-in" : "not-colored-in"}>
                    <i className={`fa-solid fa-star ${starClass}`}></i>
                </div>
                <div className={rating >= 2 ? "colored-in" : "not-colored-in"}>
                <i className={`fa-solid fa-star ${starClass}`}></i>
                </div>
                <div className={rating >= 3 ? "colored-in" : "not-colored-in"}>
                <i className={`fa-solid fa-star ${starClass}`}></i>
                </div>
                <div className={rating >= 4 ? "colored-in" : "not-colored-in"}>
                <i className={`fa-solid fa-star ${starClass}`}></i>
                </div>
                <div className={rating >= 5 ? "colored-in" : "not-colored-in"}>
                <i className={`fa-solid fa-star ${starClass}`}></i>
                </div>
            </div>
        </>
    );
};

export default DisplayRating;


