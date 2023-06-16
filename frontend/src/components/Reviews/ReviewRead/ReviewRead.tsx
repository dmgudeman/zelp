import React from "react";
import RatingDisplayBusiness from "../RatingDisplay/RatingDisplayBusiness/RatingDisplayBusiness";
import type { IReviewEditProps } from "../../../Types/IComponents/IReviews";
import "./ReviewRead.css";

const ReviewRead: React.FC<IReviewEditProps> = ({ review }) => {
    const  preview = <img className="imgRR" src={review.photoUrl} alt="" />;
    return (
        <>
            <div id="combinedFormContainerRR">
                <form id="formRR">
                    <h2 id="titleBigRR">Full Review</h2>
                    <div id="ratingContainerRR">
                        <RatingDisplayBusiness rating={review.rating || 0} />
                    </div>
                    <div id="inputContainerRR">{review.body}</div>
                    <div id="photoContainerRR">{preview}</div>
                </form>
            </div>
        </>
    );
};

export default ReviewRead;
