const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

// Action creators
export const showModal = (reviewId) => ({
  type: SHOW_MODAL,
  reviewId
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});



// Reducer
const initialState = {
  showModal:false,
  reviewId: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
       ...state, showModal:true, reviewId: action.reviewId
      };
    case HIDE_MODAL:
      return {
        ...state,
        showModal: false, reviewId: null
      };
    default:
      return state;
  }
};




export default uiReducer;