import type { Business } from './BusinessTypes';
import type { Review } from './ReviewTypes';


export interface UIState {
    modalFlag: string | null;
    showSignup: boolean;
    showLogin: boolean;
    hideNewReviewModal: boolean;
    hideEditReviewModal: boolean;
    business: Business| null;
    review: Review | null;
  }