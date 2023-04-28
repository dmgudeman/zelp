import { useState, useEffect } from "react";

import "./ReviewsIndex.css";
import ReviewDisplayCard from "../ReviewDisplayCard/ReviewDisplayCard";

const ReviewsIndex = ({ reviews }) => {
    const [cardTotal, setCardTotal] = useState(6);

    return (
        <>
            <div id="reviewsIndexContainer">
                {reviews.map((review, idx) => {
                    if (idx < cardTotal) {
                        return (
                            <ReviewDisplayCard
                                review={review}
                                key={review.id}
                            />
                        );
                    }
                })}
            </div>
        </>
    );
};

export default ReviewsIndex;
