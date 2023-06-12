import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewEdit from "../ReviewEdit/ReviewEdit";
import DisplayRating from "../RatingDisplay/RatingDisplay";
import Modal from "../../Modals/ModalsAuth/AuthModal";
import {showModal} from '../../../store/ui'
import {
    deleteReview,
} from "../../../store/reviews";
import "./ReviewDisplayCard.css";

const ReviewDisplayCard = ({ review}) => {
    const { body, photoUrl, rating, businessId, authorId } = { ...review };
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [truncBody, setTruncBody] = useState(
        body?.length > 80 ? body.substring(0, 80) + "..." : body
    );
    const [cardTotal, setCardTotal] = useState(6);
    const [showButtons, setShowButtons] = useState(authorId === sessionUser.id);
    const [showEditReviewModal, setEditReviewModal] = useState(false);
    const formatDate = (dateString) => {
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
    const deleteHandler = (reviewId) => {
        dispatch(deleteReview(reviewId));
    };

    const editHandler = (reviewId) => {
       dispatch(showModal(reviewId))
    };

    const closeEditReviewModal = () => {
        setEditReviewModal(false);
    }
    const [date, setDate] = useState(formatDate(review.updatedAt));
    let editButtons;
    if (showButtons) {
        editButtons = (
            <div className="miniButtonContainer">
                <button
                    className="editButton miniButton"
                    onClick={() => editHandler(review.id)}
                >
                    edit
                </button>
                <button
                    className="delButton miniButton"
                    onClick={() => deleteHandler(review.id)}
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
