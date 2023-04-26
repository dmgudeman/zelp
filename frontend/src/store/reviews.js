import csrfFetch from "./csrf";
export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW";

export const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    };
};

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    };
};


export const getReview =(reviewId) => (state)=> {
  
    return state.reviews ? state.reviews[reviewId] : {};
}



export const fetchReview = (reviewId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`);
    const data = await res.json(); 
    if(res.ok){
    dispatch(receiveReview(data));
    return res;
    } else {
        console.error('error in saving review')
    }
};

export const createReview = (review) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });
    const data = await res.json(); 
    if(res.ok){
        dispatch(receiveReview(data));
        return res;
    } else {
        console.error('error in saving review')
    }
};

const businessesReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return { ...action.reviews };
        case RECEIVE_REVIEW:
            return { ...state, [action.review.id] : action.review };
        default:
            return state;
    }
};

export default businessesReducer;