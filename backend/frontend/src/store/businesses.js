import csrfFetch from "./csrf";
export const RECEIVE_BUSINESSES = "businesses/RECEIVE_BUSINESSES";

export const receiveBusinesses = (businesses) => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses,
    };
};

export const getBusinesses = (state) => {
    return state.businesses ? Object.values(state.businesses) : [];
};

export const fetchBusinesses = () => async (dispatch) => {
    const res = await csrfFetch("/api/businesses");
    const data = await res.json();
    console.log('data', data)
    dispatch(receiveBusinesses(data));
    return res;
};

const businessesReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return { ...action.businesses };
        default:
            return state;
    }
};

export default businessesReducer;
