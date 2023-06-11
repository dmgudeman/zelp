import { useSelector, useDispatch } from "react-redux";
import { hideModal, hideNewReviewModal } from "../../../store/ui";
import ReviewEdit from "../../Reviews/ReviewEdit/ReviewEdit";
import ReviewNew from '../../Reviews/ReviewNew/ReviewNew';
import { useEffect } from "react";
import "./ReviewModal.css";

function ReviewModal() {
    const dispatch = useDispatch();
    const hideModalFlag = useSelector((state) => state.ui.hideModalFlag);
    const reviewId = useSelector((state) => state.ui.reviewId);
    const hideModalNewReviewFlag = useSelector(
        (state) => state.ui.hideNewReviewModalFlag
    );
    const businessId = useSelector((state) => state.ui.businessId);
    let content;

    const handleClose = () => {
        dispatch(hideModal());
    };
    const handleCloseReviewNew = () => {
        dispatch(hideNewReviewModal())
    }

    if (reviewId) {
        content = (
            <div
                id="modalBackgroundRF"
                className={`modalBackgroundRF ${hideModalFlag ? "hide" : ""}`}
                onClick={() => handleClose()}
            >
                <ReviewEdit reviewId={reviewId} handleClose={handleClose}/>
            </div>
        );
    } else if (businessId) {
        content = (
            <div
                id="modalBackgroundRF"
                className={`modalBackgroundRF ${hideModalNewReviewFlag ? "hide" : ""}`}
                onClick={() => handleCloseReviewNew()}
            >
                <ReviewNew businessId={businessId} handleCloseReviewNew={handleCloseReviewNew}/>
            </div>
        );
    }

    return <>{content}</>;
}

export default ReviewModal;
