import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIState} from '../Types/UITypes';

const initialState: UIState = {
    showSignup: false,
    showLogin: false,
    hideModalFlag: true,
    hideNewReviewModalFlag: true,
    businessId: null,
    reviewId: null,
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
      showModal: (state, action: PayloadAction<number>) => {
        state.hideModalFlag = false;
        state.reviewId = action.payload;
      },
      hideModal: (state) => {
        state.hideModalFlag = true;
        state.reviewId = null;
      },
      showNewReviewModal: (state, action: PayloadAction<number>) => {
        state.hideNewReviewModalFlag = false;
        state.businessId = action.payload;
      },
      hideNewReviewModal: (state) => {
        state.hideNewReviewModalFlag = true;
        state.businessId = null;
      },
    },
  });
  
  export const {
    showSignupModal,
    hideSignupModal,
    showLoginModal,
    hideLoginModal,
    showModal,
    hideModal,
    showNewReviewModal,
    hideNewReviewModal,
  } = uiSlice.actions;
  
  export default uiSlice.reducer;
  














