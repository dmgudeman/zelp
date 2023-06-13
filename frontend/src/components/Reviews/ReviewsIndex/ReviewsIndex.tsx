import React from "react";
import { useState, useEffect } from "react";
import { useDispatch as _useDispatch, useSelector } from "react-redux";
import {
    fetchReviewsByBusiness,
    getReviews,
} from "../../../store/reviewsSlice";
import { showNewReviewModal } from "../../../store/uiSlice";
import "./ReviewsIndex.css";
import ReviewDisplayCard from "../ReviewDisplayCard/ReviewDisplayCard";
import ExtendIndex from "../../Helpers/ExtendIndex/ExtendIndex.js";
import type { IReviewIndexProps } from "../../../Types/IComponents/IReviews";
import { AppDispatch } from "../../../store/store";

const useDispatch = () => _useDispatch<AppDispatch>();

const ReviewsIndex: React.FC<IReviewIndexProps> = ({ business }) => {
    const dispatch = useDispatch();
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
        dispatch(showNewReviewModal(business.id));
    };

    // not as good as soring on back end but sufficient for this size app
    let sortedReviews = reviews.slice().sort((a, b) => {
        if (a.updatedAt && b.updatedAt) {
            const dateA = Date.parse(a.updatedAt);
            const dateB = Date.parse(b.updatedAt);

            return dateB - dateA;
        }
        if (!a.updatedAt) {
            return -1;
          }
          
          if (!b.updatedAt) {
            return +1;
          }
          
          return 0;
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
