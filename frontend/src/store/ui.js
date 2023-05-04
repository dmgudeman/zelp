export const OPEN_MODAL = "ui/OPEN_MODAL";
export const CLOSE_MODAL = "ui/CLOSE_MODAL";

export const UPDATE_FILTER = "UPDATE_FILTER";
export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const openModal = (modal) => {
    return {
        type: OPEN_MODAL,
        modal,
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    };
};

const uiReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_FILTER:
            const newFilter = { [action.filter]: action.value };
            return { ...state, ...newFilter };
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
};

export default uiReducer;
