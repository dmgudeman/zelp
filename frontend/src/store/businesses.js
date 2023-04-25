import csrfFetch from "./csrf";
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

export const getBusiness =(businessId) => (state)=> {
    return state.businesses ? state.businesses[businessId] : null;
}

export const fetchBusinesses = () => async (dispatch) => {
    const res = await csrfFetch("/api/businesses");
    const data = await res.json();
    dispatch(receiveBusinesses(data));
    return res;
};

export const fetchBusiness = (businessId) => async (dispatch) => {
    const res = await csrfFetch(`/api/businesses/${businessId}`);
    const data = await res.json();
    dispatch(receiveBusiness(data));
    return res;
};

const businessesReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return { ...action.businesses };
        case RECEIVE_BUSINESS:
            return { ...state,    [action.business.id] : action.business };
        default:
            return state;
    }
};

export default businessesReducer;