import csrfFetch from "./csrf";
import { receiveReviews } from "./reviews";
export const RECEIVE_BUSINESSES = "businesses/RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "businesses/RECEIVE_BUSINESS";

export const receiveBusinesses = (businesses) => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses,
    };
};

export const receiveBusiness = (business) => {
    return {
        type: RECEIVE_BUSINESS,
        business,
    };
};

export const getBusinesses = (state) => {
    return state.businesses ? Object.values(state.businesses) : [];
};

export const getBusiness = (businessId) => (state) => {
    return state.businesses ? state.businesses[businessId] : {};
};

export const fetchBusinesses = () => async (dispatch) => {
    const res = await csrfFetch("/api/businesses");
    const data = await res.json();
    dispatch(receiveBusinesses(data));
    return res;
};

export const fetchBusinessesWithTag = (tag) => async (dispatch) => {
    const res = await csrfFetch(`/api/businesses?tag=${tag}`);
    const data = await res.json();
    dispatch(receiveBusinesses(data));
    return res;
};

export const fetchBusinessesSearch =
    ({ tag, bus, add }) =>
    async (dispatch) => {
        try {
            const res = await csrfFetch(
                `/api/businesses?tag=${tag}&bus=${bus}&add=${add}`
            );
            const data = await res.json();
            return dispatch(receiveBusinesses(data));
        } catch (error) {
            console.error("Error fetching businesses: ", error);
        }
    };

export const fetchBusiness = (businessId) => async (dispatch) => {
    const res = await csrfFetch(`/api/businesses/${businessId}`);
    const data = await res.json();

    if (res.ok) {
        if (data.reviews) {
            dispatch(receiveReviews(data.reviews))
        }
        dispatch(receiveBusiness(data));
        return res;
    } else {
        console.error("fetchBusiness did not work, in reducer");
    }
};

const businessesReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return { ...action.businesses };
        case RECEIVE_BUSINESS:
            return { ...state, [action.business.id]: action.business };
        default:
            return state;
    }
};

export default businessesReducer;