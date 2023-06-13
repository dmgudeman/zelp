// import React from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { hideModal, hideNewReviewModal } from "../../../store/uiSlice";
// import ReviewEdit from "../../Reviews/ReviewEdit/ReviewEdit";
// import ReviewNew from '../../Reviews/ReviewNew/ReviewNew';
// import { RootState } from '../../../store/store';
// import "./ReviewModal.css";

// function ReviewModal(){
//     const dispatch = useDispatch();
//     const hideModalFlag = useSelector((state: RootState) => state.ui.hideModalFlag);
//     const reviewId = useSelector((state: RootState) => state.ui.reviewId);
//     const hideModalNewReviewFlag = useSelector(
//         (state: RootState) => state.ui.hideNewReviewModalFlag
//     );
//     const businessId = useSelector((state: RootState) => state.ui.businessId);
//     let content = null;

//     const handleClose = () => {
//         dispatch(hideModal());
//     };
//     const handleCloseReviewNew = () => {
//         dispatch(hideNewReviewModal())
//     }

//     if (reviewId) {
//         content = (
//             <div
//                 id="modalBackgroundRF"
//                 className={`modalBackgroundRF ${hideModalFlag ? "hide" : ""}`}
//                 onClick={() => handleClose()}
//             >
//                 <ReviewEdit reviewId={reviewId} handleClose={handleClose}/>
//             </div>
//         );
//     }
//     //  else if (businessId) {

//     // if(!hideModalNewReviewFlag && businessId != null){
//     //     content = (
//     //         <div
//     //             id="modalBackgroundRF"
//     //             className={`modalBackgroundRF ${hideModalNewReviewFlag ? "" : "hide"}`}
//     //             onClick={() => handleCloseReviewNew()}
//     //         >
//     //             <ReviewNew businessId={businessId} handleCloseReviewNew={handleCloseReviewNew}/>
//     //         </div>
//     //     );
//     // }

    
//     return <>{content}</>;
// }

// export default ReviewModal;
