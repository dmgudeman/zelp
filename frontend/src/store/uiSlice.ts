import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIState} from '../Types/UITypes';
import { Business} from '../Types/BusinessTypes';
import { Review} from '../Types/ReviewTypes';

const initialState: UIState = {
    modalFlag: null,
    showSignup: false,
    showLogin: false,
    // hideNewReviewModal: true,
    // hideEditReviewModal: true,
    business: null,
    review: null,
  };

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
      showSignupModal: (state) => {
        state.showSignup = true;
      },
      hideSignupModal: (state) => {
        state.showSignup = false;
      },
      showLoginModal: (state) => {
        state.showLogin = true;
      },
      hideLoginModal: (state) => {
        state.showLogin = false;
      },
      showEditReviewModal: (state, action: PayloadAction<Review>) => {
        state.modalFlag = "ReviewEdit";
        state.review = action.payload;
      },
      hideEditReviewModal: (state) => {
        state.modalFlag = null;
        state.review = null;
      },
      showNewReviewModal: (state, action: PayloadAction<Business>) => {
        state.modalFlag = "ReviewNew"
        state.business = action.payload;
      },
      hideNewReviewModal: (state) => {
        state.modalFlag = null;
        state.business = null;
      },
      showReadReviewModal: (state, action: PayloadAction<Review>) => {
        state.modalFlag = "ReviewRead";
        state.review = action.payload;
      },
      hideReadReviewModal: (state) => {
        state.modalFlag = null;
        state.review = null;
      },
    },
  });
  
  export const {
    showSignupModal,
    hideSignupModal,
    showLoginModal,
    hideLoginModal,
    showEditReviewModal,
    hideEditReviewModal,
    showNewReviewModal,
    hideNewReviewModal,
    showReadReviewModal,
    hideReadReviewModal,
  } = uiSlice.actions;
  
  export default uiSlice.reducer;
  














