import React from "react";
import { useState, useEffect } from "react";
import { useDispatch as _useDispatch, useSelector } from "react-redux";
import ReviewEdit from "../ReviewEdit/ReviewEdit";
import DisplayRating from "../RatingDisplay/RatingDisplay";
import { showEditReviewModal } from "../../../store/uiSlice";
import type { IReviewDisplayCardProps } from "../../../Types/IComponents/IReviews";
import type { RootState, AppDispatch } from "../../../store/store";
import { deleteReview, getReview } from "../../../store/reviewsSlice";
import "./ReviewDisplayCard.css";

const useDispatch = () => _useDispatch<AppDispatch>();

const ReviewDisplayCard: React.FC<IReviewDisplayCardProps> = ({ reviewId }) => {
    // const { body, photoUrl, rating, businessId, authorId } = { ...review };
    const review = useSelector((state: RootState) =>
        getReview(reviewId)(state)
    );

    const dispatch = useDispatch();
    const sessionUser = useSelector((state: RootState) => state.session.user);
    const [cardTotal, setCardTotal] = useState(6);
    const [showButtons, setShowButtons] = useState(
        review?.authorId === sessionUser?.id
    );

    const formatDate = (dateString: string) => {
        let date = new Date(dateString);
        return (
            date.getMonth() +
            1 +
            "/" +
            date.getDate() +
            "/" +
            date.getFullYear().toString().substr(-2)
        );
    };
    const deleteHandler = () => {
        if (review) dispatch(deleteReview(review.id));
    };

    const editHandler = () => {
        if (review) dispatch(showEditReviewModal(review));
    };
    if (!review) {
        return null; // or a loading spinner, etc.
    }
    // const closeEditReviewModal = () => {
    //     setEditReviewModal(false);
    // }
    // const [date, setDate] = useState(
    //     review.updatedAt ? formatDate(review.updatedAt) : ""
    // );

    let editButtons;
    if (showButtons) {
        editButtons = (
            <div className="miniButtonContainer">
                <button
                    className="editButton miniButton"
                    onClick={() => editHandler()}
                >
                    edit
                </button>
                <button
                    className="delButton miniButton"
                    onClick={() => deleteHandler()}
                >
                    del
                </button>
            </div>
        );
    } else {
        editButtons = null;
    }

    return (
        <>
            <div id="reviewCardContainer">
                <div id="bodyContainer">
                    <div id="bodyCell">
                        <div id="ratingDateContainer">
                            <DisplayRating
                                rating={review.rating}
                                starClass="starCard"
                            />
                            <div id="reviewDate">
                                {review.updatedAt
                                    ? formatDate(review.updatedAt)
                                    : null}
                            </div>
                        </div>
                        <div id="truncWidth">
                            {review && review.body && review.body.length > 80
                                ? `${review.body.substring(0, 60)}...`
                                : review.body}
                        </div>

                        <div className="authorName">{`by: ${review.authorName}`}</div>
                        {editButtons}
                    </div>
                </div>
                {review.photoUrl ? (
                    <div id="photoRatingCell">
                        <img id="imgRDC" src={review.photoUrl} alt="" />
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default ReviewDisplayCard;
