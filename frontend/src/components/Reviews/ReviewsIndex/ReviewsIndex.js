import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, getReviews } from "../../../store/reviews";
import "./ReviewsIndex.css";
import ReviewDisplayCard from "../ReviewDisplayCard/ReviewDisplayCard";
import ExtendIndex from "../../Helpers/ExtendIndex/ExtendIndex.js";

const ReviewsIndex = ({ reviews }) => {
    const [cardTotal, setCardTotal] = useState(6);

    const extendHandler = () => {
        setCardTotal(cardTotal + 6);
    };

    return (
        <>
            <div id="reviewsIndexContainer">
                {reviews.length ? (
                    reviews.map((review, idx) => {
                        if (idx < cardTotal) {
                            return (
                                <ReviewDisplayCard
                                    review={review}
                                    key={review.id}
                                />
                            );
                        }
                    })
                ) : (
                    <div id="noReviews">
                        There are currently no reviews for this business... you
                        can be the first
                    </div>
                )}
            </div>
            <ExtendIndex extendHandler={extendHandler} />
        </>
    );
};

export default ReviewsIndex;
