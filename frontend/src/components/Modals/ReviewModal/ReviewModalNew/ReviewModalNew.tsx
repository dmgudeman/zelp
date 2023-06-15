import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideNewReviewModal } from "../../../../store/uiSlice";
import ReviewNew from "../../../Reviews/ReviewNew/ReviewNew";
import { RootState } from "../../../../store/store";
import type { Business } from '../../../../Types/BusinessTypes';
import "./ReviewModalNew.css";

function ReviewModalNew() {
    const dispatch = useDispatch();
  
    const hideModalNewReviewFlag = useSelector(
        (state: RootState) => state.ui.hideNewReviewModal
    );
    const business = useSelector((state: RootState) => state.ui.business as Business);

    const handleClose = () => {
        dispatch(hideNewReviewModal());
    };
    const handleCloseReviewNew = () => {
        dispatch(hideNewReviewModal());
    };

    return (
        <>
            {" "}
            <div
                id="modalBackgroundRF"
                className="modalBackgroundRF"
                onClick={() => handleCloseReviewNew()}
            >
                <ReviewNew
                    business={business}
                    handleCloseReviewNew={handleCloseReviewNew}
                />
            </div>
        </>
    );
}

export default ReviewModalNew;
