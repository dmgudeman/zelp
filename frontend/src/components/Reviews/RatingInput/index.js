

import { useEffect, useState } from 'react';
import './RatingInput.css';

const RatingInput = ({ pRating, disabled, ratingOnChange }) => {
  const [rating, setRating] = useState(pRating);


  const handleRatingChange = (newRating) => {
    setRating(newRating);
    ratingOnChange(newRating);
  };

  return (
    <div id="ratingContainer" className="rating-input">
      <div
        className={rating >= 1 ? "filled" : "empty"}
        onMouseEnter={() => { if (!disabled) setRating(1)} }
        onMouseLeave={() => { if (!disabled) setRating(rating)} }
        onClick={() => { if (!disabled) handleRatingChange(1)} }
      >
        <i className="fa-solid fa-star"></i>
      </div>
      <div
        className={rating >= 2 ? "filled" : "empty"}
        onMouseEnter={() => { if (!disabled) setRating(2)} }
        onMouseLeave={() => { if (!disabled) setRating(rating)} }
        onClick={() => { if (!disabled) handleRatingChange(2)} }
      >
        <i className="fa-solid fa-star"></i>
      </div>
      <div
        className={rating >= 3 ? "filled" : "empty"}
        onMouseEnter={() => { if (!disabled) setRating(3)} }
        onMouseLeave={() => { if (!disabled) setRating(rating)} }
        onClick={() => { if (!disabled) handleRatingChange(3)} }
      >
        <i className="fa-solid fa-star"></i>
      </div>
      <div
        className={rating >= 4 ? "filled" : "empty"}
        onMouseEnter={() => { if (!disabled) setRating(4)} }
        onMouseLeave={() => { if (!disabled) setRating(rating)} }
        onClick={() => { if (!disabled) handleRatingChange(4)} }
      >
        <i className="fa-solid fa-star"></i>
      </div>
      <div
        className={rating >= 5 ? "filled" : "empty"}
        onMouseEnter={() => { if (!disabled) setRating(5) }}
        onMouseLeave={() => { if (!disabled) setRating(rating)} }
        onClick={() => { if (!disabled) handleRatingChange(5)} }
      >
        <i className="fa-solid fa-star"></i>
      </div>
    </div>
  );
};

export default RatingInput;