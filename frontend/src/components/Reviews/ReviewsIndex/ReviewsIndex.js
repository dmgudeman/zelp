import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchReviewsByBusiness,
    getReviews,
    editReview,
    deleteReview,
} from "../../../store/reviews";
import {showNewReviewModal} from '../../../store/ui';
import { useParams, Link, Redirect, useHistory } from "react-router-dom";
import "./ReviewsIndex.css";
import ReviewDisplayCard from "../ReviewDisplayCard/ReviewDisplayCard";
import ReviewEdit from '../ReviewEdit/ReviewEdit';
import ExtendIndex from "../../Helpers/ExtendIndex/ExtendIndex.js";

const ReviewsIndex = ({ business }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const reviews = useSelector(getReviews);
    const [cardTotal, setCardTotal] = useState(6);


    useEffect(() => {
        if (business?.id) {
            dispatch(fetchReviewsByBusiness(business.id));
        }
    }, []);

 

    const extendHandler = () => {
        setCardTotal(reviews.length);
    };

    const newReviewHandler = () => {
        dispatch(showNewReviewModal(business.id))
        
    }
   
  
    // not as good as soring on back end but sufficient for this size app
    let sortedReviews = reviews.slice().sort((a, b) => {
        // parse the dates and return the comparison
        return new Date(b.updatedAt) - new Date(a.updatedAt);
    });

    return (
        <>
         
          
            <div id="containerRI">
                <div className="buttons marginTop">
                 
                        <button className="blueButton " onClick={newReviewHandler}>
                            Leave your opinions, and optional photo
                        </button>
                </div>
                <div id="reviewsIndexContainer">
                    {reviews.length ? (
                        sortedReviews.map((review, idx) => {
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
