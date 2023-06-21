import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideEditReviewModal } from "../../../../store/uiSlice";
import ReviewEdit from "../../../Reviews/ReviewEdit/ReviewEdit";
import { RootState } from "../../../../store/store";
import "../ReviewModal.css";

function ReviewModalEdit() {
    const dispatch = useDispatch();
   
    const review = useSelector((state: RootState) => state.ui.review);

    const handleCloseReviewEdit = () => {
        dispatch(hideEditReviewModal());
    };

    return (
        <>
            {" "}
            <div
                id="modalBackgroundRF"
                // className={`modalBackgroundRF ${hideModalFlag ? "hide" : ""}`}
                className="modalBackgroundRF"
                onClick={() => handleCloseReviewEdit()}
            >
                {review && <ReviewEdit review={review} />}
            </div>
        </>
    );
}

export default ReviewModalEdit;
