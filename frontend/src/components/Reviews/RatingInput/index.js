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
            <label for="radioButton1">
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
            {/* <div
                className={rating >= 1 ? "filled" : "empty"}
                name={name}
                value={value}
                onMouseEnter={() => {
                    if (!disabled) setRating(1);
                }}
                onMouseLeave={() => {
                    if (!disabled) setRating(rating);
                }}
                // onClick={() => { if (!disabled) handleChange} }
                // onChange={()=> {handleChange(1)}}
                onChange={handleChange}
            >
                <i className="fa-solid fa-star"></i>
            </div>
            <div
                className={rating >= 2 ? "filled" : "empty"}
                name={name}
                value={value}
                onMouseEnter={() => {
                    if (!disabled) setRating(2);
                }}
                onMouseLeave={() => {
                    if (!disabled) setRating(rating);
                }}
                // onChange={() => { if (!disabled) handleRatingChange(2) }}
                onChange={handleChange}
            >
                <i className="fa-solid fa-star"></i>
            </div>
            <div
                className={rating >= 3 ? "filled" : "empty"}
                name={name}
                value={value}
                onMouseEnter={() => {
                    if (!disabled) setRating(3);
                }}
                onMouseLeave={() => {
                    if (!disabled) setRating(rating);
                }}
                // onChange={() => { if (!disabled) handleRatingChange(3)} }
                onChange={handleChange}
            >
                <i className="fa-solid fa-star"></i>
            </div>
            <div
                className={rating >= 4 ? "filled" : "empty"}
                name={name}
                value={value}
                onMouseEnter={() => {
                    if (!disabled) setRating(4);
                }}
                onMouseLeave={() => {
                    if (!disabled) setRating(rating);
                }}
                // onChange={() => { if (!disabled) handleRatingChange(4)} }
                onChange={handleChange}
            >
                <i className="fa-solid fa-star"></i>
            </div>
            <div
                className={rating >= 5 ? "filled" : "empty"}
                name={name}
                value={value}
                onMouseEnter={() => {
                    if (!disabled) setRating(5);
                }}
                onMouseLeave={() => {
                    if (!disabled) setRating(rating);
                }}
                // onChange={() => { if (!disabled) handleRatingChange(5)} }
                onChange={handleChange}
            >
                <i className="fa-solid fa-star"></i>
            </div> */}
        </div>
    );
};

export default RatingInput;
