import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideEditReviewModal } from "../../../../store/uiSlice";
import ReviewEdit from "../../../Reviews/ReviewEdit/ReviewEdit";
import { RootState } from "../../../../store/store";
import "./ReviewModalEdit.css";

function ReviewModalEdit() {
    const dispatch = useDispatch();
    // const hideModalFlag = useSelector(
    //     (state: RootState) => state.ui.hideEditReviewModal
    // );
    const review  = useSelector((state: RootState) => state.ui.review);

    const handleClose = () => {
        dispatch(hideEditReviewModal());
    };
    const handleCloseReviewEdit = () => {
        dispatch(hideEditReviewModal());
    };

    return (
        <>
            {" "}
            <div
                id="modalBackgroundRF"
                // className={`modalBackgroundRF ${hideModalFlag ? "hide" : ""}`}
                className = "modalBackgroundRF"
                onClick={() => handleCloseReviewEdit()}
            >
                { review && <ReviewEdit review={review} handleCloseReviewEdit={handleCloseReviewEdit} />}
            </div>
        </>
    );
}

export default ReviewModalEdit;
