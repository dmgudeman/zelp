import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, getReviews } from "../../../store/reviews";
import { useParams, Link, Redirect } from "react-router-dom";
import "./ReviewsIndex.css";
import ReviewDisplayCard from "../ReviewDisplayCard/ReviewDisplayCard";
import ExtendIndex from "../../Helpers/ExtendIndex/ExtendIndex.js";

const ReviewsIndex = ({ reviews, business }) => {
    const [cardTotal, setCardTotal] = useState(6);

    const extendHandler = () => {
        setCardTotal(cardTotal + 6);
    };

    return (
        <>
           <div id="containerRI">
           <div className="buttons">
                            <Link to={`/reviewNew/${business.id}`}>
                                <button className="blue-button">
                                    {/* <i className="fa-regular fa-star"></i>  */}
                                    Leave your opinions, and optional photo(s)
                                </button>
                            </Link>
                        </div>
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
            { reviews.length > 6 ?  <ExtendIndex extendHandler={extendHandler} /> : null}
           </div>
            
        </>
    );
};

export default ReviewsIndex;
