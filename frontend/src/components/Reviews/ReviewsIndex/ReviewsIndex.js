import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchReviewsByBusiness,
    getReviews,
    editReview,
    deleteReview,
} from "../../../store/reviews";
import { useParams, Link, Redirect, useHistory } from "react-router-dom";
import "./ReviewsIndex.css";
import ReviewDisplayCard from "../ReviewDisplayCard/ReviewDisplayCard";
import ExtendIndex from "../../Helpers/ExtendIndex/ExtendIndex.js";

const ReviewsIndex = ({ business}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const reviews = useSelector(getReviews)
   
    const [cardTotal, setCardTotal] = useState(6);
    console.log("REVIEWS", reviews)

    useEffect(()=> {
        if (business?.id){
            dispatch(fetchReviewsByBusiness(business.id))
        }

    }, [])

    const deleteHandler = (reviewId) => {
        dispatch(deleteReview(reviewId));
        // dispatch(fetchReviewsByBusiness(business.id));
    };

    const editHandler = (reviewId) => {
        history.push(`/reviewEdit/${reviewId}`);
        // dispatch(fetchReviewsByBusiness(business.id))
    };

    const extendHandler = () => {    
        setCardTotal(reviews.length);
    };
    // useEffect(() => {
    //     dispatch(fetchReviewsByBusiness(business.id));
    // }, [dispatch]);

    let sortedReviews = reviews.slice().sort((a, b) => {
        // parse the dates and return the comparison
        return new Date(b.updatedAt) - new Date(a.updatedAt);
    });

    return (
        <>
            <div id="containerRI">
                <div className="buttons marginTop">
                    <Link to={`/reviewNew/${business.id}`}>
                        <button className="blueButton ">
                            {/* <i className="fa-regular fa-star"></i>  */}
                            Leave your opinions, and optional photo(s)
                        </button>
                    </Link>
                </div>
                <div id="reviewsIndexContainer">
                    {reviews.length ? (
                        sortedReviews.map((review, idx) => {
                            
                            if (idx < cardTotal) {
                                return (
                                    <ReviewDisplayCard
                                        review={review}
                                        key={review.id}
                                        deleteHandler={deleteHandler}
                                        editHandler={editHandler}
                                    />
                                );
                            }
                        })
                    ) : (
                        <div id="noReviews">
                            There are currently no reviews for this business...
                            you can be the first
                        </div>
                    )}
                </div>
                {reviews.length > 6 && reviews.length !== cardTotal ? (
                    <ExtendIndex extendHandler={extendHandler} />
                ) : null}
            </div>
        </>
    );
};

export default ReviewsIndex;
