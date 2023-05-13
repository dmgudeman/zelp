import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewsByBusiness, getReviews, deleteReview  } from "../../../store/reviews";
import { useParams, Link, Redirect } from "react-router-dom";
import "./ReviewsIndex.css";
import ReviewDisplayCard from "../ReviewDisplayCard/ReviewDisplayCard";
import ExtendIndex from "../../Helpers/ExtendIndex/ExtendIndex.js";

const ReviewsIndex = ({ business }) => {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews)
    const [cardTotal, setCardTotal] = useState(6);
    

    const deleteHandler =(reviewId) => {
    
        dispatch(deleteReview(reviewId))
        dispatch(fetchReviewsByBusiness(business.id))
    }
    const extendHandler = () => {
        setCardTotal(cardTotal + 6);
    };
    useEffect(()=>{
       dispatch(fetchReviewsByBusiness(business.id))
    }, [dispatch])

    

    return (
        <>
           <div id="containerRI">
           <div className="buttons marginTop">
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
                                    deleteHandler={deleteHandler}
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
