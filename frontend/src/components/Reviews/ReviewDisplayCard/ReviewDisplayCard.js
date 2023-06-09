import { useState } from "react";
import { useSelector } from "react-redux";
import "./ReviewDisplayCard.css";
import DisplayRating from "../RatingDisplay/RatingDisplay";

const ReviewDisplayCard = ({ review, deleteHandler, editHandler }) => {
    const { body, photoUrl, rating, businessId, authorId } = { ...review };
    const sessionUser = useSelector((state) => state.session.user);
    const [truncBody, setTruncBody] = useState(
        body?.length > 80 ? body.substring(0, 80) + "..." : body
    );
    const [cardTotal, setCardTotal] = useState(6);

    const [showButtons, setShowButtons] = useState(authorId === sessionUser.id);
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
                        {editButtons}
                        <div className="authorName">{`by: ${review.authorName}`}</div>
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
