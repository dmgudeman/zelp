import csrfFetch from "./csrf";
import { RECEIVE_BUSINESS } from "./businesses";
export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW";
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";

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
export const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId,
    };
};

export const getReview = (reviewId) => (state) => {
    return state.reviews ? state.reviews[reviewId] : {};
};

export const fetchReview = (reviewId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`);
    const data = await res.json();
    if (res.ok) {
        dispatch(receiveReview(data));
        return data;
    } else {
        console.error("error in saving review");
    }
};
export const getReviews = (state) => {
    return state.reviews ? Object.values(state.reviews) : [];
};
// export const getReviewsByBusiness = (reviewId) => (state) => {
//     return state.reviews ? Object.values(state.reviews) : [];
// };

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
export const editReview = (review) => async (dispatch) => {
    console.log('REVIEWWW', review)
    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "PATCH",
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

export const deleteReview = (reviewId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE",
    });
    if (res.ok) {
        dispatch(removeReview(reviewId));
        return res;
    } else {
        console.error("error in updating review");
    }
};

const reviewsReducer = (state = {}, action) => {
    const newState = {...state}
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return { ...action.reviews };
        case RECEIVE_REVIEW:
            console.log('ACTION', action)
            return { ...state, [action.review.id]: action.review};
        case RECEIVE_BUSINESS:
            return { ...action.business.reviews };
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState;
        default:
            return state;
    }
};

export default reviewsReducer;
