import csrfFetch from "./csrf";
import { RECEIVE_BUSINESS } from "./businesses";
export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW";

export const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews,
    };
};

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review,
    };
};

export const getReview = (reviewId) => (state) => {
    return state.reviews ? state.reviews[reviewId] : {};
};

export const getReviews = (state) => {
    return state.reviews ? Object.values(state.reviews) : [];
};

export const fetchReviews = () => async (dispatch) => {
    const res = await csrfFetch("/api/reviews");
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveReviews(data));
    } else {
        console.error("fecthReviews failed");
    }
};

export const fetchReviewsByBusiness = (busId) => async (dispatch) => {
    const res = await csrfFetch(`/api/businesses/${busId}`);
    const data = await res.json();
    if (res.ok) {
        dispatch(receiveReviews(data.reviews));
        return res;
    } else {
        console.error("error in saving review");
    }
};

export const fetchReview = (reviewId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`);
    const data = await res.json();
    if (res.ok) {
        dispatch(receiveReview(data));
        return res;
    } else {
        console.error("error in saving review");
    }
};

export const createReview = (review) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews`, {
        method: "POST",
        body: review,
    });
    const data = await res.json();

    try {
        dispatch(receiveReview(data));
        return data;
    } catch (error) {
        return error;
    }
};

export const updateReview = (review) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "PASTE",
        body: review,
    });
    const data = await res.json();
    if (res.ok) {
        dispatch(receiveReview(data));
        return res;
    } else {
        console.error("error in updating review");
    }
};

const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return { ...action.reviews };
        case RECEIVE_REVIEW:
            return { ...state, [action.review.id]: action.review };
        case RECEIVE_BUSINESS:
            return { ...action.business.reviews };
        default:
            return state;
    }
};

export default reviewsReducer;
