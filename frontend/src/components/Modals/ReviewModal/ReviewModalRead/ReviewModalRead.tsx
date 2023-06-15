import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideReadReviewModal } from "../../../../store/uiSlice";
import ReviewRead from "../../../Reviews/ReviewRead/ReviewRead";
import { RootState } from "../../../../store/store";
import "./ReviewModalRead.css";

function ReviewModalRead() {
    const dispatch = useDispatch();
   
    const review = useSelector((state: RootState) => state.ui.review);

    const handleCloseReviewRead = () => {
        dispatch(hideReadReviewModal());
    };

    return (
        <>
            {" "}
            <div
                id="modalBackgroundRR"
                // className={`modalBackgroundRF ${hideModalFlag ? "hide" : ""}`}
                className="modalBackgroundRR"
                onClick={() => handleCloseReviewRead()}
            >
                {review && <ReviewRead review={review} />}
            </div>
        </>
    );
}


export default ReviewModalRead;