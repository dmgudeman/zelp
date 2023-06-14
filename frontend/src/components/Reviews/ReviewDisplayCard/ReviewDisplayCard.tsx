import React from 'react';
import { useState } from "react";
import { useDispatch as _useDispatch, useSelector } from "react-redux";
import ReviewEdit from "../ReviewEdit/ReviewEdit";
import DisplayRating from "../RatingDisplay/RatingDisplay";
import {showEditReviewModal} from '../../../store/uiSlice'
import type { IReviewDisplayCardProps } from '../../../Types/IComponents/IReviews';
import type { RootState, AppDispatch } from '../../../store/store';
import {
    deleteReview,
} from "../../../store/reviewsSlice";
import "./ReviewDisplayCard.css";

const useDispatch = () => _useDispatch<AppDispatch>();

const ReviewDisplayCard : React.FC<IReviewDisplayCardProps> = ({ review }) => {
    const { body, photoUrl, rating, businessId, authorId } = { ...review };
    const dispatch = useDispatch();
    const sessionUser = useSelector((state: RootState) => state.session.user);
    const [truncBody, setTruncBody] = useState(
        body?.length > 80 ? body.substring(0, 80) + "..." : body
    );
    const [cardTotal, setCardTotal] = useState(6);
    const [showButtons, setShowButtons] = useState(authorId === sessionUser?.id);
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
        dispatch(deleteReview(review.id));
    };

    const editHandler = () => {
       dispatch(showEditReviewModal(review))
    };

    // const closeEditReviewModal = () => {
    //     setEditReviewModal(false);
    // }
    const [date, setDate] = useState(review.updatedAt ? formatDate(review.updatedAt) : "");

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
                                rating={rating}
                                starClass="starCard"
                            />
                            <div id="reviewDate">{date}</div>
                        </div>
                        <div id="truncWidth">{truncBody} </div>
                       
                        <div className="authorName">{`by: ${review.authorName}`}</div>
                        {editButtons}
                    </div>
                </div>
                {photoUrl ? (
                    <div id="photoRatingCell">
                        <img id="imgRDC" src={photoUrl} alt="" />
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default ReviewDisplayCard;
