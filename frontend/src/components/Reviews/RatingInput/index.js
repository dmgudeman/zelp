import { useEffect, useState } from "react";
import "./RatingInput.css";

const RatingInput = ({ name, value, handleChange }) => {
    const [rating, setRating] = useState(value);
    let disabled = false;
    // console.log('name in RatingInput', name)
    // console.log('value in RatingInput', value)

    useEffect(() => {
        console.log("rating changed rating is:", rating);
    }, [rating]);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        // ratingOnChange(newRating);
    };

    return (
        <div id="ratingContainer" className="rating-input">
            <label
                for="radioButton1"
                className={rating >= 1 ? "colored-in" : "not-colored-in"}
            >
                <input
                    type="radio"
                    id="radioButton1"
                    name={name}
                    value="1"
                    hidden
                    onClick={handleChange}
                />

                <i className="fa-solid fa-star"></i>
            </label>

            <label for="radioButton2">
                <input
                    type="radio"
                    id="radioButton2"
                    name={name}
                    value="2"
                    hidden
                    onClick={handleChange}
                />
                <i className="fa-solid fa-star"></i>
            </label>
            <label for="radioButton3">
                <input
                    type="radio"
                    id="radioButton3"
                    name={name}
                    value="3"
                    hidden
                    onClick={handleChange}
                />
                <i className="fa-solid fa-star"></i>
            </label>
            <label for="radioButton4">
                <input
                    type="radio"
                    id="radioButton4"
                    name={name}
                    value="4"
                    hidden
                    onClick={handleChange}
                />
                <i className="fa-solid fa-star"></i>
            </label>
            <label for="radioButton5">
                <input
                    type="radio"
                    id="radioButton5"
                    name={name}
                    value="5"
                    hidden
                    onClick={handleChange}
                />
                <i className="fa-solid fa-star"></i>
            </label>
            
        </div>
    );
};

export default RatingInput;
