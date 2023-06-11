const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";
const SHOW_NEW_REVIEW_MODAL = "SHOW_NEW_REVIEW_MODAL";
const HIDE_NEW_REVIEW_MODAL = "HIDE_NEW_REVIEW_MODAL";

export const showModal = (reviewId) => ({
    type: SHOW_MODAL,
    reviewId,
});

export const hideModal = () => ({
    type: HIDE_MODAL,
});

export const showNewReviewModal = (businessId) => ({
    type: SHOW_NEW_REVIEW_MODAL,
    businessId,
});
export const hideNewReviewModal = () => ({
    type: HIDE_NEW_REVIEW_MODAL,
});

const initialState = {
    hideModalFlag: true,
    reviewId: null,
    hideNewReviewModalFlag: true,
    businessId: null,
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                hideModalFlag: false,
                reviewId: action.reviewId,
            };
        case HIDE_MODAL:
            return {
                ...state,
                hideModalFlag: true,
                reviewId: null,
            };
        case SHOW_NEW_REVIEW_MODAL:
            return {
                ...state,
                hideNewReviewModalFlag: false,
                businessId: action.businessId,
            };
        case HIDE_NEW_REVIEW_MODAL:
            return {
                ...state,
                hideNewReviewModalFlag: true,
                businessId: null,
            };
        default:
            return state;
    }
};

export default uiReducer;
