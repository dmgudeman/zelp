import React from 'react';
import "./RatingInputNew.css";

export interface IRatingInputProps {
    className: string;
    name: string;
    value: number | null;
    rating: number | null;
    handleNewRatingChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
}


const RatingInputNew : React.FC<IRatingInputProps> = ({ name, rating, handleNewRatingChange}) => {
    const ratingValue = rating || 0;
    return (
       
        <div id="ratingContainer" className="rating-input">
            <label
                htmlFor="radioButton1"
                className={ratingValue >= 1 ? "colored-in-N" : "not-colored-in-N"}
            >
                <i className="fa-solid fa-star star"></i>{" "}
            </label>

            <input
                type="radio"
                id="radioButton1"
                name={name}
                value="1"
                hidden
                onChange={handleNewRatingChange}
            />

            <label
                htmlFor="radioButton2"
                className={ratingValue >= 2 ? "colored-in-N" : "not-colored-in-N"}
            >
                <i className="fa-solid fa-star star"></i>
            </label>
            <input
                type="radio"
                id="radioButton2"
                name={name}
                value="2"
                hidden
                onChange={handleNewRatingChange}
            />

            <label
                htmlFor="radioButton3"
                className={ratingValue >= 3 ? "colored-in-N" : "not-colored-in-N"}
            >
                {" "}
                <i className="fa-solid fa-star star"></i>
            </label>
            <input
                type="radio"
                id="radioButton3"
                name={name}
                value="3"
                hidden
                onChange={handleNewRatingChange}
            />

            <label
                htmlFor="radioButton4"
                className={ratingValue >= 4 ? "colored-in-N" : "not-colored-in-N"}
            >
                {" "}
                <i className="fa-solid fa-star star"></i>
            </label>
            <input
                type="radio"
                id="radioButton4"
                name={name}
                value="4"
                hidden
                onChange={handleNewRatingChange}
            />

            <label
                htmlFor="radioButton5"
                className={ratingValue >= 5 ? "colored-in" : "not-colored-in-N"}
            >
                {" "}
                <i className="fa-solid fa-star star"></i>
            </label>
            <input
                type="radio"
                id="radioButton5"
                name={name}
                value="5"
                hidden
                onChange={handleNewRatingChange}
            />
        </div>
    );
    
};

export default RatingInputNew;
