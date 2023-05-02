import { useState } from "react";

import "./ReviewDisplayCard.css";
import DisplayRating from "../RatingDisplay/RatingDisplay";

const ReviewDisplayCard = ({ review}) => {
    const { body, photoUrl, rating, businessId } = { ...review };
    const [ truncBody, setTruncBody] = useState(body.substring(0,150) + "...")
    const [cardTotal, setCardTotal] = useState(6);

    return (
        <>
            <div id="reviewCardContainer">
                <div id="bodyContainer">
                    <div id="bodyCell">
                        <DisplayRating rating={rating} starClass="starCard" />
                        {truncBody}
                      
                    </div>
                </div>
                { photoUrl ? 
                <div id="photoRatingCell">
                    <img id="img" src={photoUrl} alt="" />
                </div>
                : null}
            </div>
        </>
    );
};

export default ReviewDisplayCard;
