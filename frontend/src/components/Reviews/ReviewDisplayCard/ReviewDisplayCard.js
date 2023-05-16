import { useState } from "react";
import "./ReviewDisplayCard.css";
import DisplayRating from "../RatingDisplay/RatingDisplay";

const ReviewDisplayCard = ({ review, deleteHandler, editHandler }) => {
    const { body, photoUrl, rating, businessId } = { ...review };
    const [truncBody, setTruncBody] = useState(body.substring(0, 80) + "...");
    const [cardTotal, setCardTotal] = useState(6);

    return (
        <>
            <div id="reviewCardContainer">
                <div id="bodyContainer">
                    <div id="bodyCell">
                        <DisplayRating rating={rating} starClass="starCard" />
                        <div id="truncWidth">{truncBody} </div>
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
