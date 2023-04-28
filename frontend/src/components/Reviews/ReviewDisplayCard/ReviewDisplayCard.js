import { useState } from "react";

import "./ReviewDisplayCard.css";
import DisplayRating from "../RatingDisplay/RatingDisplay";

const ReviewDisplayCard = ({ review }) => {
    const { body, photoUrl, rating } = { ...review };
    const [cardTotal, setCardTotal] = useState(6);

    return (
        <>
            <div id="reviewCardContainer">
                <div id="photoRatingCell">
                    <DisplayRating rating={rating} />
                    <div id="photo">
                    <img id="img" src={photoUrl} alt="" />
                    </div>
                </div>
                <div id="bodyContainer">
                <div id="bodyCell">{body}</div>

                </div>
               
            </div>
        </>
    );
};

export default ReviewDisplayCard;
