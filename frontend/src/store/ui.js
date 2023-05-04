const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

// Action creators
export const showModal = (showModalType) => ({
  type: SHOW_MODAL,
  showModalType,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

// Reducer
const initialState = {
  showModalType: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModalType: action.showModalType,
      };
    case HIDE_MODAL:
      return {
        ...state,
        showModalType: null,
      };
    default:
      return state;
  }
};




export default uiReducer;