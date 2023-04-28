import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, getReviews } from "../../../store/reviews";
import "./ReviewsIndex.css";
import ReviewDisplayCard from "../ReviewDisplayCard/ReviewDisplayCard";

const ReviewsIndex = (props) => {
    let reviews;
    const dispatch = useDispatch();
    reviews = useSelector(getReviews);
    const [cardTotal, setCardTotal] = useState(6);

    useEffect(() => {
        reviews = dispatch(fetchReviews());
    }, []);

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
