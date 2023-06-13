import "./RatingInput.css";

const RatingInput = ({ name, rating, handleChange }) => {
    return (
        <div id="ratingContainer" className="rating-input">
            <label
                htmlFor="radioButton1"
                className={rating >= 1 ? "colored-in" : "not-colored-in"}
            >
                <i className="fa-solid fa-star star"></i>{" "}
            </label>

            <input
                type="radio"
                id="radioButton1"
                name={name}
                value="1"
                hidden
                onClick={handleChange}
            />

            <label
                htmlFor="radioButton2"
                className={rating >= 2 ? "colored-in" : "not-colored-in"}
            >
                <i className="fa-solid fa-star star"></i>
            </label>
            <input
                type="radio"
                id="radioButton2"
                name={name}
                value="2"
                hidden
                onClick={handleChange}
            />

            <label
                htmlFor="radioButton3"
                className={rating >= 3 ? "colored-in" : "not-colored-in"}
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
                onClick={handleChange}
            />

            <label
                htmlFor="radioButton4"
                className={rating >= 4 ? "colored-in" : "not-colored-in"}
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
                onClick={handleChange}
            />

            <label
                htmlFor="radioButton5"
                className={rating >= 5 ? "colored-in" : "not-colored-in"}
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
                onClick={handleChange}
            />
        </div>
    );
};

export default RatingInput;
